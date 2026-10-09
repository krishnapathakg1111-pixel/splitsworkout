// Generated XML sitemap. Lists only canonical, indexable URLs:
//  - hand-built pages (below), split/day pages, muscle pages, guides, methodology
//  - exercise pages that pass the quality gate (isIndexableExercise) — noindex pages are excluded
// scripts/seo-audit.mjs cross-checks this list against each page's robots meta, so drift is caught at build time.
import type { APIRoute } from 'astro';
import { exercises } from '../data/exercises';
import { splits } from '../data/splits';
import { dayPlans } from '../data/dayPlans';
import { comparisons } from '../data/comparisons';
import { goalPlans } from '../data/goalPlans';
import { guides } from '../data/guides';
import { isIndexableExercise, abs } from '../lib/seo';

import { muscles } from '../data/muscles';
const MUSCLES = muscles.map((m) => m.slug);
const GUIDES = ['how-to-choose-a-workout-split', ...guides.map((g) => g.slug)];

export const GET: APIRoute = () => {
  const paths: string[] = [
    '/', '/workout-splits', '/workout-splits/best-workout-split', '/workout-split-finder', '/workout-planner',
    '/exercises', '/muscles', '/calculators', '/calculators/tdee', '/calculators/macros', '/calculators/bmi',
    '/guides', '/about', '/methodology', '/methodology/exercises', '/methodology/workout-splits', '/methodology/calculators',
    '/contact', '/privacy-policy', '/terms',
    ...splits.map((s) => `/workout-splits/${s.slug}`),
    ...dayPlans.map((d) => `/workout-splits/${d.slug}`),
    ...comparisons.map((c) => `/workout-splits/${c.slug}`),
    ...goalPlans.map((g) => `/workout-splits/${g.slug}`),
    ...MUSCLES.map((m) => `/muscles/${m}`),
    ...GUIDES.map((g) => `/guides/${g}`),
    ...exercises.filter((e) => isIndexableExercise(e.slug)).map((e) => `/exercises/${e.slug}`),
  ];
  const unique = [...new Set(paths)];
  const body = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${unique
    .map((p) => `  <url><loc>${abs(p)}</loc></url>`)
    .join('\n')}\n</urlset>\n`;
  return new Response(body, { headers: { 'Content-Type': 'application/xml; charset=utf-8' } });
};
