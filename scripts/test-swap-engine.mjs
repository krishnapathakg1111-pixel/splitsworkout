// Swap engine regression test. Run: node scripts/test-swap-engine.mjs
import { exercises } from '../src/data/exercises.ts';
import { readFileSync } from 'fs';
import { rankSwaps, coreEquipment, allowedBy } from '../src/lib/swapEngine.ts';
let fail = 0; const ok = (c, m) => { console.log((c ? '✅ ' : '❌ ') + m); if (!c) fail++; };
const unrev = new Set(JSON.parse(readFileSync('src/data/unreviewed-exercises.json', 'utf8')));
const isU = (s) => unrev.has(s);
const by = (s) => exercises.find((e) => e.slug === s);
const top = (s, n = 8, preset = '') => rankSwaps(by(s), exercises, n, preset, isU).map((x) => x.slug);

const bench = top('barbell-bench-press', 10);
console.log('   bench →', bench.join(', '));
['dumbbell-bench-press', 'machine-chest-press', 'smith-machine-bench-press'].forEach((s) => ok(bench.includes(s), `bench press swaps include ${s}`));
ok(!bench.some((s) => /curl|extension|raise|squat/.test(s)), 'bench press swaps contain no curls/extensions/raises/squats');
const noBar = top('barbell-bench-press', 10, 'nobarbell');
ok(noBar.length > 0 && noBar.every((s) => !coreEquipment(by(s)).some((x) => ['Barbell', 'EZ Bar', 'Trap Bar', 'Landmine', 'Smith Machine'].includes(x))), `"No barbell" preset leaves ${noBar.length} swaps, none with a barbell`);
const db = top('barbell-bench-press', 10, 'dumbbells');
ok(db.includes('dumbbell-bench-press') && db.includes('push-up'), 'dumbbells-only preset keeps dumbbell press + push-up');
const sq = top('squat', 10, 'dumbbells'); console.log('   squat (dumbbells only) →', sq.join(', '));
ok(sq.includes('goblet-squat'), 'dumbbell-only squat swaps include goblet squat');
const tri = top('tricep-pushdown', 10, 'nocable'); console.log('   pushdown (no cable) →', tri.join(', '));
ok(tri.some((s) => /overhead|skull/.test(s)) && tri.every((s) => !by(s).equipment.includes('Cable')), 'no-cable pushdown swaps include overhead/skull crusher and no cable moves');
// coverage: every curated (indexable-quality) exercise has ≥3 swaps
const lonely = exercises.filter((e) => rankSwaps(e, exercises, 12, '', isU).length < 3).map((e) => e.slug);
console.log(`   exercises with fewer than 3 swaps: ${lonely.length}${lonely.length ? ' → ' + lonely.slice(0, 12).join(', ') : ''}`);
ok(lonely.length / exercises.length < 0.08, `≥92% of ${exercises.length} exercises have 3+ swaps`);
ok(!bench.some(isU) && !sq.some(isU), 'no unreviewed/junk exercises are ever suggested');
ok(allowedBy('', ['Barbell']) && !allowedBy('nocable', ['Cable']), 'allowedBy basics');
console.log(fail ? `\n❌ ${fail} FAILED\n` : '\n✅ SWAP ENGINE TESTS PASSED\n'); process.exit(fail ? 1 : 0);
