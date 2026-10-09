// Goal-based split pages. Each gives genuinely different advice (priorities, splits per schedule,
// exercises, mistakes). Claims are hedged; no studies are cited by name; not medical advice.
export interface GoalPlan {
  slug: string; metaTitle: string; metaDescription: string; h1: string; kicker: string;
  quickAnswer: string; intro: string[];
  priorities: { h: string; p: string }[];
  splitsByDays: [string, string, string][];       // [days, split, why]
  sampleWeek: { name: string; splitSlug: string; week: string[]; note: string };
  exercises: { heading: string; slugs: string[]; note: string }[];
  mistakes: string[];
  faqs: { q: string; a: string }[];
  finder: string;
  extraLinks?: { href: string; label: string }[];
}
const R = (d: string) => `${d}|Rest`;

export const goalPlans: GoalPlan[] = [
{
  slug: 'for-beginners',
  metaTitle: 'Best Workout Split for Beginners: 2–4 Day Plans | SplitsWorkout',
  metaDescription: 'The best workout split for beginners: why full body (2–3 days) or upper/lower (4 days) works, a sample week, starter exercises and mistakes to avoid.',
  h1: 'Best Workout Split for Beginners', kicker: 'Start simple, practise often, recover well',
  quickAnswer: 'Most beginners do best on a full-body split two or three days a week, or upper/lower on four days. These plans give you frequent practice on the main lifts without the fatigue of a six-day body-part routine.',
  intro: ['When you are new to lifting, the limiting factor is not volume — it is learning the movements and building the habit of showing up. A good beginner split therefore trains every major movement pattern several times a week at modest volume.', 'That is why high-volume body-part plans like the bro split or the Arnold split are rarely a good first choice. They give you one session per muscle each week, so you get little practice, and they pile on volume you do not yet need.'],
  priorities: [
    { h: 'Practise the main patterns often', p: 'Squat, hinge, push and pull each get trained two or three times a week. Repetition is how technique becomes automatic.' },
    { h: 'Keep volume modest', p: 'Two or three hard sets per exercise and five to seven exercises per session is plenty. You are building a base, not chasing a plateau.' },
    { h: 'Progress in small steps', p: 'Add a rep or a small amount of weight when you hit the top of your rep range. Steady increments beat big jumps.' },
    { h: 'Protect the habit', p: 'Choose the number of days you can keep up for months. Three consistent days beat five irregular ones.' },
  ],
  splitsByDays: [['2 days', 'Full body A/B', 'Each muscle trained twice a week with long recovery.'], ['3 days', 'Full body (Mon/Wed/Fri)', 'The classic beginner plan — three weekly exposures to every pattern.'], ['4 days', 'Upper/lower', 'A good step up once three days feels easy.']],
  sampleWeek: { name: 'Beginner full body', splitSlug: 'full-body', week: ['Mon|Full Body A', R('Tue'), 'Wed|Full Body B', R('Thu'), 'Fri|Full Body A', R('Sat'), R('Sun')], note: 'Alternate A and B each week so every muscle is trained three times in two weeks without overloading any one session.' },
  exercises: [{ heading: 'A reliable starter set', slugs: ['goblet-squat', 'dumbbell-bench-press', 'lat-pulldown', 'romanian-deadlift', 'dumbbell-shoulder-press', 'plank'], note: 'One exercise per pattern. Learn them with light loads first.' }, { heading: 'Machine-friendly options', slugs: ['leg-press', 'machine-chest-press', 'seated-cable-row', 'leg-curl'], note: 'Machines are a perfectly good way to start if free weights feel intimidating.' }],
  mistakes: ['Training five or six days a week from day one.', 'Switching programs every few weeks.', 'Adding weight faster than your technique can handle.', 'Skipping legs or pulling exercises because they feel harder.'],
  faqs: [{ q: 'How many days a week should a beginner train?', a: 'Two to four. Three full-body days is the most common starting point.' }, { q: 'Should beginners do push pull legs?', a: 'It can work, but on three days it trains each muscle only once a week. Full body gives more practice for the same days.' }, { q: 'How long should I stay on a beginner split?', a: 'Until progress stalls despite good effort and recovery — often several months. Do not change just because you are bored in week three.' }],
  finder: 'days=3&goal=general&exp=beginner',
},
{
  slug: 'for-muscle-gain',
  metaTitle: 'Best Workout Split for Muscle Gain (Hypertrophy) | SplitsWorkout',
  metaDescription: 'Which workout split builds the most muscle? Compare upper/lower, PPL and full body for hypertrophy, with weekly volume targets, a sample week and common mistakes.',
  h1: 'Best Workout Split for Muscle Gain', kicker: 'Frequency, volume and recovery — in that order of usefulness',
  quickAnswer: 'The best split for muscle gain is one that trains each muscle about twice a week and lets you do roughly 10–20 hard sets per muscle per week. Upper/lower on four days and PPL on five or six are the usual choices; full body works well on three.',
  intro: ['Muscle growth responds to total weekly work, how hard you train, and how consistently you do it. A split is simply the tool that lets you fit enough quality sets for each muscle into the week.', 'That is why the best hypertrophy splits share two traits: each muscle gets two sessions, and no session is so long that the last sets are junk volume.'],
  priorities: [
    { h: 'Weekly sets per muscle', p: 'A common working range is about 10–20 hard sets per muscle per week. Beginners can grow on the low end; experienced lifters often need more. Our workout planner totals this for you.' },
    { h: 'Frequency of about twice a week', p: 'Splitting a muscle\'s weekly sets across two sessions keeps each session\'s sets higher quality than cramming them into one.' },
    { h: 'Train close to failure', p: 'Leave roughly one to three reps in reserve on most working sets. Sets far from failure do less for growth.' },
    { h: 'Progressive overload', p: 'Add reps, weight or sets over time. A log makes this easy to track.' },
    { h: 'Eat and recover', p: 'Growth needs enough energy and sleep. Use the TDEE and macros calculators to set a modest surplus.' },
  ],
  splitsByDays: [['3 days', 'Full body', 'Three weekly sessions per muscle; efficient for newer lifters.'], ['4 days', 'Upper/lower', 'Twice-weekly frequency with good recovery — the best all-round choice.'], ['5 days', 'PPL + upper/lower hybrid', 'More weekly volume with most muscles twice a week.'], ['6 days', 'Push pull legs', 'High frequency and volume for those who recover well.']],
  sampleWeek: { name: 'Upper/lower for hypertrophy', splitSlug: 'upper-lower', week: ['Mon|Upper', 'Tue|Lower', R('Wed'), 'Thu|Upper', 'Fri|Lower', R('Sat'), R('Sun')], note: 'Use a heavier rep range (6–10) on the first exercise of each day and 10–15 reps for the rest.' },
  exercises: [{ heading: 'Upper body', slugs: ['incline-dumbbell-press', 'barbell-row', 'lat-pulldown', 'lateral-raise', 'tricep-pushdown', 'hammer-curl'], note: 'Press, row, vertical pull, then delts and arms.' }, { heading: 'Lower body', slugs: ['squat', 'romanian-deadlift', 'leg-press', 'leg-curl', 'calf-raise'], note: 'Squat pattern, hinge pattern, then leg isolation and calves.' }],
  mistakes: ['Chasing variety instead of progressive overload.', 'Doing more sets than you can recover from.', 'Never training close to failure.', 'Ignoring sleep and food.'],
  faqs: [{ q: 'Is the bro split good for muscle gain?', a: 'It can be, but it trains each muscle once a week, so you need high per-session volume. Most lifters find twice-weekly frequency easier to manage.' }, { q: 'How many days a week to build muscle?', a: 'Three to six, depending on schedule and recovery. Four is a strong default.' }, { q: 'Do I need to change my split to keep growing?', a: 'Not usually. Progress by adding reps, weight or sets within the same split first.' }],
  finder: 'days=4&goal=muscle&exp=intermediate',
  extraLinks: [{ href: '/calculators/tdee', label: 'Set your calorie surplus with the TDEE calculator' }, { href: '/calculators/macros', label: 'Plan protein and carbs with the macros calculator' }],
},
{
  slug: 'for-strength',
  metaTitle: 'Best Workout Split for Strength | SplitsWorkout',
  metaDescription: 'The best workout splits for getting stronger: full body and upper/lower let you practise squat, bench, and deadlift often. See sample weeks and what to avoid.',
  h1: 'Best Workout Split for Strength', kicker: 'Practise the big lifts often, keep accessories lean',
  quickAnswer: 'For strength, choose a split that lets you train the main lifts two or three times a week: full body on three days or upper/lower on four. Avoid splits that train each lift only once a week.',
  intro: ['Strength is a skill as well as a quality of muscle. The more often you practise a heavy squat, press or pull with good technique, the better you tend to get at it.', 'So the best strength splits prioritise frequency on the main lifts and keep accessory work to what actually supports them.'],
  priorities: [
    { h: 'Frequent exposure to the main lifts', p: 'Squat, press and a pulling or hinge movement appear two to three times a week.' },
    { h: 'Heavy sets with enough rest', p: 'Work in roughly the 3–6 rep range on main lifts, resting two to five minutes so every set is high quality.' },
    { h: 'Limited, relevant accessories', p: 'Two or three accessory exercises that address weak points — for example upper-back rows to support pressing.' },
    { h: 'Recovery between heavy sessions', p: 'Space the heavy days; do not stack hard squats and hard deadlifts on consecutive days.' },
  ],
  splitsByDays: [['2 days', 'Full body', 'Two heavy exposures to each lift.'], ['3 days', 'Full body', 'Practise the lifts three times a week; vary intensity across days.'], ['4 days', 'Upper/lower', 'Each main lift twice a week with an extra rest day.']],
  sampleWeek: { name: 'Upper/lower for strength', splitSlug: 'upper-lower', week: ['Mon|Upper (heavy press)', 'Tue|Lower (heavy squat)', R('Wed'), 'Thu|Upper (volume pull)', 'Fri|Lower (heavy hinge)', R('Sat'), R('Sun')], note: 'Make the first lift of each day the heaviest and keep the rest of the session short.' },
  exercises: [{ heading: 'Core strength lifts', slugs: ['squat', 'barbell-bench-press', 'deadlift', 'overhead-press', 'barbell-row', 'pull-up'], note: 'Squat, horizontal press, hinge, vertical press and two pulls.' }, { heading: 'Supporting accessories', slugs: ['romanian-deadlift', 'close-grip-bench-press', 'face-pull', 'plank'], note: 'Cover weak links without stealing recovery from the main lifts.' }],
  mistakes: ['Choosing a body-part split that trains each lift once a week.', 'Maxing out every week instead of building volume at moderate loads.', 'Packing in too many accessory exercises.', 'Skimping on rest between heavy sets.'],
  faqs: [{ q: 'Is full body or upper/lower better for strength?', a: 'Both work. Full body gives more frequent practice on three days; upper/lower gives heavier sessions with more recovery on four.' }, { q: 'Can I get stronger on a bro split?', a: 'You can, but each lift is practised once a week, which is usually less efficient than twice or three times.' }, { q: 'How many days do I need?', a: 'Three to four. More days do not automatically mean more strength.' }],
  finder: 'days=4&goal=strength&exp=intermediate',
},
{
  slug: 'for-fat-loss',
  metaTitle: 'Best Workout Split for Fat Loss (Cutting) | SplitsWorkout',
  metaDescription: 'No split burns fat on its own, but the right one helps you keep muscle while cutting. See the best splits for fat loss, a sample week and common cutting mistakes.',
  h1: 'Best Workout Split for Fat Loss', kicker: 'Keep the muscle, keep the habit, let the calorie deficit do the work',
  quickAnswer: 'No split melts fat by itself — a calorie deficit does that. The best split for fat loss is one you can train consistently and that keeps your lifting heavy enough to hold on to muscle: full body on three days or upper/lower on four.',
  intro: ['When you are eating less, training stays important because it tells your body to keep muscle. The aim of lifting during a cut is to maintain strength and muscle while the scale comes down.', 'That makes recovery your scarce resource. A split that demands six hard days leaves little room to recover on fewer calories, so moderate-frequency plans usually work better.'],
  priorities: [
    { h: 'Hold your strength', p: 'Keep the main lifts heavy. If your strength is holding, you are very likely keeping muscle.' },
    { h: 'Do not add junk volume', p: 'You do not need extra sets because you are cutting. Keep volume near maintenance levels.' },
    { h: 'Protect recovery', p: 'Training days compete with your deficit for recovery. Three or four sessions is often plenty.' },
    { h: 'Move daily', p: 'Walking and general activity contribute to energy expenditure without taxing recovery like extra lifting.' },
    { h: 'Get the numbers right', p: 'Set a moderate deficit from your maintenance calories; very large deficits make training and adherence harder.' },
  ],
  splitsByDays: [['3 days', 'Full body', 'Frequent practice on the main lifts with plenty of recovery.'], ['4 days', 'Upper/lower', 'Moderate volume and good recovery while in a deficit.'], ['5 days', 'PPL + upper/lower hybrid', 'Only if you are recovering well on the deficit.']],
  sampleWeek: { name: 'Full body while cutting', splitSlug: 'full-body', week: ['Mon|Full Body A', R('Tue'), 'Wed|Full Body B', R('Thu'), 'Fri|Full Body C', 'Sat|Walk / easy activity', R('Sun')], note: 'Keep the first exercise of each session heavy and trim accessory work if recovery suffers.' },
  exercises: [{ heading: 'Compound-focused sessions', slugs: ['squat', 'dumbbell-bench-press', 'seated-cable-row', 'romanian-deadlift', 'overhead-press', 'plank'], note: 'Big movements deliver the most training stimulus per minute.' }, { heading: 'Short finishers', slugs: ['lateral-raise', 'hammer-curl', 'tricep-pushdown'], note: 'Add one or two if time and recovery allow.' }],
  mistakes: ['Cutting training volume or weight drastically along with calories.', 'Trying to out-train a poor diet with extra sessions.', 'Using a very large calorie deficit.', 'Switching to only light, high-rep work.'],
  faqs: [{ q: 'Do I need more cardio to lose fat?', a: 'Not necessarily. Daily activity and a sensible calorie deficit do most of the work; add cardio if it helps you reach your target without hurting recovery.' }, { q: 'Should I switch splits when I start cutting?', a: 'Usually not. Keep a plan you can recover from and focus on holding your strength.' }, { q: 'Does high-rep training burn more fat?', a: 'Not by itself. Keep heavy lifting in the mix to preserve muscle.' }],
  finder: 'days=3&goal=fatloss&exp=beginner',
  extraLinks: [{ href: '/calculators/tdee', label: 'Find your maintenance calories with the TDEE calculator' }, { href: '/calculators/macros', label: 'Set protein and fat targets with the macros calculator' }],
},
{
  slug: 'for-busy-schedules',
  metaTitle: 'Best Workout Split for a Busy Schedule | SplitsWorkout',
  metaDescription: 'Short on time? The best workout split for busy schedules: 2–3 full-body days, efficient exercise choices, sample 45–60 minute sessions and a minimum-effective week.',
  h1: 'Best Workout Split for a Busy Schedule', kicker: 'Two or three efficient sessions beat five you cannot keep',
  quickAnswer: 'On a busy schedule, run full body on two or three days with five or six compound exercises per session. Efficient sessions of 45–60 minutes beat ambitious plans you cannot maintain.',
  intro: ['A plan only works if it survives your calendar. When time is scarce, the goal is to get the highest return from each session, and full-body training does that because every workout trains every major pattern.', 'It also tolerates missed sessions better than body-part splits, which matters when work and family intrude.'],
  priorities: [
    { h: 'Choose exercises that do more', p: 'Squats, rows, presses and hinges train several muscles at once, so you need fewer exercises per session.' },
    { h: 'Use supersets', p: 'Pair two non-competing exercises — say a press and a row — and alternate sets to cut rest time.' },
    { h: 'Set a minimum plan', p: 'Decide in advance what you will do in a bad week: two short full-body sessions is enough to maintain progress.' },
    { h: 'Keep sessions short and consistent', p: 'Forty-five minutes on a regular schedule beats two hours once in a while.' },
  ],
  splitsByDays: [['2 days', 'Full body A/B', 'The minimum effective plan — each muscle twice a week.'], ['3 days', 'Full body', 'Three short sessions spread through the week.'], ['4 days', 'Short upper/lower', 'Four 45-minute sessions if your week allows.']],
  sampleWeek: { name: 'Two-day minimum', splitSlug: 'full-body', week: ['Mon|Full Body A', R('Tue'), R('Wed'), 'Thu|Full Body B', R('Fri'), R('Sat'), R('Sun')], note: 'If you only manage one session in a given week, make it the heavier of the two and resume as normal next week.' },
  exercises: [{ heading: 'High-return exercises', slugs: ['goblet-squat', 'dumbbell-bench-press', 'dumbbell-row', 'romanian-deadlift', 'dumbbell-shoulder-press'], note: 'A dumbbell or two covers all the main patterns.' }, { heading: 'Add if time allows', slugs: ['plank', 'hammer-curl', 'lateral-raise'], note: 'Keep these short; they are optional.' }],
  mistakes: ['Planning sessions you cannot fit in your week.', 'Skipping warm-ups and then getting injured.', 'Waiting until you can do a perfect week to start.', 'Dropping everything after a missed week.'],
  faqs: [{ q: 'Can I get results training two days a week?', a: 'Yes, especially if you are newer to training or returning after a break. Two full-body sessions per week can maintain and build muscle.' }, { q: 'How do I shorten my workouts?', a: 'Cut to five or six exercises, superset non-competing pairs and limit accessory work.' }, { q: 'What if I miss a week?', a: 'Resume as normal — do not try to make up for lost sessions by doubling up.' }],
  finder: 'days=2&goal=general&exp=beginner',
},
];
export const getGoalPlan = (slug: string) => goalPlans.find((g) => g.slug === slug);
