// Skeleton-rig exercise diagrams: a simple athlete figure posed with two-bone IK, drawn as START → FINISH
// with the exercise's own equipment. Pure functions that return SVG strings (build time, no runtime cost).
export type Vec = [number, number];
export type Implement = 'barbell' | 'dumbbell' | 'kettlebell' | 'cable' | 'machine' | 'band' | 'none';

export interface Pose {
  hip?: Vec; sh?: Vec;            // give one: the other follows from torso angle
  torso: number;                  // degrees, hip → shoulder (0 = right, -90 = up, 180 = left)
  hand?: Vec;                     // hand target as offset from the shoulder
  handAbs?: Vec;                  // …or absolute
  ankle: Vec; ankleFar?: Vec;     // foot targets (absolute)
  elbow?: 1 | -1; knee?: 1 | -1; kneeFar?: 1 | -1;
  foot?: number; footFar?: number; shrug?: number;
}
export interface Move {
  a: Pose; b: Pose;
  at?: 'hand' | 'shoulder' | 'hip';   // where the implement sits
  barOnBack?: boolean;                // barbell rests on the shoulders (squat-type)
  front?: boolean;                    // front view (lateral raise)
  spread?: boolean;                   // front view: legs spread to ankle x-offset (hip abduction/adduction)
  hold?: boolean;                     // static hold (plank)
  footPlate?: boolean;                // draw the machine foot platform at the feet (leg press)
  furniture?: string;                 // SVG drawn behind the figure (bench, bar, seat…)
  anchor?: Vec;                       // cable/band anchor
  labels?: [string, string];
}

const T = 50, UA = 28, FA = 26, TH = 40, SH = 38, NECK = 7, HEAD = 11, FOOT = 13;
const rad = (d: number) => (d * Math.PI) / 180;
const add = (p: Vec, a: number, len: number): Vec => [p[0] + len * Math.cos(rad(a)), p[1] + len * Math.sin(rad(a))];
const f = (n: number) => Math.round(n * 10) / 10;

// two-bone IK: returns the middle joint and the (possibly clamped) end point
function ik(root: Vec, target: Vec, l1: number, l2: number, bend: 1 | -1): { mid: Vec; end: Vec } {
  const dx = target[0] - root[0], dy = target[1] - root[1];
  let d = Math.hypot(dx, dy);
  const dMax = l1 + l2 - 0.5, dMin = Math.abs(l1 - l2) + 0.5;
  d = Math.min(dMax, Math.max(dMin, d));
  const base = Math.atan2(dy, dx);
  const g = Math.acos(Math.max(-1, Math.min(1, (l1 * l1 + d * d - l2 * l2) / (2 * l1 * d))));
  const a1 = base + bend * g;
  const mid: Vec = [root[0] + l1 * Math.cos(a1), root[1] + l1 * Math.sin(a1)];
  const end: Vec = [root[0] + d * Math.cos(base), root[1] + d * Math.sin(base)];
  return { mid, end };
}

const C = { skin: '#E9A877', shirt: '#22C55E', shorts: '#1F2937', dark: '#111827', metal: '#9CA3AF', hair: '#4B2E1E' };
const seg = (a: Vec, b: Vec, w: number, color: string, op = 1) =>
  `<line x1="${f(a[0])}" y1="${f(a[1])}" x2="${f(b[0])}" y2="${f(b[1])}" stroke="${color}" stroke-width="${w}" stroke-linecap="round"${op < 1 ? ` opacity="${op}"` : ''}/>`;

interface Rig { hip: Vec; sh: Vec; head: Vec; elbow: Vec; hand: Vec; knee: Vec; ankle: Vec; toe: Vec; elbowF: Vec; handF: Vec; kneeF: Vec; ankleF: Vec; toeF: Vec }

function rig(p: Pose, front: boolean): Rig {
  let hip: Vec, sh: Vec;
  if (p.sh) { sh = [p.sh[0], p.sh[1]]; hip = add(sh, p.torso + 180, T); } else { hip = p.hip!; sh = add(hip, p.torso, T); }
  if (p.shrug) sh = [sh[0], sh[1] + p.shrug];
  const neck = add(sh, p.torso, NECK); const head = add(neck, p.torso, HEAD);
  const handT: Vec = p.handAbs ?? [sh[0] + (p.hand?.[0] ?? 0), sh[1] + (p.hand?.[1] ?? 54)];
  const arm = ik(sh, handT, UA, FA, p.elbow ?? 1);
  const leg = ik(hip, p.ankle, TH, SH, p.knee ?? -1);
  const toe = add(leg.end, p.foot ?? 0, FOOT);
  const armF = ik(sh, [handT[0] - 3, handT[1] + 1], UA, FA, p.elbow ?? 1);
  const legF = ik(hip, p.ankleFar ?? [p.ankle[0] - 12, p.ankle[1]], TH, SH, p.kneeFar ?? p.knee ?? -1);
  const toeF = add(legF.end, p.footFar ?? p.foot ?? 0, FOOT);
  void front;
  return { hip, sh, head, elbow: arm.mid, hand: arm.end, knee: leg.mid, ankle: leg.end, toe, elbowF: armF.mid, handF: armF.end, kneeF: legF.mid, ankleF: legF.end, toeF };
}

function frontRig(p: Pose) {
  const hip: Vec = p.hip ?? [100, 104]; const shC: Vec = [hip[0], hip[1] - T];
  const sR: Vec = [shC[0] + 20, shC[1] + 3], sL: Vec = [shC[0] - 20, shC[1] + 3];
  const h = p.hand ?? [0, 54];
  const aR = ik(sR, [sR[0] + h[0], sR[1] + h[1]], UA, FA, 1), aL = ik(sL, [sL[0] - h[0], sL[1] + h[1]], UA, FA, -1);
  return { hip, shC, sR, sL, aR, aL, head: [shC[0], shC[1] - NECK - HEAD] as Vec };
}

function highlight(r: Rig, muscle: string, color: string): string {
  const m = muscle.toLowerCase();
  const lerp = (a: Vec, b: Vec, t: number): Vec => [a[0] + (b[0] - a[0]) * t, a[1] + (b[1] - a[1]) * t];
  let c: Vec, rad_ = 13;
  if (/chest|lats|upper back|^back|lower back/.test(m)) c = lerp(r.hip, r.sh, 0.68);
  else if (/core|abs|obliques|hip flexors/.test(m)) c = lerp(r.hip, r.sh, 0.3);
  else if (/shoulder|delt/.test(m)) { c = r.sh; rad_ = 12; }
  else if (/trap/.test(m)) { c = lerp(r.sh, r.head, 0.35); rad_ = 10; }
  else if (/bicep|tricep|brachialis/.test(m)) { c = lerp(r.sh, r.elbow, 0.55); rad_ = 11; }
  else if (/forearm|brachioradialis/.test(m)) { c = lerp(r.elbow, r.hand, 0.5); rad_ = 9; }
  else if (/quad|hamstring|adductor/.test(m)) { c = lerp(r.hip, r.knee, 0.5); rad_ = 14; }
  else if (/glute|abductor/.test(m)) { c = lerp(r.hip, r.knee, 0.12); rad_ = 14; }
  else if (/calf|calves|soleus/.test(m)) { c = lerp(r.knee, r.ankle, 0.5); rad_ = 11; }
  else c = lerp(r.hip, r.sh, 0.5);
  return `<circle cx="${f(c[0])}" cy="${f(c[1])}" r="${rad_}" fill="${color}" opacity="0.55"/><circle cx="${f(c[0])}" cy="${f(c[1])}" r="${rad_}" fill="none" stroke="${color}" stroke-width="2"/>`;
}

function implement(kind: Implement, at: Vec, anchor: Vec | undefined): string {
  const [x, y] = at;
  switch (kind) {
    case 'barbell': return `<circle cx="${f(x)}" cy="${f(y)}" r="12" fill="${C.dark}"/><circle cx="${f(x)}" cy="${f(y)}" r="7.5" fill="#374151"/><circle cx="${f(x)}" cy="${f(y)}" r="2.2" fill="${C.metal}"/>`;
    case 'dumbbell': return `<rect x="${f(x - 7)}" y="${f(y - 5)}" width="14" height="10" rx="3" fill="${C.dark}"/><rect x="${f(x - 3)}" y="${f(y - 2)}" width="6" height="4" fill="${C.metal}"/>`;
    case 'kettlebell': return `<path d="M${f(x - 5)} ${f(y - 4)} Q${f(x)} ${f(y - 14)} ${f(x + 5)} ${f(y - 4)}" fill="none" stroke="${C.dark}" stroke-width="3"/><circle cx="${f(x)}" cy="${f(y + 3)}" r="8" fill="${C.dark}"/>`;
    case 'cable': {
      const a = anchor ?? [x + 70, y];
      return `<line x1="${f(x)}" y1="${f(y)}" x2="${f(a[0])}" y2="${f(a[1])}" stroke="${C.metal}" stroke-width="2"/><circle cx="${f(a[0])}" cy="${f(a[1])}" r="5" fill="#6B7280" stroke="${C.dark}" stroke-width="1.5"/><rect x="${f(x - 6)}" y="${f(y - 2.5)}" width="12" height="5" rx="2" fill="${C.dark}"/>`;
    }
    case 'machine': return `<rect x="${f(x - 3)}" y="${f(y - 8)}" width="6" height="16" rx="3" fill="${C.dark}"/>`;
    case 'band': {
      const a = anchor ?? [x + 70, y + 20];
      return `<path d="M${f(x)} ${f(y)} Q${f((x + a[0]) / 2)} ${f((y + a[1]) / 2 - 10)} ${f(a[0])} ${f(a[1])}" fill="none" stroke="#FB923C" stroke-width="3" stroke-dasharray="5 3"/><circle cx="${f(a[0])}" cy="${f(a[1])}" r="3" fill="#FB923C"/>`;
    }
    default: return '';
  }
}

function drawFrame(p: Pose, mv: Move, impl: Implement, muscle: string, color: string): string {
  if (mv.front) return drawFront(p, mv, impl, muscle, color);
  const r = rig(p, false);
  const at = (mv.barOnBack && impl === 'barbell') ? r.sh : mv.at === 'hip' ? [r.hip[0], r.hip[1] - 6] as Vec : mv.at === 'shoulder' ? r.sh : r.hand;
  const far = [
    seg(r.hip, r.kneeF, 14, C.shorts, 0.6), seg(r.kneeF, r.ankleF, 10, C.skin, 0.6), seg(r.ankleF, r.toeF, 7, C.dark, 0.6),
    seg(r.sh, r.elbowF, 9, C.shirt, 0.55), seg(r.elbowF, r.handF, 7, C.skin, 0.55),
  ].join('');
  const near = [
    seg(r.hip, r.knee, 15, C.shorts), seg(r.knee, r.ankle, 11, C.skin), seg(r.ankle, r.toe, 8, C.dark),
    seg(r.hip, r.sh, 22, C.shirt),
    seg(r.sh, add(r.sh, p.torso, NECK + 2), 8, C.skin),
    `<circle cx="${f(r.head[0])}" cy="${f(r.head[1])}" r="${HEAD}" fill="${C.skin}"/><path d="M${f(r.head[0] - HEAD)} ${f(r.head[1])} A${HEAD} ${HEAD} 0 0 1 ${f(r.head[0] + HEAD)} ${f(r.head[1])}" fill="${C.hair}" opacity=".9" transform="rotate(${f(p.torso + 90)} ${f(r.head[0])} ${f(r.head[1])})"/>`,
    highlight(r, muscle, color),
    seg(r.sh, r.elbow, 10, C.shirt), seg(r.elbow, r.hand, 8, C.skin),
    `<circle cx="${f(r.hand[0])}" cy="${f(r.hand[1])}" r="4.5" fill="${C.skin}"/>`,
  ].join('');
  const imp = impl === 'none' ? '' : implement(impl, at, mv.anchor);
  const plate = mv.footPlate ? `<line x1="${f(r.ankle[0] + 10)}" y1="${f(r.ankle[1] - 20)}" x2="${f(r.ankle[0] + 2)}" y2="${f(r.ankle[1] + 22)}" stroke="#6B7280" stroke-width="7" stroke-linecap="round"/>` : '';
  return plate + far + near + imp;
}

function drawFront(p: Pose, mv: Move, impl: Implement, muscle: string, color: string): string {
  const r = frontRig(p); const [hx, hy] = r.hip;
  const sp = mv.spread ? Math.abs(p.ankle[0] - hx) : 13;
  const parts = [
    seg([hx - 7, hy], [hx - sp, 178], 13, C.skin), seg([hx + 7, hy], [hx + sp, 178], 13, C.skin),
    seg([hx - 7, hy + 2], [hx - 7 - (sp - 7) * 0.55, 140], 15, C.shorts), seg([hx + 7, hy + 2], [hx + 7 + (sp - 7) * 0.55, 140], 15, C.shorts),
    seg([hx, hy], r.shC, 30, C.shirt),
    `<circle cx="${r.head[0]}" cy="${r.head[1]}" r="${HEAD}" fill="${C.skin}"/>`,
    seg(r.sL, r.aL.mid, 10, C.shirt), seg(r.aL.mid, r.aL.end, 8, C.skin),
    seg(r.sR, r.aR.mid, 10, C.shirt), seg(r.aR.mid, r.aR.end, 8, C.skin),
  ].join('');
  const m = muscle.toLowerCase();
  const hlLegs = mv.spread ? [-1, 1].map((s) => `<circle cx="${hx + s * (7 + (sp - 7) * 0.5)}" cy="140" r="13" fill="${color}" opacity=".5"/><circle cx="${hx + s * (7 + (sp - 7) * 0.5)}" cy="140" r="13" fill="none" stroke="${color}" stroke-width="2"/>`).join('') : '';
  const hl = mv.spread ? hlLegs : /delt|shoulder/.test(m) ? [r.sL, r.sR].map((s) => `<circle cx="${s[0]}" cy="${s[1]}" r="12" fill="${color}" opacity=".55"/><circle cx="${s[0]}" cy="${s[1]}" r="12" fill="none" stroke="${color}" stroke-width="2"/>`).join('') : '';
  const imps = impl === 'none' ? '' : implement(impl, r.aL.end, mv.anchor) + implement(impl, r.aR.end, mv.anchor);
  return parts + hl + imps;
}

const arrow = `<g fill="none" stroke="#9CA3AF" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><line x1="214" y1="104" x2="246" y2="104"/><polyline points="238,95 247,104 238,113"/></g>`;
const floorLine = (y: number) => `<line x1="10" y1="${y}" x2="190" y2="${y}" stroke="#9CA3AF" stroke-width="2" opacity=".5"/>`;

function topOf(mv: Move): number {
  let ymin = 200;
  for (const p of [mv.a, mv.b]) {
    if (mv.front) { const r = frontRig(p); ymin = Math.min(ymin, r.head[1] - HEAD, r.aR.end[1] - 12, r.aL.end[1] - 12); continue; }
    const r = rig(p, false);
    ymin = Math.min(ymin, r.head[1] - HEAD, r.hand[1] - 14, r.sh[1] - 14, r.hip[1] - 14, r.ankle[1], r.ankleF[1]);
  }
  if (mv.anchor && ymin > mv.anchor[1] - 8) ymin = Math.min(ymin, mv.anchor[1] - 8);
  return ymin;
}

export function renderDiagram(mv: Move, impl: Implement, muscle: string, color: string, title: string): string {
  const frames = mv.hold ? [mv.a] : [mv.a, mv.b];
  const w = mv.hold ? 220 : 460;
  const lab = mv.labels ?? (mv.hold ? ['HOLD', ''] : ['START', 'FINISH']);
  const body = frames.map((p, i) => {
    const ox = mv.hold ? 10 : i === 0 ? 8 : 252;
    return `<g transform="translate(${ox},0)">${floorLine(185)}${mv.furniture ?? ''}${drawFrame(p, mv, impl, muscle, color)}<text x="100" y="214" text-anchor="middle" font-family="Poppins,Arial,sans-serif" font-size="11" font-weight="700" letter-spacing="1.5" fill="#6B7280">${lab[i]}</text></g>`;
  }).join('');
  const vy = Math.round(Math.max(-30, Math.min(110, topOf(mv) - 30)));
  return `<svg viewBox="0 ${vy} ${w} ${220 - vy}" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="${title}" preserveAspectRatio="xMidYMid meet"><title>${title}</title>${body}${mv.hold ? '' : arrow}</svg>`;
}
