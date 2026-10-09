import { readFileSync } from 'fs';
const content = readFileSync('src/data/exercises.ts', 'utf-8');
const slugMatches = content.match(/slug: '([^']+)'/g) || [];
const allSlugs = slugMatches.map(m => m.replace("slug: '", '').replace("'", ''));
const altMatches = content.match(/alternatives: \[(.*?)\]/gs) || [];
const broken = []; const duplicates = [];
const seen = new Set();
for (const slug of allSlugs) { if (seen.has(slug)) duplicates.push(slug); seen.add(slug); }
for (const altBlock of altMatches) {
  const refs = altBlock.match(/'([^']+)'/g)?.map(m => m.replace(/'/g, '')) || [];
  for (const ref of refs) { if (!seen.has(ref)) broken.push(ref); }
}
const catMatches = content.match(/category: '([^']+)'/g) || [];
const cats = {};
for (const m of catMatches) { const cat = m.replace("category: '", '').replace("'", ''); cats[cat] = (cats[cat] || 0) + 1; }
const equipMatches = content.match(/equipment: \[([^\]]+)\]/g) || [];
const equips = {};
for (const m of equipMatches) { const refs = m.match(/'([^']+)'/g)?.map(r => r.replace(/'/g, '')) || []; for (const e of refs) equips[e] = (equips[e] || 0) + 1; }
const machineCount = (equips['Machine'] || 0) + (equips['Assisted Machine'] || 0);
// ── cross-dataset checks ──
import { readFileSync as rf } from 'fs';
const splitsSrc = rf('src/data/splits.ts', 'utf-8');
const splitSlugs = new Set([...splitsSrc.matchAll(/^    slug: '([^']+)'/gm)].map(m => m[1]));
const splitRefs = [...splitsSrc.matchAll(/ slug: '([^']+)', sets:/g)].map(m => m[1]);
const brokenSplitEx = [...new Set(splitRefs.filter(s => !seen.has(s)))];
const relSplits = [...content.matchAll(/relatedSplits: \[(.*?)\]/gs)].flatMap(m => (m[1].match(/'([^']+)'/g) || []).map(x => x.replace(/'/g, '')));
const brokenRel = [...new Set(relSplits.filter(s => !splitSlugs.has(s)))];
const dupMap = JSON.parse(rf('src/data/exercise-duplicates.json', 'utf-8'));
const hiddenList = JSON.parse(rf('src/data/hidden-exercises.json', 'utf-8'));
const unrevList = new Set(JSON.parse(rf('src/data/unreviewed-exercises.json', 'utf-8')));
const brokenDup = Object.entries(dupMap).filter(([s, c]) => !seen.has(s) || !seen.has(c) || unrevList.has(c)).map(([s, c]) => `${s}→${c}`);
const brokenHidden = hiddenList.filter((s) => !seen.has(s));
const musSrc = rf('src/data/muscles.ts', 'utf-8');
const musRefs = [...musSrc.matchAll(/(?:topExercises|compoundExercises|isolationExercises): \[(.*?)\]/gs)].flatMap(m => (m[1].match(/'([^']+)'/g) || []).map(x => x.replace(/'/g, '')));
const brokenMus = [...new Set(musRefs.filter(s => !seen.has(s)))];
console.log('\n════ SPLITSWORKOUT EXERCISE DATABASE ════\n');
console.log(`Total exercises: ${allSlugs.length}`);
console.log('\n── BY CATEGORY ──');
Object.entries(cats).sort((a,b) => a[0].localeCompare(b[0])).forEach(([k,v]) => console.log(`  ${k.padEnd(16)} ${v}`));
console.log('\n── BY EQUIPMENT ──');
Object.entries(equips).sort((a,b) => b[1]-a[1]).slice(0,15).forEach(([k,v]) => console.log(`  ${k.padEnd(20)} ${v}`));
console.log('\n── HIGHLIGHTS ──');
console.log(`  Machine:   ${machineCount}  Bodyweight: ${equips['Bodyweight']||0}  Barbell: ${equips['Barbell']||0}`);
console.log(`  Dumbbell:  ${equips['Dumbbell']||0}  Cable: ${equips['Cable']||0}  Smith: ${equips['Smith Machine']||0}`);
if (duplicates.length > 0) { console.log('\n❌ DUPLICATES:'); duplicates.forEach(d => console.log(`  ${d}`)); }
const uniqueBroken = [...new Set(broken)];
if (uniqueBroken.length > 0) { console.log(`\n⚠️  BROKEN REFS (${uniqueBroken.length}):`); uniqueBroken.slice(0,10).forEach(b => console.log(`  ${b}`)); }
if (brokenSplitEx.length) console.log('\n❌ SPLIT → EXERCISE broken refs:', brokenSplitEx.join(', '));
if (brokenRel.length) console.log('\n❌ relatedSplits referencing unknown splits:', brokenRel.join(', '));
if (brokenMus.length) console.log('\n❌ MUSCLE → EXERCISE broken refs:', brokenMus.join(', '));
if (brokenDup.length) console.log('\n❌ duplicate map points to a missing or unreviewed target:', brokenDup.join(', '));
if (brokenHidden.length) console.log('\n❌ hidden list has unknown slugs:', brokenHidden.join(', '));
const bad = brokenDup.length + brokenHidden.length + duplicates.length + uniqueBroken.length + brokenSplitEx.length + brokenRel.length + brokenMus.length;
console.log(bad === 0 ? '\n✅ VALIDATION PASSED (slugs, alternatives, split refs, muscle refs)\n' : '\n❌ VALIDATION FAILED\n');
process.exit(bad ? 1 : 0);
