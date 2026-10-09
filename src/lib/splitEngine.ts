// Rules-based split recommendation engine (no AI, no network).
// Deliberately transparent: every score component maps to a reason shown to the user, and the
// logic is documented at /methodology/workout-splits. Recommendations are starting points,
// not medical or coaching advice.

export type Goal = 'muscle' | 'strength' | 'fatloss' | 'general';
export type Experience = 'beginner' | 'intermediate' | 'advanced';
export type SessionLength = 'short' | 'medium' | 'long';
export type Equipment = 'full' | 'dumbbells' | 'bodyweight';
export type Preference = 'frequency' | 'focus' | 'flexible';
export type Recovery = 'slow' | 'normal' | 'fast';

export interface FinderInput {
  days: number; goal: Goal; experience: Experience; sessionLength: SessionLength;
  equipment: Equipment; preference: Preference; recovery: Recovery;
}
export interface Recommendation {
  slug: string; name: string; url: string; buildUrl: string;
  tier: 'Best fit' | 'Strong alternative' | 'Also workable';
  score: number; reasons: string[]; cautions: string[]; week: string[]; summary: string;
}

type Fit = 'ideal' | 'workable' | 'stretch' | 'no';
interface Profile {
  slug: string; name: string; summary: string;
  days: Record<number, Fit>;
  experience: Record<Experience, number>;
  goal: Record<Goal, number>;
  length: Record<SessionLength, number>;
  preference: Record<Preference, number>;
  recovery: Record<Recovery, number>;
  labels: (n: number) => string[];
  daysNote: Partial<Record<number, string>>;
}

const cycle = (arr: string[], n: number) => Array.from({ length: n }, (_, i) => arr[i % arr.length]);

const PROFILES: Profile[] = [
  {
    slug: 'full-body', name: 'Full Body Split',
    summary: 'Every session trains your whole body, so each muscle gets hit 2–3 times a week.',
    days: { 2: 'ideal', 3: 'ideal', 4: 'workable', 5: 'stretch', 6: 'no' },
    experience: { beginner: 20, intermediate: 4, advanced: 0 },
    goal: { muscle: 6, strength: 14, fatloss: 12, general: 14 },
    length: { short: -4, medium: 2, long: 6 },
    preference: { frequency: 10, focus: -8, flexible: 10 },
    recovery: { slow: 6, normal: 2, fast: 0 },
    labels: (n) => cycle(['Full Body A', 'Full Body B', 'Full Body C'], n),
    daysNote: {
      2: 'With two days, full body is the most efficient way to train every muscle twice a week.',
      3: 'Three non-consecutive full-body days is the classic setup: every muscle trained three times a week with a rest day between sessions.',
      4: 'Four full-body days works, but keep sessions moderate — most people do better with upper/lower at four days.',
    },
  },
  {
    slug: 'upper-lower', name: 'Upper Lower Split',
    summary: 'Alternates upper-body and lower-body days so each muscle is trained about twice a week.',
    days: { 2: 'workable', 3: 'workable', 4: 'ideal', 5: 'workable', 6: 'stretch', 7: 'no' },
    experience: { beginner: 10, intermediate: 14, advanced: 8 },
    goal: { muscle: 12, strength: 14, fatloss: 12, general: 12 },
    length: { short: 2, medium: 4, long: 4 },
    preference: { frequency: 8, focus: 0, flexible: 6 },
    recovery: { slow: 4, normal: 3, fast: 2 },
    labels: (n) => cycle(['Upper', 'Lower'], n),
    daysNote: {
      2: 'Two days gives you one upper and one lower session — fine, but each muscle is only trained once a week.',
      3: 'On three days, alternate upper/lower/upper one week and lower/upper/lower the next.',
      4: 'Four days is the sweet spot: upper, lower, rest, upper, lower — every muscle twice a week with good recovery.',
      5: 'Five days is typically the four-day plan plus an optional extra day for weak points.',
    },
  },
  {
    slug: 'push-pull-legs', name: 'Push Pull Legs (PPL)',
    summary: 'Groups training by movement: push (chest/shoulders/triceps), pull (back/biceps), legs.',
    days: { 2: 'no', 3: 'workable', 4: 'stretch', 5: 'workable', 6: 'ideal', 7: 'stretch' },
    experience: { beginner: -6, intermediate: 12, advanced: 14 },
    goal: { muscle: 12, strength: 6, fatloss: 8, general: 6 },
    length: { short: 6, medium: 2, long: 0 },
    preference: { frequency: 6, focus: 6, flexible: -4 },
    recovery: { slow: -6, normal: 0, fast: 4 },
    labels: (n) => {
      if (n === 4) return ['Push', 'Pull', 'Legs', 'Upper'];
      if (n === 5) return ['Push', 'Pull', 'Legs', 'Upper', 'Lower'];
      return cycle(['Push', 'Pull', 'Legs'], n);
    },
    daysNote: {
      3: 'On three days you run one push, one pull and one legs session — each muscle is trained once a week.',
      5: 'Five days is usually push/pull/legs plus an upper and a lower day, so some muscles hit twice and some once.',
      6: 'Six days lets you run the full cycle twice — each muscle twice a week, which is why PPL is popular for muscle gain.',
    },
  },
  {
    slug: 'pplul', name: 'PPLUL (PPL + Upper/Lower)',
    summary: 'Push, pull and legs, then an upper and a lower day — most muscles twice a week on five days.',
    days: { 3: 'no', 4: 'stretch', 5: 'ideal', 6: 'stretch' },
    experience: { beginner: -4, intermediate: 12, advanced: 10 },
    goal: { muscle: 12, strength: 8, fatloss: 8, general: 6 },
    length: { short: 4, medium: 3, long: 0 },
    preference: { frequency: 8, focus: 4, flexible: -2 },
    recovery: { slow: 0, normal: 2, fast: 2 },
    labels: (n) => (n === 4 ? ['Push', 'Pull', 'Legs', 'Upper'] : n === 6 ? ['Push', 'Pull', 'Legs', 'Upper', 'Lower', 'Weak points'] : ['Push', 'Pull', 'Legs', 'Upper', 'Lower']),
    daysNote: {
      4: 'On four days, drop the lower day: legs are trained once, upper-body muscles twice.',
      5: 'Five days is the home of PPLUL: push, pull and legs, then upper and lower — most muscles twice a week with two rest days.',
      6: 'On six days, add a weak-point day to the five-day layout.',
    },
  },
  {
    slug: 'bro-split', name: 'Bro Split (Body-Part Split)',
    summary: 'One or two muscle groups per day (chest day, back day, leg day…), each trained about once a week.',
    days: { 3: 'no', 4: 'stretch', 5: 'ideal', 6: 'stretch' },
    experience: { beginner: 0, intermediate: 4, advanced: 8 },
    goal: { muscle: 10, strength: -4, fatloss: 4, general: 2 },
    length: { short: 6, medium: 2, long: 0 },
    preference: { frequency: -10, focus: 12, flexible: -6 },
    recovery: { slow: 4, normal: 2, fast: 0 },
    labels: (n) => (n === 4 ? ['Chest & Triceps', 'Back & Biceps', 'Legs', 'Shoulders & Abs'] : cycle(['Chest', 'Back', 'Shoulders', 'Arms', 'Legs', 'Weak points'], n)),
    daysNote: {
      4: 'On four days, pair muscles (chest & triceps, back & biceps, legs, shoulders).',
      5: 'Five days gives each major muscle its own day — high volume per session, but only one hit per week.',
    },
  },
  {
    slug: 'arnold-split', name: 'Arnold Split',
    summary: 'Chest & back, shoulders & arms, then legs — run twice a week for high weekly volume.',
    days: { 3: 'stretch', 4: 'no', 5: 'stretch', 6: 'ideal', 7: 'no' },
    experience: { beginner: -20, intermediate: -2, advanced: 14 },
    goal: { muscle: 14, strength: 2, fatloss: 4, general: 0 },
    length: { short: -6, medium: 0, long: 2 },
    preference: { frequency: 4, focus: 8, flexible: -8 },
    recovery: { slow: -10, normal: 0, fast: 6 },
    labels: (n) => cycle(['Chest & Back', 'Shoulders & Arms', 'Legs'], n),
    daysNote: {
      6: 'Six days runs chest & back, shoulders & arms, and legs twice — high volume that needs good recovery.',
      3: 'Three days runs the cycle once, so each muscle is trained once a week.',
    },
  },
];

const FIT_SCORE: Record<Fit, number> = { ideal: 40, workable: 24, stretch: 8, no: -40 };
const TRAIN_DAY_SLOTS: Record<number, number[]> = {
  1: [0], 2: [0, 3], 3: [0, 2, 4], 4: [0, 1, 3, 4], 5: [0, 1, 2, 4, 5], 6: [0, 1, 2, 3, 4, 5],
};

function weekFor(p: Profile, trainingDays: number): string[] {
  const labels = p.labels(trainingDays);
  const slots = TRAIN_DAY_SLOTS[trainingDays] ?? TRAIN_DAY_SLOTS[6];
  const names = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];
  return names.map((d, i) => {
    const idx = slots.indexOf(i);
    return `${d}|${idx >= 0 ? labels[idx] : 'Rest'}`;
  });
}

export function recommend(input: FinderInput): Recommendation[] {
  const requested = Math.min(7, Math.max(2, input.days));
  const trainingDays = Math.min(requested, 6);   // we never schedule seven hard days
  const out: Recommendation[] = [];

  for (const p of PROFILES) {
    const fit = p.days[trainingDays] ?? 'no';
    if (fit === 'no') continue;
    let score = FIT_SCORE[fit];
    const reasons: string[] = [];
    const cautions: string[] = [];
    const note = p.daysNote[trainingDays];
    if (note) reasons.push(note);

    const e = p.experience[input.experience]; score += e;
    if (e >= 10) reasons.push(`It suits ${input.experience} lifters well.`);
    if (e <= -6) cautions.push(input.experience === 'beginner'
      ? `${p.name} is usually better once you have several months of consistent training behind you.`
      : `${p.name} is demanding — make sure sleep, food and recovery are in place.`);

    const g = p.goal[input.goal]; score += g;
    const goalText: Record<Goal, string> = {
      muscle: 'it gives enough weekly volume and frequency to support muscle gain',
      strength: 'it lets you practise the main lifts often, which helps strength',
      fatloss: 'it keeps training demanding enough to help hold on to muscle while eating less',
      general: 'it covers the whole body without needing a complicated schedule',
    };
    if (g >= 12) reasons.push(`For your goal, ${goalText[input.goal]}.`);

    score += p.length[input.sessionLength];
    if (input.sessionLength === 'short' && p.length.short >= 6) reasons.push('Sessions can stay short because each day covers fewer muscles.');
    if (input.sessionLength === 'short' && p.length.short <= -4) cautions.push('Sessions tend to run longer than 45 minutes with this structure.');

    score += p.preference[input.preference];
    if (input.preference === 'frequency' && p.preference.frequency >= 8) reasons.push('You prefer training muscles often, and this split does that.');
    if (input.preference === 'focus' && p.preference.focus >= 8) reasons.push('You like dedicated muscle-group days — this split is built around them.');
    if (input.preference === 'flexible' && p.preference.flexible >= 6) reasons.push('Missing a day does little damage, which suits a changeable schedule.');
    if (input.preference === 'frequency' && p.preference.frequency <= -8) cautions.push('Each muscle is trained about once a week — less frequency than you said you prefer.');
    if (input.preference === 'flexible' && p.preference.flexible <= -6) cautions.push('Missing a session leaves a muscle untrained for the week, so it needs a consistent schedule.');

    score += p.recovery[input.recovery];
    if (input.recovery === 'slow' && p.recovery.slow <= -6) cautions.push('Higher training frequency may be hard to recover from if you tend to feel run-down.');

    if (input.equipment !== 'full') {
      if (p.slug === 'bro-split') { score -= 3; cautions.push('Body-part days lean on machines and cables; with limited equipment you will need substitutes (see the exercise library).'); }
      if (p.slug === 'full-body') score += 4;
    }
    if (requested === 7) cautions.push('Seven days is shown as six training days plus a rest day — training every day is not required for progress.');
    if (fit === 'stretch') cautions.push(`${p.name} is not the usual choice for ${trainingDays} days a week.`);
    if (p.slug === 'push-pull-legs' && trainingDays === 3) cautions.push('Run once through the week, each muscle is trained only once — full body is often more effective on three days.');

    out.push({
      slug: p.slug, name: p.name, url: `/workout-splits/${p.slug}`,
      buildUrl: `/workout-planner?split=${p.slug}&days=${trainingDays}`,
      tier: 'Also workable', score, reasons: reasons.slice(0, 4), cautions: cautions.slice(0, 3),
      week: weekFor(p, trainingDays), summary: p.summary,
    });
  }
  out.sort((a, b) => b.score - a.score);
  out.forEach((r, i) => (r.tier = i === 0 ? 'Best fit' : i === 1 ? 'Strong alternative' : 'Also workable'));
  return out.slice(0, 3);
}

export const DEFAULT_INPUT: FinderInput = {
  days: 4, goal: 'muscle', experience: 'beginner', sessionLength: 'medium',
  equipment: 'full', preference: 'frequency', recovery: 'normal',
};
