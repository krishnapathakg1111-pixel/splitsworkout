// Every reviewed (library) exercise must resolve to a pose diagram that renders valid SVG. Run: node scripts/test-diagrams.mjs
import { readFileSync } from 'fs';
import { exercises } from '../src/data/exercises.ts';
import { getMovementIllustration } from '../src/data/exerciseMedia.ts';
import { MOVES, implementFor, moveKeyFor } from '../src/lib/moves.ts';
import { renderDiagram } from '../src/lib/figure.ts';
const unrev = new Set(JSON.parse(readFileSync('src/data/unreviewed-exercises.json', 'utf8')));
const library = exercises.filter((e) => !unrev.has(e.slug));
let fail = 0; const bad = (m) => { fail++; console.log('❌ ' + m); };
const used = new Set(); const sizes = [];
for (const e of library) {
  const impl = implementFor(e.equipment); const key = moveKeyFor(getMovementIllustration(e), e.name, impl); const mv = MOVES[key];
  if (!mv) { bad(`${e.slug}: no pose for "${key}"`); continue; }
  used.add(key);
  const svg = renderDiagram(mv, impl, e.primaryMuscle, '#22C55E', `${e.name} — start and finish positions`);
  if (!svg.startsWith('<svg') || !svg.endsWith('</svg>')) bad(`${e.slug}: malformed svg`);
  if (/NaN|undefined|Infinity/.test(svg)) bad(`${e.slug}: invalid number in svg`);
  if (!/role="img"/.test(svg) || !/<title>/.test(svg)) bad(`${e.slug}: missing accessible title`);
  const vb = svg.match(/viewBox="([^"]+)"/)[1].split(' ').map(Number);
  if (!(vb[3] > 90 && vb[3] < 260)) bad(`${e.slug}: odd viewBox height ${vb[3]}`);
  sizes.push(svg.length);
}
console.log(`${library.length - fail >= 0 ? '✅' : '❌'} ${library.length} library exercises → ${used.size} distinct poses, avg SVG ${(sizes.reduce((a, b) => a + b, 0) / sizes.length / 1024).toFixed(1)} KB`);
console.log(fail ? `\n❌ ${fail} FAILED\n` : '\n✅ DIAGRAM TESTS PASSED\n'); process.exit(fail ? 1 : 0);
