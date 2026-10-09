// Guides — each answers one distinct question and ends in a tool. Claims hedged; no named studies.
export interface GuideSection { h: string; p: string[]; list?: string[] }
export interface Guide {
  slug: string; title: string; metaTitle: string; metaDescription: string; kicker: string; time: string;
  quickAnswer: string; sections: GuideSection[]; faqs: { q: string; a: string }[];
  links: { href: string; label: string }[];
}
export const guides: Guide[] = [
{
  slug: 'how-many-days-a-week-should-you-train', time: '6 min',
  title: 'How Many Days a Week Should You Train?',
  metaTitle: 'How Many Days a Week Should You Train? | SplitsWorkout',
  metaDescription: 'How many days a week should you lift? Learn why 3–4 days suits most people, when 2 days is enough, and when 5–6 days makes sense — with signs you are doing too much.',
  kicker: 'Training frequency, explained without the hype',
  quickAnswer: 'Three to four days a week suits most lifters. Two days is enough to maintain and build muscle if you are short on time, and five or six only makes sense if you recover well and want more volume.',
  sections: [
    { h: 'It depends on three things', p: ['The right number of days is the number that lets you do enough quality work each week and still recover from it. That depends on your goal, how well you recover, and what your schedule actually allows.', 'Most advice about training frequency is really advice about weekly volume: how many hard sets each muscle gets per week. Days are just the containers you divide that volume into.'] },
    { h: 'Two days: the minimum effective dose', p: ['Two full-body sessions a week can maintain muscle and keep building it, especially for newer lifters or anyone returning after a break. Every muscle gets trained twice, with plenty of recovery between sessions.', 'The limit is time per session: fitting a full week of work into two workouts means each one runs long.'], list: ['Best structure: full body A/B.', 'Good for: busy schedules, beginners, maintenance phases.'] },
    { h: 'Three to four days: the sweet spot', p: ['Three or four days gives you enough sessions to train each muscle about twice a week, with rest days that make recovery easy. This is where most people get the best balance of results and sustainability.', 'On three days, full body is usually best; on four, upper/lower is the common choice.'] },
    { h: 'Five to six days: more volume, more recovery cost', p: ['More days let you spread more total volume across shorter sessions, which can help experienced lifters who need extra weekly sets. The price is recovery: sleep, food and stress now matter a great deal, and fatigue builds if you push every session hard.', 'If you train five or six days, keep at least one real rest day and plan lighter weeks from time to time.'] },
    { h: 'Signs you are doing too much', p: ['Performance that keeps dropping across weeks, persistent soreness, poor sleep, low motivation and nagging joint pain can all suggest your workload is outrunning your recovery. The fix is usually fewer hard sets or fewer days, not more discipline.'] },
    { h: 'Signs you could do more', p: ['If you recover easily, make steady progress, and finish sessions with energy to spare, adding a day or a few sets may help. Add one change at a time and watch how you respond.'] },
    { h: 'How to decide', p: ['Pick the number of days you can keep up for at least three months, choose the split that fits it, and judge it after eight to twelve weeks. If you are unsure, the Split Finder takes your days, goal and experience and suggests a structure.'] },
  ],
  faqs: [{ q: 'Is 3 days a week enough to build muscle?', a: 'Yes for most people. Three well-planned sessions can train every muscle several times a week.' }, { q: 'Do I need to train every day?', a: 'No. Hard training every day leaves no recovery window. Active days (walks, mobility) are fine.' }, { q: 'Is it better to train more days with shorter sessions?', a: 'It can be if it fits your schedule, but total weekly volume and consistency matter more than the number of days.' }],
  links: [{ href: '/workout-splits/3-day', label: '3-day workout splits' }, { href: '/workout-splits/4-day', label: '4-day workout splits' }, { href: '/workout-splits/5-day', label: '5-day workout splits' }, { href: '/workout-split-finder', label: 'Split Finder' }],
},
{
  slug: 'which-muscles-to-train-together', time: '6 min',
  title: 'Which Muscles Should You Train Together?',
  metaTitle: 'Which Muscles to Train Together: Muscle Group Splits | SplitsWorkout',
  metaDescription: 'Which muscles should you train together? Learn the standard groupings (push/pull/legs, upper/lower, antagonist pairs), why overlap matters, and how to arrange them.',
  kicker: 'How to split muscle groups across the week',
  quickAnswer: 'Group muscles by how they move: push muscles together, pull muscles together and leg muscles together — or split upper and lower body. Avoid training the same muscles hard on consecutive days.',
  sections: [
    { h: 'The standard groupings', p: ['Most workout splits use one of a few logical groupings. Each has a reason behind it, which makes it easier to remember and to schedule.'], list: ['Push: chest, shoulders, triceps — muscles that press.', 'Pull: back, biceps, rear delts — muscles that pull.', 'Legs: quads, hamstrings, glutes, calves.', 'Upper and lower: all upper-body muscles together, all lower-body muscles together.'] },
    { h: 'Why overlap matters', p: ['Many exercises train more than one muscle. Pressing uses the triceps and front delts, and rows use the biceps. If you train chest and then shoulders on the next day, your triceps and front delts are working both days.', 'That is why push days group chest, shoulders and triceps: the overlap happens inside one session instead of across several.'] },
    { h: 'Antagonist pairs', p: ['Some plans pair opposing muscles — chest with back, biceps with triceps — and alternate sets between them. This can save time because one muscle rests while the other works. The Arnold split is built this way.'] },
    { h: 'Where do abs, calves and forearms go?', p: ['Smaller muscles fit wherever there is time and recovery. Core and calves are commonly added to leg or lower-body days, and forearms get plenty of work from pulling. Place them where they do not interfere with the main lifts.'] },
    { h: 'Example arrangements by number of days', p: ['Two to three days: full body each session. Four days: upper/lower. Five days: push, pull, legs plus upper and lower, or one muscle per day. Six days: push, pull, legs twice.'] },
    { h: 'How to avoid conflicts', p: ['Leave at least a day between hard sessions for the same muscle, avoid stacking heavy squats and heavy deadlifts back to back, and put the muscle you care most about early in the week when you are fresh.'] },
  ],
  faqs: [{ q: 'Can I train chest and back together?', a: 'Yes — they are antagonists, and many lifters train them together (as in the Arnold split). Sessions can be long, so keep exercise selection tight.' }, { q: 'Should biceps go with back or with arms?', a: 'Either works. Biceps are involved in pulling, so many splits put them on pull day.' }, { q: 'How often should I train each muscle?', a: 'Around twice a week is a practical default.' }],
  links: [{ href: '/workout-splits/push-pull-legs', label: 'Push pull legs' }, { href: '/workout-splits/upper-lower', label: 'Upper/lower' }, { href: '/muscles', label: 'Muscle guide' }, { href: '/workout-splits/best-workout-split', label: 'Best workout split' }],
},
{
  slug: 'dumbbell-vs-barbell-bench-press', time: '5 min',
  title: 'Dumbbell vs Barbell Bench Press',
  metaTitle: 'Dumbbell vs Barbell Bench Press: Which Is Better? | SplitsWorkout',
  metaDescription: 'Dumbbell vs barbell bench press: compare loading, range of motion, shoulder comfort and safety, and learn how to use both in your chest training.',
  kicker: 'Two great chest presses, two different jobs',
  quickAnswer: 'Use the barbell bench press when you want to load heavy and track progress easily; use dumbbells when you want more range of motion, independent arms and often more shoulder comfort. Many programs use both.',
  sections: [
    { h: 'Loading and progression', p: ['A barbell lets you load in small, precise jumps and handle heavier weights because both hands are tied to one stable object. That makes progress easy to track, which is why it is a staple for strength.', 'Dumbbells are limited by the pairs available, and getting heavy ones into position takes effort, so top-end loading is usually lower.'] },
    { h: 'Range of motion', p: ['Dumbbells can travel deeper at the bottom and let your hands move naturally toward each other at the top. The barbell stops when it touches your chest. If a deeper stretch feels good and pain-free, dumbbells make it easier to use.'] },
    { h: 'Stability and independent arms', p: ['With dumbbells each arm works on its own, so a stronger side cannot take over. The extra stabilisation demand means you will usually lift less weight. Research comparing muscle activation between the two is mixed, so do not expect one to be dramatically better for growth.'] },
    { h: 'Shoulder comfort', p: ['A barbell fixes your hands in place, which some people find irritating for the shoulders. Dumbbells let your wrists and elbows find a comfortable path, so many lifters swap to them when the bar feels awkward.'] },
    { h: 'Safety and setup', p: ['Dumbbells are easier to drop to the side if a rep fails, but harder to get into position for heavy sets. A barbell needs safety arms or a spotter for max-effort work.'] },
    { h: 'How to use both', p: ['A simple approach: start the week with the barbell for heavier sets in the 5–8 rep range, then use dumbbells or a machine for higher-rep work later in the week. You get strong, progressive loading and a comfortable range of motion.'] },
  ],
  faqs: [{ q: 'Which builds more muscle?', a: 'Both can. Total weekly sets, effort and consistency matter more than the implement.' }, { q: 'Which is better for beginners?', a: 'Dumbbells or a machine press are often more forgiving to learn on; a barbell is fine with good coaching and a spotter or safeties.' }, { q: 'What if I have no barbell?', a: 'Dumbbell bench press, machine chest press and push-ups cover the same movement pattern.' }],
  links: [{ href: '/exercises/barbell-bench-press', label: 'Barbell bench press' }, { href: '/exercises/dumbbell-bench-press', label: 'Dumbbell bench press' }, { href: '/exercises/machine-chest-press', label: 'Machine chest press' }, { href: '/exercises/push-up', label: 'Push-up' }],
},
{
  slug: 'incline-vs-flat-bench-press', time: '5 min',
  title: 'Incline vs Flat Bench Press',
  metaTitle: 'Incline vs Flat Bench Press: Which Should You Do? | SplitsWorkout',
  metaDescription: 'Incline vs flat bench press: how the angle changes muscle emphasis, which to do first, how steep to set the bench, and how to include both in a chest workout.',
  kicker: 'What the bench angle actually changes',
  quickAnswer: 'Flat benching is the heavier general chest builder; incline shifts more work toward the upper chest and front delts. Most chest programs include both, with flat first for heavy sets and incline as a second press.',
  sections: [
    { h: 'What changes when you raise the bench', p: ['Tilting the bench changes the angle between your upper arm and torso. On a flat bench the work is spread across the chest; on an incline, the upper (clavicular) fibres of the chest and the front delts take on more of the load.'] },
    { h: 'Flat bench: the heavy workhorse', p: ['The flat press allows the heaviest loading because your body is in its strongest pressing position. It is the usual choice for building overall chest strength and size.'] },
    { h: 'Incline bench: upper chest and front delts', p: ['Incline presses emphasise the upper chest, and many lifters use them to fill out that area. Because the front delts help more, you typically lift less weight than on a flat bench.'] },
    { h: 'How steep should the incline be?', p: ['A moderate incline of roughly 30 degrees is a good starting point. Steeper angles shift the work more toward the shoulders, so it begins to resemble an overhead press.'] },
    { h: 'Which should come first?', p: ['Do the movement you want to prioritise while you are fresh. For general chest development that is often flat first, then incline. If your upper chest lags, start with incline.'] },
    { h: 'How to program both', p: ['A simple chest day: a heavy flat press for 3–4 sets, an incline press for 3 sets, then a fly or machine variation. Over the week, aim for roughly 10–20 hard chest sets in total.'] },
  ],
  faqs: [{ q: 'Is incline better than flat for chest?', a: 'Neither is strictly better. They emphasise slightly different parts of the chest, which is why using both works well.' }, { q: 'Can I skip flat bench if I do incline?', a: 'You can, but you will miss the heavy general loading. A mix is usually more complete.' }, { q: 'What about decline?', a: 'Decline presses are optional; many lifters get enough lower-chest work from flat benching and dips.' }],
  links: [{ href: '/exercises/barbell-bench-press', label: 'Barbell bench press' }, { href: '/exercises/incline-barbell-press', label: 'Incline barbell press' }, { href: '/exercises/incline-dumbbell-press', label: 'Incline dumbbell press' }, { href: '/muscles/chest', label: 'Chest muscle guide' }],
},
];
export const getGuide = (slug: string) => guides.find((g) => g.slug === slug);
