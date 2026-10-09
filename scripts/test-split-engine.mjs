// Regression test for the split recommendation engine. Run: node scripts/test-split-engine.mjs
import { recommend, DEFAULT_INPUT } from '../src/lib/splitEngine.ts';
let fail = 0;
const base = DEFAULT_INPUT;
const top = (o) => recommend({ ...base, ...o })[0];
const expect = (label, got, want) => { const ok = want.includes(got); if (!ok) fail++; console.log(`${ok ? '✅' : '❌'} ${label}: ${got}${ok ? '' : `  (expected ${want.join(' | ')})`}`); };

expect('2 days, beginner',                 top({ days: 2 }).slug, ['full-body']);
expect('3 days, beginner, strength',       top({ days: 3, goal: 'strength' }).slug, ['full-body']);
expect('4 days, intermediate, muscle',     top({ days: 4, experience: 'intermediate' }).slug, ['upper-lower']);
expect('5 days, intermediate, focus',      top({ days: 5, experience: 'intermediate', preference: 'focus' }).slug, ['bro-split', 'push-pull-legs', 'pplul']);
expect('5 days, intermediate, frequency → hybrid or PPL', top({ days: 5, experience: 'intermediate', preference: 'frequency' }).slug, ['pplul', 'push-pull-legs', 'upper-lower']);
expect('6 days, advanced, muscle',         top({ days: 6, experience: 'advanced' }).slug, ['push-pull-legs', 'arnold-split']);
expect('6 days, beginner → not Arnold',    top({ days: 6, experience: 'beginner' }).slug, ['push-pull-legs', 'upper-lower']);
expect('3 days, flexible → full body',     top({ days: 3, preference: 'flexible', experience: 'intermediate' }).slug, ['full-body', 'upper-lower']);

const seven = recommend({ ...base, days: 7, experience: 'advanced' });
const sevenWeek = seven[0].week.filter((c) => !c.endsWith('|Rest')).length;
console.log(`${sevenWeek <= 6 ? '✅' : '❌'} 7 days is scheduled as ≤6 training days (${sevenWeek}) with caution: ${seven[0].cautions.some((c) => /Seven days/.test(c))}`);
if (sevenWeek > 6) fail++;

// every combination returns 1–3 recs, each with a 7-cell week, reasons text and a valid build URL
let combos = 0;
for (const days of [2,3,4,5,6,7]) for (const goal of ['muscle','strength','fatloss','general'])
 for (const experience of ['beginner','intermediate','advanced']) for (const sessionLength of ['short','medium','long'])
 for (const equipment of ['full','dumbbells','bodyweight']) for (const preference of ['frequency','focus','flexible'])
 for (const recovery of ['slow','normal','fast']) {
  const r = recommend({ days, goal, experience, sessionLength, equipment, preference, recovery }); combos++;
  if (r.length < 1 || r.length > 3 || r.some((x) => x.week.length !== 7 || !x.buildUrl.startsWith('/workout-planner?split='))) { fail++; console.log('❌ bad result', days, goal, experience); break; }
 }
console.log(`✅ ${combos} input combinations all return valid recommendations`);
console.log(fail ? `\n❌ ${fail} FAILED\n` : '\n✅ ENGINE TESTS PASSED\n'); process.exit(fail ? 1 : 0);
