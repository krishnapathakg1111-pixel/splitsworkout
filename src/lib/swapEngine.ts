// Exercise swap engine — ranks substitutes for an exercise from the canonical dataset.
// Weights (documented at /methodology/exercises): same primary muscle > same movement pattern >
// same mechanics (compound/isolation) > secondary-muscle overlap > similar difficulty > curated alternatives.
// Pure functions (no imports at runtime) so they run at build time, in the browser and in tests.
import type { Exercise } from '../data/exercises';

// Equipment that only supports the movement (not the "load") — ignored for equipment filters.
const ACCESSORY = new Set(['Bench', 'Incline Bench', 'Decline Bench', 'Squat Rack', 'Pull-Up Bar', 'Dip Bars', 'Preacher Bench', 'Other']);
export const coreEquipment = (e: Pick<Exercise, 'equipment'>): string[] => e.equipment.filter((x) => !ACCESSORY.has(x));

export type PresetId = 'nobarbell' | 'dumbbells' | 'nocable' | 'bodyweight';
export const PRESETS: Record<PresetId, { label: string; deny?: string[]; only?: string[] }> = {
  nobarbell: { label: 'No barbell', deny: ['Barbell', 'EZ Bar', 'Trap Bar', 'Landmine', 'Smith Machine'] },
  dumbbells: { label: 'Dumbbells only', only: ['Dumbbell', 'Bodyweight', 'Kettlebell', 'Resistance Band'] },
  nocable: { label: 'No cable', deny: ['Cable'] },
  bodyweight: { label: 'Bodyweight only', only: ['Bodyweight', 'Resistance Band'] },
};
export function allowedBy(preset: PresetId | null | '', eq: string[]): boolean {
  if (!preset) return true;
  const p = PRESETS[preset];
  if (p.deny) return !eq.some((x) => p.deny!.includes(x));
  if (p.only) return eq.every((x) => p.only!.includes(x));
  return true;
}

export interface Swap { slug: string; name: string; score: number; why: string[] }

export function scoreSwap(a: Exercise, b: Exercise): { score: number; why: string[] } {
  let s = 0; const why: string[] = [];
  if (a.primaryMuscle === b.primaryMuscle) { s += 40; why.push(`same primary muscle (${b.primaryMuscle})`); }
  else if (a.category === b.category) { s += 18; why.push(`same muscle group (${b.category})`); }
  else if (b.secondaryMuscles.includes(a.primaryMuscle)) s += 8;
  if (a.movementPattern && a.movementPattern === b.movementPattern) { s += 25; why.push(`same movement (${b.movementPattern})`); }
  else if (a.movement === b.movement && a.movement !== 'Isolation') s += 8;
  if (a.type === b.type) s += 8;
  if (!!a.unilateral === !!b.unilateral) s += 3;
  const lvl = { Beginner: 0, Intermediate: 1, Advanced: 2 } as const;
  const d = Math.abs(lvl[a.difficulty] - lvl[b.difficulty]);
  s += d === 0 ? 5 : d === 1 ? 2 : 0;
  s += Math.min(12, 4 * a.secondaryMuscles.filter((m) => b.secondaryMuscles.includes(m) || m === b.primaryMuscle).length);
  if (a.alternatives?.includes(b.slug) || b.alternatives?.includes(a.slug)) { s += 15; why.push('listed alternative'); }
  return { score: s, why };
}

// Unreviewed (imported, not yet quality-checked) exercises are never *suggested* as swaps — they stay usable elsewhere.
export function rankSwaps(ex: Exercise, all: Exercise[], limit = 12, preset: PresetId | '' = '', isUnreviewed: (slug: string) => boolean = () => false): Swap[] {
  return all
    .filter((b) => b.slug !== ex.slug && !isUnreviewed(b.slug) && allowedBy(preset, coreEquipment(b)))
    .map((b) => { const r = scoreSwap(ex, b); return { slug: b.slug, name: b.name, score: r.score, why: r.why }; })
    .filter((s) => s.score >= 45)                       // must share the muscle AND (movement or mechanics)
    .sort((x, y) => y.score - x.score || x.name.localeCompare(y.name))
    .slice(0, limit);
}
