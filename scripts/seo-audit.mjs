// SplitsWorkout SEO audit — runs against the built site (dist/).
// Usage: node scripts/seo-audit.mjs [--write docs/seo-audit.md] [--json]
// Covers: titles, descriptions, H1, canonical, noindex/sitemap consistency, broken
// internal links, orphan pages, JSON-LD validity, breadcrumbs, image alt, thin content, OG image.
import { readFileSync, readdirSync, statSync, existsSync, writeFileSync } from 'fs';
import { join, relative } from 'path';

const DIST = 'dist';
const SITE = 'https://splitsworkout.com';
const args = process.argv.slice(2);
const writeIdx = args.indexOf('--write');
const outFile = writeIdx > -1 ? args[writeIdx + 1] : null;

function walk(dir) {
  return readdirSync(dir).flatMap((f) => {
    const p = join(dir, f);
    return statSync(p).isDirectory() ? walk(p) : [p];
  });
}
const htmlFiles = walk(DIST).filter((f) => f.endsWith('.html'));
const routeOf = (file) => {
  let r = '/' + relative(DIST, file).replace(/\\/g, '/').replace(/index\.html$/, '').replace(/\.html$/, '');
  if (r.length > 1) r = r.replace(/\/$/, '');
  return r;
};
const dec = (s) => s && s.replace(/&amp;/g, '&').replace(/&#39;/g, "'").replace(/&quot;/g, '"').replace(/&lt;/g, '<').replace(/&gt;/g, '>');
const pages = {};
for (const f of htmlFiles) {
  const html = readFileSync(f, 'utf8');
  const route = routeOf(f);
  const get = (re) => (html.match(re) || [])[1]?.trim();
  const body = html.replace(/<script[\s\S]*?<\/script>/g, ' ').replace(/<style[\s\S]*?<\/style>/g, ' ');
  const main = (body.match(/<main[\s\S]*?<\/main>/) || [body])[0];
  const text = main.replace(/<[^>]+>/g, ' ').replace(/&[a-z#0-9]+;/g, ' ').replace(/\s+/g, ' ').trim();
  const ld = [...html.matchAll(/<script type="application\/ld\+json">([\s\S]*?)<\/script>/g)].map((m) => m[1]);
  const links = [...html.matchAll(/<a [^>]*href="([^"]+)"/g)].map((m) => m[1]);
  const mainLinks = [...main.matchAll(/<a [^>]*href="([^"]+)"/g)].map((m) => m[1]);
  const imgs = [...html.matchAll(/<img [^>]*>/g)].map((m) => m[0]);
  pages[route] = {
    route,
    title: dec(get(/<title>([\s\S]*?)<\/title>/)),
    description: dec(get(/<meta name="description" content="([^"]*)"/)),
    canonical: get(/<link rel="canonical" href="([^"]*)"/),
    robots: get(/<meta name="robots" content="([^"]*)"/) || '',
    ogImage: get(/<meta property="og:image" content="([^"]*)"/),
    h1s: [...main.matchAll(/<h1[\s>][\s\S]*?<\/h1>/g)].length,
    words: text ? text.split(' ').length : 0,
    ld, links, mainLinks, imgs,
  };
}
const sitemapUrls = existsSync(join(DIST, 'sitemap.xml'))
  ? [...readFileSync(join(DIST, 'sitemap.xml'), 'utf8').matchAll(/<loc>([^<]+)<\/loc>/g)].map((m) => m[1].replace(SITE, '') || '/')
  : [];

const errors = [], warnings = [];
const E = (r, m) => errors.push(`${r}  —  ${m}`);
const W = (r, m) => warnings.push(`${r}  —  ${m}`);

const titles = {}, descs = {};
const inbound = Object.fromEntries(Object.keys(pages).map((r) => [r, 0]));
const contextual = Object.fromEntries(Object.keys(pages).map((r) => [r, 0]));
const exists = (href) => {
  let p = href.split('#')[0].split('?')[0];
  if (!p || p === '/') return true;
  p = p.replace(/\/$/, '');
  return existsSync(join(DIST, p, 'index.html')) || existsSync(join(DIST, p + '.html')) || existsSync(join(DIST, p));
};

for (const p of Object.values(pages)) {
  const noindex = /noindex/.test(p.robots);
  const is404 = p.route === '/404' || p.route === '/500';
  if (!p.title) E(p.route, 'missing <title>'); else {
    (titles[p.title] ||= []).push(p.route);
    if (!noindex && p.title.length > 65) W(p.route, `title ${p.title.length} chars (>65)`);
  }
  if (!p.description) E(p.route, 'missing meta description'); else {
    (descs[p.description] ||= []).push(p.route);
    if (!noindex && p.description.length > 170) W(p.route, `description ${p.description.length} chars (>170)`);
    if (p.description.length < 60) W(p.route, `description only ${p.description.length} chars`);
  }
  if (p.h1s !== 1) E(p.route, `${p.h1s} <h1> tags (need exactly 1)`);
  if (!p.canonical) E(p.route, 'missing canonical');
  else if (!is404 && p.canonical !== SITE + (p.route === '/' ? '/' : p.route) && p.canonical !== SITE + p.route)
    E(p.route, `canonical mismatch → ${p.canonical}`);
  if (!noindex && !is404) {
    if (!sitemapUrls.includes(p.route)) E(p.route, 'indexable page missing from sitemap.xml');
    if (p.words < 300) W(p.route, `thin content: ${p.words} words in <main>`);
    if (p.route !== '/' && !p.ld.some((l) => l.includes('BreadcrumbList'))) W(p.route, 'no BreadcrumbList JSON-LD');
  }
  if (noindex && sitemapUrls.includes(p.route)) E(p.route, 'noindex page is listed in sitemap.xml');
  for (const l of p.ld) { try { JSON.parse(l); } catch { E(p.route, 'invalid JSON-LD'); } }
  for (const img of p.imgs) if (!/ alt="/.test(img)) E(p.route, 'image without alt attribute');
  if (p.ogImage) { const f = p.ogImage.replace(SITE, ''); if (!existsSync(join(DIST, f))) E(p.route, `og:image file missing (${f})`); }
  const seen = new Set();
  for (const href of p.mainLinks) {
    const tg = href.startsWith('/') && !href.startsWith('//') ? (href.split('#')[0].split('?')[0].replace(/(.)\/$/, '$1') || '/') : null;
    if (tg && tg !== p.route && contextual[tg] !== undefined && !(p._ctx ||= new Set()).has(tg)) { p._ctx.add(tg); contextual[tg]++; }
  }
  for (const href of p.links) {
    if (!href.startsWith('/') || href.startsWith('//')) continue;
    const target = href.split('#')[0].split('?')[0].replace(/(.)\/$/, '$1') || '/';
    if (!exists(href)) E(p.route, `broken internal link → ${href}`);
    else if (target !== p.route && !seen.has(target)) { seen.add(target); if (inbound[target] !== undefined) inbound[target]++; }
  }
  if (!is404 && p.links.filter((h) => h.startsWith('/')).length > (p.route === '/exercises' ? 400 : 120)) W(p.route, 'excessive internal links');
}
for (const [t, rs] of Object.entries(titles)) if (rs.length > 1) E(rs.join(', '), `duplicate title "${t}"`);
for (const [d, rs] of Object.entries(descs)) if (rs.length > 1) W(rs.slice(0, 4).join(', ') + (rs.length > 4 ? ` +${rs.length - 4}` : ''), `duplicate description`);
for (const [r, n] of Object.entries(inbound)) {
  const p = pages[r];
  // Orphans only matter for indexable pages: hidden/noindex exercise pages are deliberately unlinked from the library.
  if (n === 0 && r !== '/' && r !== '/404' && r !== '/500' && !/noindex/.test(p.robots)) W(r, 'orphan page: no internal links point here');
}
for (const u of sitemapUrls) if (!pages[u]) E(u, 'in sitemap but page not built');

const KEY = ['/', '/workout-splits', '/workout-splits/best-workout-split', '/workout-split-finder', '/workout-planner', '/exercises', '/muscles', '/calculators', '/calculators/tdee', '/workout-splits/push-pull-legs', '/workout-splits/upper-lower', '/workout-splits/full-body', '/workout-splits/4-day', '/guides', '/methodology'];
const inboundTable = KEY.filter((k) => pages[k]).map((k) => [k, contextual[k]]);
const indexable = Object.values(pages).filter((p) => !/noindex/.test(p.robots) && p.route !== '/404' && p.route !== '/500');
const summary = [
  `Pages built: ${Object.keys(pages).length}`,
  `Indexable: ${indexable.length}   Noindex: ${Object.keys(pages).length - indexable.length}`,
  `In sitemap: ${sitemapUrls.length}`,
  `Errors: ${errors.length}   Warnings: ${warnings.length}`,
];
const group = (arr) => {
  const g = {};
  for (const x of arr) { const k = x.split('  —  ')[1].replace(/→.*|\(.*|"[^"]*"|\d+/g, '#').trim(); (g[k] ||= []).push(x); }
  return g;
};
console.log('\n=== SEO AUDIT ===\n' + summary.join('\n'));
for (const [label, arr] of [['ERRORS', errors], ['WARNINGS', warnings]]) {
  if (!arr.length) continue;
  console.log(`\n--- ${label} ---`);
  for (const [k, items] of Object.entries(group(arr))) {
    console.log(`• ${k} (${items.length})`);
    items.slice(0, 5).forEach((i) => console.log('    ' + i));
    if (items.length > 5) console.log(`    … +${items.length - 5} more`);
  }
}
console.log('\n--- CONTEXTUAL INBOUND LINKS (from page content, excluding nav/footer) ---');
inboundTable.forEach(([r, n]) => console.log('  ' + String(n).padStart(4) + '  ' + r));
console.log(errors.length ? '\n❌ AUDIT FAILED\n' : '\n✅ AUDIT PASSED (0 errors)\n');

if (outFile) {
  const md = [`# SEO audit report`, '', ...summary.map((s) => `- ${s}`), '',
    '## Errors', errors.length ? errors.map((e) => `- ${e}`).join('\n') : '_none_', '',
    '## Warnings', warnings.length ? warnings.map((e) => `- ${e}`).join('\n') : '_none_', '',
    '## Contextual inbound links — key pages (links from page content, excluding nav/footer)', '', '| Page | Linking pages |', '|---|---|', ...inboundTable.map(([r, n]) => `| ${r} | ${n} |`), '', '## Page inventory', '', '| Route | Title | H1s | Words | Robots |', '|---|---|---|---|---|',
    ...Object.values(pages).sort((a, b) => a.route.localeCompare(b.route)).map((p) => `| ${p.route} | ${(p.title || '').replace(/\|/g, '\\|')} | ${p.h1s} | ${p.words} | ${/noindex/.test(p.robots) ? 'noindex' : 'index'} |`)].join('\n');
  writeFileSync(outFile, md);
  console.log(`Report written to ${outFile}`);
}
process.exit(errors.length ? 1 : 0);
