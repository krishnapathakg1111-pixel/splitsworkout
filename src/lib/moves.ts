// Pose library for exercise diagrams. Each movement has START and FINISH poses; equipment decides the implement drawn.
// Poses use IK targets (hand/foot positions), so joints solve themselves. Coordinates: 200×200 frame, floor at y=185.
import type { Move, Implement } from './figure';

const G = '#9CA3AF';
const bench = (x1: number, x2: number, y: number) =>
  `<rect x="${x1}" y="${y}" width="${x2 - x1}" height="11" rx="5" fill="${G}" opacity=".55"/><rect x="${x1 + 8}" y="${y + 11}" width="6" height="${185 - y - 11}" fill="${G}" opacity=".4"/><rect x="${x2 - 14}" y="${y + 11}" width="6" height="${185 - y - 11}" fill="${G}" opacity=".4"/>`;
const seat = (x1: number, x2: number, y: number, backX?: number, backTop = 56) =>
  `<rect x="${x1}" y="${y}" width="${x2 - x1}" height="11" rx="5" fill="${G}" opacity=".55"/><rect x="${(x1 + x2) / 2 - 3}" y="${y + 11}" width="6" height="${185 - y - 11}" fill="${G}" opacity=".4"/>` +
  (backX ? `<rect x="${backX}" y="${backTop}" width="9" height="${y - backTop + 4}" rx="4" fill="${G}" opacity=".5"/>` : '');
const topBar = (y = 14) => `<line x1="40" y1="${y}" x2="150" y2="${y}" stroke="#6B7280" stroke-width="5" stroke-linecap="round"/><line x1="40" y1="${y}" x2="40" y2="185" stroke="${G}" stroke-width="3" opacity=".4"/><line x1="150" y1="${y}" x2="150" y2="185" stroke="${G}" stroke-width="3" opacity=".4"/>`;
const step = (x1: number, x2: number) => `<rect x="${x1}" y="178" width="${x2 - x1}" height="8" rx="3" fill="${G}" opacity=".55"/>`;
const STAND: [number, number] = [95, 181];

export const MOVES: Record<string, Move> = {
  'bench-press': {
    furniture: bench(58, 168, 160),
    a: { sh: [88, 148], torso: 180, handAbs: [110, 128], ankle: [190, 181], knee: -1, foot: 0 },
    b: { sh: [88, 148], torso: 180, handAbs: [88, 94], ankle: [190, 181], knee: -1, foot: 0 },
    anchor: [30, 60],
  },
  'incline-press': {
    furniture: `<line x1="64" y1="140" x2="128" y2="168" stroke="${G}" stroke-width="10" stroke-linecap="round" opacity=".55"/><line x1="104" y1="160" x2="104" y2="185" stroke="${G}" stroke-width="5" opacity=".4"/><line x1="128" y1="168" x2="170" y2="168" stroke="${G}" stroke-width="10" stroke-linecap="round" opacity=".55"/><line x1="150" y1="170" x2="150" y2="185" stroke="${G}" stroke-width="5" opacity=".4"/>`,
    a: { hip: [130, 152], torso: -150, handAbs: [93, 112], ankle: [172, 181], knee: -1 },
    b: { hip: [130, 152], torso: -150, handAbs: [80, 70], ankle: [172, 181], knee: -1 },
  },
  'decline-press': {
    furniture: `<line x1="52" y1="148" x2="120" y2="124" stroke="${G}" stroke-width="10" stroke-linecap="round" opacity=".55"/><line x1="70" y1="150" x2="70" y2="185" stroke="${G}" stroke-width="5" opacity=".4"/><line x1="120" y1="126" x2="120" y2="185" stroke="${G}" stroke-width="5" opacity=".4"/>`,
    a: { hip: [128, 130], torso: 160, handAbs: [92, 126], ankle: [160, 168], knee: -1 },
    b: { hip: [128, 130], torso: 160, handAbs: [90, 84], ankle: [160, 168], knee: -1 },
  },
  fly: {
    furniture: bench(58, 168, 160),
    a: { sh: [88, 148], torso: 180, handAbs: [100, 176], ankle: [190, 181], knee: -1 },
    b: { sh: [88, 148], torso: 180, handAbs: [88, 96], ankle: [190, 181], knee: -1 },
    anchor: [70, 178],
  },
  'push-up': {
    a: { sh: [58, 125], torso: -165, handAbs: [58, 178], ankle: [178, 168], foot: 70, knee: 1 },
    b: { sh: [58, 156], torso: -172, handAbs: [58, 178], ankle: [180, 172], foot: 70, knee: 1, elbow: -1 },
  },
  dip: {
    furniture: `<line x1="60" y1="104" x2="132" y2="104" stroke="#6B7280" stroke-width="5" stroke-linecap="round"/><line x1="64" y1="104" x2="64" y2="185" stroke="${G}" stroke-width="4" opacity=".4"/>`,
    a: { sh: [95, 52], torso: -90, handAbs: [100, 100], ankle: [86, 168], ankleFar: [100, 160], knee: 1, elbow: -1 },
    b: { sh: [95, 80], torso: -90, handAbs: [100, 100], ankle: [86, 176], ankleFar: [100, 168], knee: 1, elbow: -1 },
  },
  'pull-up': {
    furniture: topBar(),
    a: { sh: [95, 70], torso: -90, handAbs: [98, 16], ankle: [86, 188], knee: 1, elbow: -1 },
    b: { sh: [95, 38], torso: -90, handAbs: [98, 16], ankle: [88, 158], knee: 1, elbow: -1 },
  },
  pulldown: {
    furniture: seat(78, 130, 138, 66, 56) + `<rect x="120" y="118" width="40" height="9" rx="4" fill="${G}" opacity=".6"/>`,
    a: { hip: [100, 130], torso: -92, handAbs: [120, 38], ankle: [150, 176], knee: 1, elbow: -1 },
    b: { hip: [100, 130], torso: -98, handAbs: [118, 84], ankle: [150, 176], knee: 1, elbow: -1 },
    anchor: [124, 6],
  },
  row: {
    a: { hip: [82, 102], torso: -22, hand: [0, 54], ankle: STAND, elbow: -1 },
    b: { hip: [82, 102], torso: -22, hand: [-10, 24], ankle: STAND, elbow: -1 },
    anchor: [190, 150],
  },
  'seated-row': {
    furniture: seat(70, 122, 140) + `<rect x="158" y="150" width="6" height="34" rx="2" fill="${G}" opacity=".5"/>`,
    a: { hip: [96, 132], torso: -86, handAbs: [150, 100], ankle: [156, 176], knee: 1, elbow: -1 },
    b: { hip: [96, 132], torso: -94, handAbs: [112, 100], ankle: [156, 176], knee: 1, elbow: -1 },
    anchor: [196, 100],
  },
  'machine-press': {
    furniture: seat(70, 116, 144, 62, 54),
    a: { hip: [96, 136], torso: -92, handAbs: [112, 86], ankle: [140, 180], knee: 1, elbow: -1 },
    b: { hip: [96, 136], torso: -92, handAbs: [146, 84], ankle: [140, 180], knee: 1, elbow: -1 },
  },
  'rear-delt-fly': {
    a: { hip: [80, 100], torso: -25, hand: [0, 54], ankle: STAND, elbow: -1 },
    b: { hip: [80, 100], torso: -25, hand: [14, 14], ankle: STAND, elbow: -1 },
    anchor: [20, 130],
  },
  'lateral-raise': {
    front: true,
    a: { hip: [100, 104], torso: -90, hand: [6, 54], ankle: [100, 181] },
    b: { hip: [100, 104], torso: -90, hand: [54, -4], ankle: [100, 181] },
    anchor: [100, 182],
  },
  'overhead-press': {
    a: { hip: [95, 104], torso: -90, hand: [14, -4], ankle: STAND, elbow: -1 },
    b: { hip: [95, 104], torso: -90, hand: [6, -54], ankle: STAND, elbow: -1 },
    anchor: [140, 182],
  },
  curl: {
    a: { hip: [95, 104], torso: -90, hand: [6, 54], ankle: STAND, elbow: 1 },
    b: { hip: [95, 104], torso: -90, hand: [26, 2], ankle: STAND, elbow: -1 },
    anchor: [150, 180],
  },
  pushdown: {
    a: { hip: [93, 104], torso: -92, hand: [26, -6], ankle: STAND, elbow: 1 },
    b: { hip: [93, 104], torso: -92, hand: [10, 52], ankle: STAND, elbow: 1 },
    anchor: [134, 8],
  },
  'overhead-extension': {
    a: { hip: [95, 104], torso: -90, hand: [-16, -10], ankle: STAND, elbow: 1 },
    b: { hip: [95, 104], torso: -90, hand: [4, -54], ankle: STAND, elbow: 1 },
    anchor: [60, 8],
  },
  shrug: {
    a: { hip: [95, 104], torso: -90, hand: [6, 54], ankle: STAND },
    b: { hip: [95, 104], torso: -90, hand: [6, 54], ankle: STAND, shrug: -12 },
    anchor: [150, 182],
  },
  squat: {
    barOnBack: true,
    a: { hip: [95, 104], torso: -90, hand: [6, -6], ankle: STAND, elbow: 1 },
    b: { hip: [66, 136], torso: -64, hand: [6, -6], ankle: [98, 181], elbow: 1 },
    anchor: [150, 140],
  },
  lunge: {
    a: { hip: [95, 104], torso: -90, hand: [4, 54], ankle: [112, 181], ankleFar: [78, 181] },
    b: { hip: [96, 138], torso: -90, hand: [4, 54], ankle: [128, 181], ankleFar: [60, 174], foot: 0, footFar: 60, knee: -1, kneeFar: -1 },
  },
  deadlift: {
    a: { hip: [95, 104], torso: -90, hand: [4, 54], ankle: STAND },
    b: { hip: [72, 110], torso: -32, hand: [0, 54], ankle: STAND },
  },
  'deadlift-floor': {
    a: { hip: [80, 148], torso: -35, hand: [0, 54], ankle: [102, 181] },
    b: { hip: [95, 104], torso: -90, hand: [4, 52], ankle: STAND },
  },
  'hip-thrust': {
    furniture: bench(34, 92, 150),
    at: 'hip',
    a: { sh: [70, 138], torso: -155, handAbs: [118, 148], ankle: [160, 181], knee: 1 },
    b: { sh: [70, 138], torso: 161, handAbs: [118, 112], ankle: [160, 181], knee: 1 },
  },
  'leg-press': {
    footPlate: true,
    furniture: `<line x1="46" y1="150" x2="92" y2="104" stroke="${G}" stroke-width="12" stroke-linecap="round" opacity=".5"/><rect x="70" y="150" width="56" height="11" rx="5" fill="${G}" opacity=".55"/><line x1="64" y1="184" x2="196" y2="64" stroke="${G}" stroke-width="4" opacity=".35"/>`,
    a: { hip: [108, 146], torso: -138, hand: [10, 36], ankle: [146, 122], knee: -1 },
    b: { hip: [108, 146], torso: -138, hand: [10, 36], ankle: [180, 90], knee: -1 },
  },
  'leg-extension': {
    furniture: seat(62, 112, 134, 54, 60),
    a: { hip: [92, 128], torso: -92, hand: [14, 36], ankle: [133, 168], knee: 1 },
    b: { hip: [92, 128], torso: -92, hand: [14, 36], ankle: [168, 126], knee: 1 },
  },
  'leg-curl': {
    furniture: bench(48, 150, 166),
    a: { sh: [60, 152], torso: 180, handAbs: [64, 168], ankle: [176, 154], knee: 1 },
    b: { sh: [60, 152], torso: 180, handAbs: [64, 168], ankle: [128, 112], knee: -1 },
  },
  'calf-raise': {
    barOnBack: true,
    furniture: step(62, 112),
    a: { hip: [92, 100], torso: -90, hand: [4, 54], ankle: [92, 175], foot: 10 },
    b: { hip: [92, 90], torso: -90, hand: [4, 54], ankle: [92, 165], foot: 55 },
  },
  plank: {
    hold: true,
    a: { sh: [58, 138], torso: -170, handAbs: [92, 176], ankle: [180, 172], foot: 70, knee: 1, elbow: 1 },
    b: { sh: [58, 138], torso: -170, handAbs: [92, 176], ankle: [180, 172], foot: 70, knee: 1, elbow: 1 },
  },
  'leg-raise': {
    furniture: topBar(),
    a: { sh: [95, 70], torso: -90, handAbs: [98, 16], ankle: [95, 196], knee: 1, elbow: -1 },
    b: { sh: [95, 70], torso: -90, handAbs: [98, 16], ankle: [150, 124], knee: -1, elbow: -1 },
  },
  woodchop: {
    a: { hip: [95, 104], torso: -90, hand: [-18, -52], ankle: STAND, ankleFar: [80, 181], elbow: -1 },
    b: { hip: [95, 104], torso: -82, hand: [30, 50], ankle: STAND, ankleFar: [80, 181], elbow: 1 },
    anchor: [48, 8],
  },
  'pallof-press': {
    a: { hip: [95, 104], torso: -90, hand: [10, 12], ankle: STAND, ankleFar: [82, 181], elbow: 1 },
    b: { hip: [95, 104], torso: -90, hand: [52, 10], ankle: STAND, ankleFar: [82, 181], elbow: 1 },
    anchor: [20, 62],
  },
  crunch: {
    furniture: `<rect x="14" y="178" width="176" height="7" rx="3" fill="${G}" opacity=".4"/>`,
    a: { sh: [66, 166], torso: 180, handAbs: [58, 158], ankle: [150, 181], knee: -1 },
    b: { hip: [128, 166], torso: -158, handAbs: [76, 138], ankle: [150, 181], knee: -1 },
  },
  'wrist-curl': {
    furniture: seat(62, 118, 134),
    a: { hip: [92, 130], torso: -48, handAbs: [158, 142], ankle: [136, 181], knee: -1, elbow: -1 },
    b: { hip: [92, 130], torso: -48, handAbs: [160, 118], ankle: [136, 181], knee: -1, elbow: -1 },
  },
  'hip-abduction': {
    front: true, spread: true,
    a: { hip: [100, 104], torso: -90, hand: [10, 50], ankle: [114, 181] },
    b: { hip: [100, 104], torso: -90, hand: [10, 50], ankle: [140, 181] },
  },
  pinch: {
    hold: true,
    a: { hip: [95, 104], torso: -90, hand: [6, 52], ankle: STAND, ankleFar: [82, 181] },
    b: { hip: [95, 104], torso: -90, hand: [6, 52], ankle: STAND, ankleFar: [82, 181] },
  },
  'farmer-carry': {
    a: { hip: [95, 104], torso: -90, hand: [2, 54], ankle: [110, 181], ankleFar: [80, 181] },
    b: { hip: [95, 104], torso: -90, hand: [2, 54], ankle: [80, 181], ankleFar: [110, 181] },
  },
};

const IMPL_ORDER: [RegExp, Implement][] = [
  [/barbell|ez bar|trap bar|landmine|smith/i, 'barbell'], [/dumbbell/i, 'dumbbell'], [/plate/i, 'barbell'], [/kettlebell/i, 'kettlebell'],
  [/^cable$/i, 'cable'], [/machine/i, 'machine'], [/band/i, 'band'],
];
export function implementFor(equipment: string[]): Implement {
  for (const e of equipment) for (const [re, k] of IMPL_ORDER) if (re.test(e)) return k;
  return 'none';
}
export function moveKeyFor(key: string, name: string, impl: Implement): string {
  const n = name.toLowerCase();
  if (key === 'pull-up' && (/pulldown|pull-down/.test(n) || ((impl === 'cable' || impl === 'machine') && !/pull-up|chin/.test(n)))) return 'pulldown';
  if (key === 'row' && (impl === 'cable' || impl === 'machine')) return 'seated-row';
  if (key === 'bench-press' && impl === 'machine') return 'machine-press';
  if (/leg press/.test(n) && !/calf/.test(n)) return 'leg-press';
  if (!key) {
    if (/crunch|sit-up/.test(n)) return 'crunch';
    if (/wrist curl/.test(n)) return 'wrist-curl';
    if (/hip (abduction|adduction)/.test(n)) return 'hip-abduction';
    if (/pinch/.test(n)) return 'pinch';
  }
  if (key === 'deadlift' && /deadlift/.test(n) && !/romanian|stiff|single|kettlebell|good morning|rdl/.test(n)) return 'deadlift-floor';
  return key;
}
