// Exercise quality queue. Run: node scripts/exercise-quality-report.mjs
// An exercise is "promotable" (safe to remove from src/data/unreviewed-exercises.json → becomes indexable)
// only when its page has exercise-specific content. This prints what each unreviewed exercise still lacks.
import { exercises } from '../src/data/exercises.ts';
import { readFileSync } from 'fs';
const unreviewed = new Set(JSON.parse(readFileSync('src/data/unreviewed-exercises.json', 'utf8')));
const GENERIC_CUES = ['Focus on controlled movement throughout each rep.'];
const GENERIC_MISTAKES = ['Using too much weight before mastering the technique.'];
const TEMPLATE_DESC = / is an? (beginner|intermediate|advanced) (compound|isolation) exercise targeting the /;
const gaps = (e) => {
  const g = [];
  if (e.formCues.some((c) => GENERIC_CUES.includes(c))) g.push('generic form cues');
  if (e.commonMistakes.some((m) => GENERIC_MISTAKES.includes(m))) g.push('generic mistakes');
  if (TEMPLATE_DESC.test(e.description)) g.push('templated description');
  if ((e.alternatives || []).length < 2) g.push('<2 alternatives');
  if (e.instructions.length < 3) g.push('<3 instruction steps');
  return g;
};
const hidden = new Set(JSON.parse(readFileSync('src/data/hidden-exercises.json', 'utf8')));
const dupes = JSON.parse(readFileSync('src/data/exercise-duplicates.json', 'utf8'));
const hiddenAll = new Set([...hidden, ...Object.keys(dupes)]);
const idx = exercises.filter((e) => !unreviewed.has(e.slug)), un = exercises.filter((e) => unreviewed.has(e.slug));
const idxBad = idx.filter((e) => gaps(e).length);
const unReady = un.filter((e) => !gaps(e).length);
console.log(`\nIndexable exercises : ${idx.length}  (${idx.length - idxBad.length} pass all checks, ${idxBad.length} have gaps)`);
console.log(`Unreviewed (noindex): ${un.length}  (${unReady.length} ready to promote)`);
console.log(`  of which hidden from library/planner: ${un.filter((e) => hiddenAll.has(e.slug)).length} (stunts/drills ${hidden.size}, duplicates of reviewed exercises ${Object.keys(dupes).length})`);
console.log(`  still visible but unreviewed (review queue): ${un.filter((e) => !hiddenAll.has(e.slug)).length}`);
console.log(`Visible library: ${exercises.length - hiddenAll.size} of ${exercises.length} exercises`);
const tally = {}; un.forEach((e) => gaps(e).forEach((g) => (tally[g] = (tally[g] || 0) + 1)));
console.log('\nGaps across unreviewed exercises:'); Object.entries(tally).forEach(([k, v]) => console.log(`  ${String(v).padStart(4)}  ${k}`));
if (idxBad.length) { console.log('\nIndexable exercises with gaps (fix first):'); idxBad.slice(0, 40).forEach((e) => console.log(`  ${e.slug.padEnd(34)} ${gaps(e).join(', ')}`)); if (idxBad.length > 40) console.log(`  … +${idxBad.length - 40} more`); }
if (unReady.length) { console.log('\nReady to promote (remove from unreviewed-exercises.json):'); unReady.forEach((e) => console.log('  ' + e.slug)); }
console.log('\nHow to promote an exercise: rewrite its cues/mistakes/description, add ≥2 alternatives, then delete its slug from src/data/unreviewed-exercises.json.\n');
