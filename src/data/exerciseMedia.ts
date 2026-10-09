// Exercise Media — Movement Illustration Mapping
// Maps exercise movementPattern → MovementSVG illustration key

export function getMovementIllustration(exercise: {
  movementPattern?: string;
  movement: string;
  name: string;
  slug: string;
}): string {
  const pattern = exercise.movementPattern?.toLowerCase() || '';
  const name = exercise.name.toLowerCase();
  const slug = exercise.slug;

  // Specific slug overrides
  const slugMap: Record<string, string> = {
    'barbell-bench-press': 'bench-press',
    'dumbbell-bench-press': 'bench-press',
    'machine-chest-press': 'bench-press',
    'smith-machine-bench-press': 'bench-press',
    'cable-chest-press': 'bench-press',
    'pec-deck': 'fly',
    'cable-fly': 'fly',
    'cable-fly-low-to-high': 'fly',
    'dumbbell-fly': 'fly',
    'incline-barbell-press': 'incline-press',
    'incline-dumbbell-press': 'incline-press',
    'incline-machine-press': 'incline-press',
    'decline-barbell-press': 'decline-press',
    'decline-dumbbell-press': 'decline-press',
    'push-up': 'push-up',
    'wide-push-up': 'push-up',
    'decline-push-up': 'push-up',
    'dips': 'dip',
    'parallel-bar-dip': 'dip',
    'bench-dip': 'dip',
    'assisted-dip-machine': 'dip',
    'pull-up': 'pull-up',
    'chin-up': 'pull-up',
    'assisted-pull-up': 'pull-up',
    'lat-pulldown': 'pull-up',
    'squat': 'squat',
    'front-squat': 'squat',
    'goblet-squat': 'squat',
    'hack-squat': 'squat',
    'smith-machine-squat': 'squat',
    'pendulum-squat': 'squat',
    'lunge': 'lunge',
    'walking-lunge': 'lunge',
    'bulgarian-split-squat': 'lunge',
    'step-up': 'lunge',
    'romanian-deadlift': 'deadlift',
    'deadlift': 'deadlift',
    'sumo-deadlift': 'deadlift',
    'trap-bar-deadlift': 'deadlift',
    'stiff-leg-deadlift': 'deadlift',
    'good-morning': 'deadlift',
    'hip-thrust': 'hip-thrust',
    'glute-bridge': 'hip-thrust',
    'dumbbell-hip-thrust': 'hip-thrust',
    'smith-machine-hip-thrust': 'hip-thrust',
    'glute-drive-machine': 'hip-thrust',
    'leg-extension': 'leg-extension',
    'leg-curl': 'leg-curl',
    'lying-leg-curl': 'leg-curl',
    'seated-calf-raise': 'calf-raise',
    'calf-raise': 'calf-raise',
    'single-leg-calf-raise': 'calf-raise',
    'leg-press-calf-raise': 'calf-raise',
    'overhead-press': 'overhead-press',
    'dumbbell-shoulder-press': 'overhead-press',
    'machine-shoulder-press': 'overhead-press',
    'arnold-press': 'overhead-press',
    'lateral-raise': 'lateral-raise',
    'cable-lateral-raise': 'lateral-raise',
    'machine-lateral-raise': 'lateral-raise',
    'barbell-curl': 'curl',
    'dumbbell-curl': 'curl',
    'hammer-curl': 'curl',
    'cable-curl': 'curl',
    'preacher-curl': 'curl',
    'incline-dumbbell-curl': 'curl',
    'tricep-pushdown': 'pushdown',
    'rope-pushdown': 'pushdown',
    'skull-crusher': 'overhead-extension',
    'overhead-tricep-extension': 'overhead-extension',
    'dumbbell-overhead-extension': 'overhead-extension',
    'barbell-row': 'row',
    'dumbbell-row': 'row',
    'seated-cable-row': 'row',
    'machine-row': 'row',
    't-bar-row': 'row',
    'rear-delt-fly': 'rear-delt-fly',
    'reverse-pec-deck': 'rear-delt-fly',
    'cable-rear-delt-fly': 'rear-delt-fly',
    'face-pull': 'rear-delt-fly',
    'barbell-shrug': 'shrug',
    'dumbbell-shrug': 'shrug',
    'machine-shrug': 'shrug',
    'plank': 'plank',
    'ab-wheel': 'plank',
    'dead-bug': 'plank',
    'hanging-leg-raise': 'leg-raise',
    'hanging-knee-raise': 'leg-raise',
    'cable-crunch': 'leg-raise',
    'cable-woodchop': 'woodchop',
    'russian-twist': 'woodchop',
    'pallof-press': 'pallof-press',
    'farmer-carry': 'farmer-carry',
    'suitcase-carry': 'farmer-carry',
  };

  if (slugMap[slug]) return slugMap[slug];

  // Pattern-based fallback
  if (pattern.includes('horizontal push')) return 'bench-press';
  if (pattern.includes('incline push')) return 'incline-press';
  if (pattern.includes('vertical push')) return 'overhead-press';
  if (pattern.includes('vertical pull')) return 'pull-up';
  if (pattern.includes('horizontal pull')) return 'row';
  if (pattern.includes('hip hinge') || pattern.includes('hinge')) return 'deadlift';
  if (pattern.includes('hip extension')) return 'hip-thrust';
  if (pattern.includes('squat')) return 'squat';
  if (pattern.includes('lunge')) return 'lunge';
  if (pattern.includes('knee extension')) return 'leg-extension';
  if (pattern.includes('knee flexion')) return 'leg-curl';
  if (pattern.includes('shoulder abduction')) return 'lateral-raise';
  if (pattern.includes('horizontal abduction')) return 'rear-delt-fly';
  if (pattern.includes('horizontal adduction')) return 'fly';
  if (pattern.includes('elbow flexion')) return 'curl';
  if (pattern.includes('elbow extension') && name.includes('overhead')) return 'overhead-extension';
  if (pattern.includes('elbow extension')) return 'pushdown';
  if (pattern.includes('calf') || pattern.includes('plantarflexion')) return 'calf-raise';
  if (pattern.includes('scapular elevation')) return 'shrug';
  if (pattern.includes('anti-extension')) return 'plank';
  if (pattern.includes('hip flexion')) return 'leg-raise';
  if (pattern.includes('rotation') && !pattern.includes('anti')) return 'woodchop';
  if (pattern.includes('anti-rotation')) return 'pallof-press';
  if (pattern.includes('carry')) return 'farmer-carry';
  if (name.includes('push-up') || name.includes('pushup')) return 'push-up';
  if (name.includes('dip')) return 'dip';

  // Movement-based fallback
  const mv = exercise.movement.toLowerCase();
  if (mv === 'push') return 'bench-press';
  if (mv === 'pull') return 'row';
  if (mv === 'squat') return 'squat';
  if (mv === 'hinge') return 'deadlift';
  if (mv === 'isolation') return '';  // use default

  return ''; // default SVG
}
