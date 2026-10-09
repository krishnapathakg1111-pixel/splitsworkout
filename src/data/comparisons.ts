// Head-to-head split comparisons — only pairs with real search intent. Each is written for its pair
// (not templated): different tables, scenarios and FAQs. Slugs map to /workout-splits/{slug}.
export interface Comparison {
  slug: string; a: string; b: string;            // a/b = split slugs (see splits.ts)
  aName: string; bName: string;
  metaTitle: string; metaDescription: string; h1: string; kicker: string;
  quickAnswer: string; intro: string[];
  table: [string, string, string][];
  differences: { h: string; p: string }[];
  scenarios: [string, string, string][];         // [situation, winner, why]
  faqs: { q: string; a: string }[];
}

export const comparisons: Comparison[] = [
{
  slug: 'ppl-vs-upper-lower', a: 'push-pull-legs', b: 'upper-lower', aName: 'Push Pull Legs', bName: 'Upper/Lower',
  metaTitle: 'PPL vs Upper Lower: Which Split Is Better? | SplitsWorkout',
  metaDescription: 'PPL vs upper/lower compared: days per week, muscle frequency, session length, recovery and who each split suits — plus a quick way to choose.',
  h1: 'PPL vs Upper/Lower: Which Split Should You Choose?',
  kicker: 'The two most popular intermediate splits, side by side',
  quickAnswer: 'Choose upper/lower if you train four days a week or want a simpler schedule. Choose push/pull/legs if you can train five or six days and like shorter, more focused sessions. At their best-fit schedules, both train most muscles about twice a week.',
  intro: [
    'Push pull legs and upper/lower are the two splits most intermediate lifters end up choosing between. Both group muscles so that you are not training the same ones on consecutive days, and both can produce excellent results when volume and effort are sensible.',
    'The real difference is the number of days each one asks of you. Upper/lower is built around four sessions; PPL is built around six. Everything else — session length, recovery demands and flexibility — follows from that.',
  ],
  table: [
    ['Best-fit days per week', '5–6 (3 is possible)', '4 (3–5 is possible)'],
    ['Muscle frequency', '2× a week on 6 days; 1× on 3 days', '2× a week on 4 days'],
    ['Session length', 'About 45–70 minutes', 'About 60–75 minutes'],
    ['Beginner friendliness', 'Moderate — more days and exercises', 'Good — fewer days, simple structure'],
    ['Hypertrophy (muscle gain)', 'Excellent at 6 days — high weekly volume', 'Excellent at 4 days — strong volume with more rest'],
    ['Strength', 'Good — main lifts twice a week at 6 days', 'Excellent — main lifts twice a week with less fatigue'],
    ['Recovery demand', 'High', 'Moderate'],
    ['Missed-session tolerance', 'Low to moderate', 'Moderate'],
    ['How sessions are organised', 'By movement: push, pull, legs', 'By region: upper body, lower body'],
    ['Ideal lifter', 'Intermediate or advanced, happy to train 5–6 days', 'Beginner to advanced, training 4 days'],
  ],
  differences: [
    { h: 'Training frequency and weekly volume', p: 'On six days, PPL gives each muscle two sessions and plenty of room for volume, because each session only covers one third of the body. Upper/lower reaches the same twice-a-week frequency in four days, but each session covers a lot more muscles, so you usually do fewer sets per muscle per session.' },
    { h: 'Session structure', p: 'A push day groups chest, shoulders and triceps; a pull day groups back and biceps. That keeps sessions focused, but the muscles in a day overlap (for example pressing fatigues the triceps before you reach them). Upper days mix pushing and pulling, which helps spread fatigue, though the sessions can run long if you pack too many exercises in.' },
    { h: 'Recovery', p: 'Upper/lower leaves two full rest days a week and gives each half of the body at least a couple of days before it is trained again. PPL on six days leaves only one rest day, so sleep, food and stress matter more, and a lighter week now and then is usually necessary.' },
    { h: 'Flexibility', p: 'If life interrupts a four-day upper/lower week, you can shift sessions and still hit everything. Miss a push day on a six-day PPL and chest, shoulders and triceps lose a weekly session, so PPL rewards a predictable schedule.' },
  ],
  scenarios: [
    ['You can train 3–4 days a week', 'Upper/Lower', 'It reaches twice-weekly frequency in four days and works well on three.'],
    ['You can train 6 days a week', 'Push Pull Legs', 'It spreads volume across six shorter sessions with each muscle twice weekly.'],
    ['You are new to lifting', 'Upper/Lower', 'Fewer days and a simple structure make it easier to learn and recover.'],
    ['You prefer shorter sessions', 'Push Pull Legs', 'Each session covers fewer muscles, so workouts stay focused.'],
    ['You want to bench and squat heavy twice a week', 'Upper/Lower', 'Heavy upper and lower days leave more recovery between main lifts.'],
  ],
  faqs: [
    { q: 'Can I run PPL on four days?', a: 'You can run push, pull, legs and then an upper or lower day, but most muscles are trained once or twice depending on how you arrange it. If four days is your limit, upper/lower is usually the cleaner choice.' },
    { q: 'Is upper/lower better for strength?', a: 'Often, yes, because it lets you practise the main lifts twice a week while leaving more recovery than a six-day schedule. Full body is the other strong strength option on fewer days.' },
    { q: 'Which is better for muscle gain?', a: 'Neither is better by default. Muscle gain responds to total weekly sets, effort and consistency, so the split you can sustain at the right volume is the better one.' },
  ],
},
{
  slug: 'full-body-vs-upper-lower', a: 'full-body', b: 'upper-lower', aName: 'Full Body', bName: 'Upper/Lower',
  metaTitle: 'Full Body vs Upper Lower: Which Split Is Better? | SplitsWorkout',
  metaDescription: 'Full body vs upper/lower workout splits compared: best days per week, frequency, session length, strength and muscle gain, with a quick guide to choosing.',
  h1: 'Full Body vs Upper/Lower: Which Is Right for You?',
  kicker: 'The decision most lifters face between 3 and 4 days',
  quickAnswer: 'Pick full body if you can only train two or three days or you are new to lifting. Pick upper/lower once you can train four days and want shorter sessions with more room for accessory work.',
  intro: [
    'Full body and upper/lower both aim for roughly two to three weekly sessions per muscle, but they get there differently. Full body trains everything each session on fewer days; upper/lower splits the body in half and trains each half twice.',
    'Your schedule usually decides it. If you have two or three days, full body wastes nothing. At four days, upper/lower lets you keep sessions shorter and spend more time on each muscle.',
  ],
  table: [
    ['Best-fit days per week', '2–3 (4 is possible)', '4 (3–5 is possible)'],
    ['Muscle frequency', '2–3× a week', '2× a week'],
    ['Session length', 'About 60–80 minutes', 'About 60–75 minutes'],
    ['Beginner friendliness', 'Excellent', 'Good'],
    ['Hypertrophy (muscle gain)', 'Very good with 3 days; limited volume per session', 'Excellent — more room per muscle each session'],
    ['Strength', 'Excellent — main lifts three times a week', 'Excellent — main lifts twice a week'],
    ['Recovery demand', 'Low to moderate', 'Moderate'],
    ['Missed-session tolerance', 'High — every session trains everything', 'Moderate'],
    ['Room for accessory work', 'Limited', 'More'],
    ['Ideal lifter', 'Beginners and busy lifters on 2–3 days', 'Lifters with 4 days who want more focus'],
  ],
  differences: [
    { h: 'Efficiency versus focus', p: 'Full body gets the most from limited days: each session hits every major pattern, so two or three days already deliver high frequency. Upper/lower trades that efficiency for focus — each session has room for more exercises per muscle, which helps once you need extra volume.' },
    { h: 'Fatigue and session length', p: 'Full-body sessions can feel draining because squatting, pressing and pulling all happen in the same workout, so exercise selection has to be disciplined (about five to seven movements). Upper/lower sessions are similar in length but split the fatigue between upper and lower body, making the second half of a session less affected by the first.' },
    { h: 'Progress on the main lifts', p: 'Full body lets you practise squat, press and pull three times a week, which suits learning technique. Upper/lower gives two heavy exposures per lift with an extra rest day between them, which many intermediates find easier to progress.' },
    { h: 'Missing sessions', p: 'Because every full-body session trains everything, missing one costs you less. Missing an upper or lower day means half your body skips a session that week.' },
  ],
  scenarios: [
    ['You can train 2 or 3 days', 'Full Body', 'Every session covers everything, so no day is wasted.'],
    ['You can train 4 days', 'Upper/Lower', 'Twice-weekly frequency with more room for each muscle.'],
    ['You are a complete beginner', 'Full Body', 'Frequent practice of the main movements and simple programming.'],
    ['You want more arm and shoulder work', 'Upper/Lower', 'Upper days leave space for accessories.'],
    ['Your schedule is unpredictable', 'Full Body', 'Missing a day costs less.'],
  ],
  faqs: [
    { q: 'Can I do full body four days a week?', a: 'Yes, but keep sessions moderate and vary exercises across days. Most people find upper/lower easier to sustain at four days.' },
    { q: 'Is upper/lower good for beginners?', a: 'It can be, especially at four days a week. Beginners with only two or three days are usually better served by full body.' },
    { q: 'Which gives more muscle?', a: 'When total weekly volume and effort are similar, both can build muscle well. Choose the one that fits your days.' },
  ],
},
{
  slug: 'ppl-vs-bro-split', a: 'push-pull-legs', b: 'bro-split', aName: 'Push Pull Legs', bName: 'Bro Split',
  metaTitle: 'PPL vs Bro Split: Which Is Better? | SplitsWorkout',
  metaDescription: 'PPL vs bro split compared: muscle frequency, volume per session, recovery, flexibility and who each body-part routine suits, with a simple decision guide.',
  h1: 'PPL vs Bro Split: Which Is Better?',
  kicker: 'Frequency versus dedicated muscle days',
  quickAnswer: 'PPL trains each muscle twice a week over six days. A bro split trains each muscle once a week over five. For most lifters PPL offers more frequency; the bro split suits people who like a dedicated day per muscle and high per-session volume.',
  intro: [
    'Both splits organise training around muscle groups, which makes them popular in bodybuilding circles. The difference is how often each muscle is trained: PPL cycles through the body twice a week, while a bro split gives each major muscle its own day once a week.',
    'Neither is a magic formula. What matters is whether the structure lets you do enough hard sets per muscle each week and recover from them.',
  ],
  table: [
    ['Best-fit days per week', '6 (3 or 5 possible)', '5 (4 or 6 possible)'],
    ['Muscle frequency', '2× a week on 6 days', '1× a week'],
    ['Volume per muscle per session', 'Moderate', 'High'],
    ['Session length', 'About 45–70 minutes', 'About 45–75 minutes'],
    ['Beginner friendliness', 'Moderate', 'Moderate — but less practice per movement'],
    ['Hypertrophy (muscle gain)', 'Excellent — frequency plus volume', 'Good — relies on high volume in one session'],
    ['Strength', 'Good', 'Limited — main lifts only once a week'],
    ['Recovery demand', 'High', 'Moderate'],
    ['Missed-session tolerance', 'Low to moderate', 'Low — a missed day is a missed muscle'],
    ['Ideal lifter', 'Intermediate or advanced with 6 free days', 'Lifters who enjoy dedicated days and 5 sessions'],
  ],
  differences: [
    { h: 'Frequency', p: 'Training a muscle once a week means a long gap between exposures. Spreading the same weekly sets over two sessions, as PPL does, usually makes it easier to keep quality high on every set because fatigue is lower in each session.' },
    { h: 'Per-session volume', p: 'A bro-split chest day can include many sets from different angles, which some lifters enjoy and find motivating. The trade-off is that later sets in a long session are done under more fatigue, so they may be less productive.' },
    { h: 'Recovery', p: 'Bro splits leave each muscle a full week to recover, which suits people who are slow to recover or who push sets close to failure. PPL at six days demands good sleep, food and stress management.' },
    { h: 'Flexibility', p: 'Both depend on a consistent schedule. A bro split is least forgiving: miss back day and your back skips the entire week.' },
  ],
  scenarios: [
    ['You can train 6 days', 'Push Pull Legs', 'Two weekly sessions per muscle for higher frequency.'],
    ['You can train 5 days and like focused days', 'Bro Split', 'A dedicated day per muscle with high volume.'],
    ['You care about strength', 'Push Pull Legs', 'Main lifts appear more than once a week.'],
    ['You recover slowly', 'Bro Split', 'A full week between sessions for each muscle.'],
    ['You want maximum frequency on fewer days', 'Neither', 'Consider upper/lower or full body instead.'],
  ],
  faqs: [
    { q: 'Is the bro split bad?', a: 'No. It can build muscle when volume and effort are sufficient. Its main limitation is low frequency per muscle and low tolerance for missed sessions.' },
    { q: 'Can I turn a bro split into PPL?', a: 'Yes — combine chest, shoulders and triceps into push, back and biceps into pull, and keep legs. Then run the cycle twice if you have six days.' },
    { q: 'Which is better for beginners?', a: 'Neither is ideal. Beginners usually progress best on full body or upper/lower with more practice on the main lifts.' },
  ],
},
{
  slug: 'arnold-vs-ppl', a: 'arnold-split', b: 'push-pull-legs', aName: 'Arnold Split', bName: 'Push Pull Legs',
  metaTitle: 'Arnold Split vs PPL: Which 6-Day Split Wins? | SplitsWorkout',
  metaDescription: 'Arnold split vs push/pull/legs compared: both are six-day plans — see the differences in session length, recovery, volume and who should choose each.',
  h1: 'Arnold Split vs PPL: Which 6-Day Split Wins?',
  kicker: 'Two six-day plans with different philosophies',
  quickAnswer: 'Both train each muscle twice a week on six days. PPL is simpler and easier to adjust; the Arnold split pairs opposing muscles and tends to produce longer chest-and-back and shoulders-and-arms sessions, so it suits experienced lifters who recover well.',
  intro: [
    'The Arnold split and PPL both ask you to train six days a week and both hit every muscle twice. The difference lies in how muscles are grouped on each day.',
    'The Arnold split pairs antagonist muscles — chest with back, shoulders with arms — while PPL separates pushing and pulling. That changes how fatigue builds and how long sessions run.',
  ],
  table: [
    ['Best-fit days per week', '6', '6 (3 or 5 possible)'],
    ['Day structure', 'Chest & back / shoulders & arms / legs', 'Push / pull / legs'],
    ['Muscle frequency', '2× a week', '2× a week'],
    ['Session length', 'Often 70–90 minutes on chest & back days', 'About 45–70 minutes'],
    ['Beginner friendliness', 'Low', 'Moderate'],
    ['Hypertrophy (muscle gain)', 'Excellent for experienced lifters', 'Excellent for intermediate and up'],
    ['Strength', 'Moderate — high volume can limit heavy work', 'Good'],
    ['Recovery demand', 'Very high', 'High'],
    ['Ease of adjusting volume', 'Harder — long sessions', 'Easier — shorter sessions'],
    ['Ideal lifter', 'Advanced, recovers well, likes high volume', 'Intermediate to advanced with 6 free days'],
  ],
  differences: [
    { h: 'How the days are built', p: 'Arnold chest-and-back days combine two big muscle groups, so they involve many sets and can be long. PPL separates the movement patterns, so each session is shorter but the triceps and front delts are involved in more than one push session.' },
    { h: 'Fatigue', p: 'Pairing antagonists means you can alternate chest and back sets while one muscle rests, which can be time efficient. The cost is a high total workload per session, so the Arnold split suits lifters who handle volume well.' },
    { h: 'Adjusting the plan', p: 'PPL is easier to trim: dropping accessory work from a push day costs little. Cutting a chest-and-back day short removes work from two large muscles at once.' },
    { h: 'Recovery', p: 'Both leave one rest day. Whichever you choose, a lighter week every several weeks helps keep fatigue manageable.' },
  ],
  scenarios: [
    ['You are an advanced lifter who loves volume', 'Arnold Split', 'Antagonist pairing and high weekly volume.'],
    ['You want shorter sessions', 'Push Pull Legs', 'Each day covers fewer muscles.'],
    ['You are moving up from 4–5 days', 'Push Pull Legs', 'Simpler to run and adjust.'],
    ['Your recovery is average', 'Push Pull Legs', 'Lower per-session workload and easier to dial back.'],
    ['You are a beginner', 'Neither', 'Try full body or upper/lower first.'],
  ],
  faqs: [
    { q: 'Is the Arnold split better than PPL?', a: 'Not inherently. It is more demanding per session, which suits some experienced lifters. PPL is easier to run for most people.' },
    { q: 'Do I need to train six days either way?', a: 'No. Both can be run for three days by cycling once through the week, though each muscle is then trained once.' },
    { q: 'Which is better for strength?', a: 'PPL usually works better because sessions are shorter and you can keep the main lifts heavy; the Arnold split is more volume-oriented.' },
  ],
},
{
  slug: 'pplul-vs-ppl', a: 'pplul', b: 'push-pull-legs', aName: 'PPLUL', bName: 'Push Pull Legs',
  metaTitle: 'PPLUL vs PPL: Which Split Should You Run? | SplitsWorkout',
  metaDescription: 'PPLUL vs PPL compared: five days versus six, muscle frequency, session length and recovery, with a simple guide to choosing between the two hybrid and classic splits.',
  h1: 'PPLUL vs PPL: Which Should You Run?', kicker: 'Five days with a hybrid finish versus the classic six-day cycle',
  quickAnswer: 'PPLUL gets most muscles to twice a week in five days with two rest days; classic PPL gets every muscle to twice a week in six shorter sessions. Choose PPLUL if you want more recovery, PPL if you can train six days and like the symmetry.',
  intro: ['PPLUL is PPL with its second cycle replaced by an upper-body day and a lower-body day. The result is one fewer training day and one more rest day, at the cost of slightly uneven frequency.', 'Both are intermediate-level plans that suit lifters who enjoy training most days. The decision mostly comes down to how much recovery you need.'],
  table: [
    ['Training days per week', '5', '6'],
    ['Rest days', '2', '1'],
    ['Muscle frequency', 'Most muscles ~2×; legs 2×', 'Every muscle 2×'],
    ['Session length', 'About 60–75 minutes', 'About 45–70 minutes'],
    ['Session style', 'Focused days, then broader upper/lower days', 'Focused days only'],
    ['Recovery demand', 'High', 'Very high'],
    ['Missed-session tolerance', 'Moderate — drop the lower or upper day', 'Low to moderate'],
    ['Beginner friendliness', 'Low', 'Low'],
    ['Ideal lifter', 'Intermediate with 5 free days and decent recovery', 'Intermediate or advanced with 6 free days'],
  ],
  differences: [
    { h: 'Frequency and symmetry', p: 'PPL repeats the same three sessions twice, so every muscle gets two near-identical exposures. PPLUL swaps the second cycle for upper and lower days, so muscles are still trained about twice but the second session looks different, which some lifters find more interesting.' },
    { h: 'Recovery', p: 'The extra rest day is the biggest practical advantage of PPLUL. With two rest days, it is easier to keep sleep, joints and motivation in good shape across a long training block.' },
    { h: 'Session length', p: 'The upper and lower days of PPLUL cover more muscles than a PPL session, so they can run longer unless you keep exercise selection tight.' },
    { h: 'Flexibility', p: 'If your week is cut short, PPLUL degrades gracefully: skipping the lower or upper day leaves a sensible four-day plan. A missed PPL day leaves a hole in one of the three patterns.' },
  ],
  scenarios: [
    ['You can train 5 days', 'PPLUL', 'Built for five days with two rest days.'],
    ['You can train 6 days and recover well', 'Push Pull Legs', 'Two clean cycles with the shortest sessions.'],
    ['You want more recovery', 'PPLUL', 'An extra rest day each week.'],
    ['You like repeating the same sessions', 'Push Pull Legs', 'Simple, symmetrical and easy to track.'],
    ['Your schedule often gets cut short', 'PPLUL', 'Easy to drop to a sensible four-day week.'],
  ],
  faqs: [
    { q: 'Is PPLUL just PPL with less volume?', a: 'Not exactly. Weekly volume can be similar, but it is spread over five sessions of different styles instead of six repeating ones.' },
    { q: 'Should beginners run either?', a: 'Usually not. Full body or upper/lower gives more practice on the main lifts with less fatigue.' },
    { q: 'Can I switch between them?', a: 'Yes. Many lifters run PPLUL when busy and PPL when they have six free days.' },
  ],
},
];
export const getComparison = (slug: string) => comparisons.find((c) => c.slug === slug);
