# Keyword → URL map (one primary intent per URL)

Status: **live** = built in Phase 1 · **planned** = Phase 2. Never let two pages target the same primary intent.

## Workout split cluster
| Primary keyword | Secondary | Intent | Canonical URL | Type | Title | CTA | Status |
|---|---|---|---|---|---|---|---|
| workout splits | gym splits, training split, lifting split | Browse/compare | `/workout-splits` | Hub | Workout Splits: Find the Best Split for Your Goals | Find My Split | live |
| best workout split | what workout split should I do, best gym split, how should I split my workouts | Decide | `/workout-splits/best-workout-split` | Guide + tool | Best Workout Split for You: Find the Right Gym Split | Build This Split | live |
| workout split finder | split quiz/generator | Use a tool | `/workout-split-finder` | Tool | Workout Split Finder: Find Your Best Gym Split | Build in planner | live |
| 2 day workout split | 2 day gym routine | Schedule-specific | `/workout-splits/2-day` | Landing | 2-Day Workout Split: Full Body & Upper/Lower | Finder (days=2) | live |
| 3 day workout split | 3 day gym split | " | `/workout-splits/3-day` | Landing | 3-Day Workout Split: Full Body, PPL & More | Finder (days=3) | live |
| 4 day workout split | 4 day gym routine | " | `/workout-splits/4-day` | Landing | 4-Day Workout Split: Best Gym Routines & Plans | Finder (days=4) | live |
| 5 day workout split | 5 day gym routine | " | `/workout-splits/5-day` | Landing | 5-Day Workout Split: Best Gym & Muscle-Building Routines | Finder (days=5) | live |
| 6 day workout split | 6 day PPL | " | `/workout-splits/6-day` | Landing | 6-Day Workout Split: PPL, Arnold & More | Finder (days=6) | live |
| 7 day workout split | work out every day | " | `/workout-splits/7-day` | Landing | 7-Day Workout Split: Train Every Day? | Finder (days=7) | live |
| push pull legs split | ppl workout, ppl routine | Learn a split | `/workout-splits/push-pull-legs` | Guide | Push Pull Legs (PPL) Workout Split: Complete Guide | Build this split | live |
| upper lower split | upper lower workout | " | `/workout-splits/upper-lower` | Guide | Upper Lower Split: 4-Day Workout Plan & Guide | Build this split | live |
| full body workout split | full body routine | " | `/workout-splits/full-body` | Guide | Full Body Workout Split: Complete 2–4 Day Guide | Build this split | live |
| bro split | body part split | " | `/workout-splits/bro-split` | Guide | Bro Split Workout: 5-Day Body-Part Routine | Build this split | live |
| arnold split | arnold schwarzenegger split | " | `/workout-splits/arnold-split` | Guide | Arnold Split Workout: 6-Day Routine & Guide | Build this split | live |
| pplul workout, ppl upper lower hybrid | PPLUL, 5 day ppl | Learn a split | `/workout-splits/pplul` | Guide | PPLUL Workout Split: 5-Day PPL + Upper/Lower | Build this split | live |
| pplul vs ppl | — | Compare | `/workout-splits/pplul-vs-ppl` | Comparison | PPLUL vs PPL: Which Split Should You Run? | Split Finder | live |
| ppl vs upper lower | — | Compare | `/workout-splits/ppl-vs-upper-lower` | Comparison | (see page) | Split Finder | live |
| full body vs upper lower | — | Compare | `/workout-splits/full-body-vs-upper-lower` | Comparison | (see page) | Split Finder | live |
| ppl vs bro split | — | Compare | `/workout-splits/ppl-vs-bro-split` | Comparison | (see page) | Split Finder | live |
| arnold vs ppl | — | Compare | `/workout-splits/arnold-vs-ppl` | Comparison | (see page) | Split Finder | live |
| workout split for beginners / muscle gain / strength / fat loss / busy schedules | goal variants | Goal-specific | `/workout-splits/for-beginners`, `for-muscle-gain`, `for-strength`, `for-fat-loss`, `for-busy-schedules` | Landing (each gives different advice) | Best Workout Split for … | Finder (goal preset) | live |

**Cannibalisation guard:** `/workout-split-finder` owns tool intent ("finder/generator/quiz"); `/workout-splits/best-workout-split` owns decision intent ("best/what should I do"); `/workout-splits` owns browse/compare intent. Day pages own schedule intent and link to the finder with `days=` pre-set.

## Exercise / muscle cluster
| Primary keyword | Canonical URL | Notes |
|---|---|---|
| exercise library | `/exercises` | hub; filters are query strings → canonical `/exercises` |
| {exercise name} (e.g. barbell bench press) | `/exercises/{slug}` | 1 entity = 1 URL; indexable only after passing the quality gate |
| {muscle} exercises | `/muscles/{slug}` | 16 live: chest, back, lats, upper-back, shoulders, side-delts, rear-delts, biceps, triceps, forearms, quads, hamstrings, glutes, abs, obliques, calves (front delts intentionally folded into shoulders). `back`/`shoulders` are overviews; `lats`/`upper-back` and `side-delts`/`rear-delts` own the specific intents |

## Tools / calculators
| Primary keyword | URL | Title |
|---|---|---|
| workout planner, workout builder | `/workout-planner` | Free Workout Planner & Workout Builder |
| tdee calculator, maintenance calories | `/calculators/tdee` | TDEE & Maintenance Calories Calculator |
| macro calculator | `/calculators/macros` | Macros Calculator: Protein, Carbs & Fat |
| bmi calculator | `/calculators/bmi` | BMI Calculator: Check Your Body Mass Index |

## Guides
| Intent | URL | Status |
|---|---|---|
| how to choose a workout split | `/guides/how-to-choose-a-workout-split` | live |
| how many days a week should you train | `/guides/how-many-days-a-week-should-you-train` | live |
| which muscles to train together | `/guides/which-muscles-to-train-together` | live |
| dumbbell vs barbell bench press | `/guides/dumbbell-vs-barbell-bench-press` | live |
| incline vs flat bench press | `/guides/incline-vs-flat-bench-press` | live |
Planned guides must each map to a unique intent and link to a tool.

## Known title-length exceptions
Four titles come directly from the SEO brief and exceed ~60 characters (hub, best-workout-split, 5-day, push-pull-legs). They index fine but may truncate in SERPs; shorten if Search Console shows truncation hurting CTR.
