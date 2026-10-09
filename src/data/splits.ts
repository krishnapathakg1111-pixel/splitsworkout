export interface WorkoutDay {
  day: string;
  focus: string;
  exercises: {
    name: string;
    slug: string;
    sets: string;
    reps: string;
    rest: string;
    notes?: string;
  }[];
}

export interface WorkoutSplit {
  slug: string;
  name: string;
  shortName: string;
  daysPerWeek: number;
  sessionsPerWeek: number;
  difficulty: 'Beginner' | 'Intermediate' | 'Advanced';
  goals: string[];
  equipment: string[];
  sessionDuration: string;
  description: string;
  longDescription: string;
  overview: string;
  whoIsItFor: string;
  pros: string[];
  cons: string[];
  schedule: WorkoutDay[];
  muscleCoverage: { muscle: string; setsPerWeek: number }[];
  alternatives: string[];
  faqs: { question: string; answer: string }[];
  tags: string[];
  relatedSplits: string[];
}

export const splits: WorkoutSplit[] = [
  {
    slug: 'push-pull-legs',
    name: 'Push Pull Legs (PPL) Workout Split',
    shortName: 'PPL',
    daysPerWeek: 6,
    sessionsPerWeek: 6,
    difficulty: 'Intermediate',
    goals: ['Muscle Building', 'Hypertrophy', 'Strength'],
    equipment: ['Full Gym'],
    sessionDuration: '60–75 min',
    description: 'The most popular workout split for building muscle. Divides training into push, pull, and leg days — each performed twice per week.',
    longDescription: 'Push Pull Legs organises your training into three categories of movement: pushing movements (chest, shoulders, triceps), pulling movements (back, biceps), and leg movements (quads, hamstrings, glutes, calves). In a standard 6-day PPL, each category is trained twice per week — giving you optimal training frequency for muscle growth.',
    overview: 'The Push Pull Legs split — PPL for short — is the most widely used intermediate training structure in gym culture. Its logic is simple: every exercise is either a push (you push weight away from you), a pull (you pull weight toward you), or a leg movement. Grouping these movements keeps synergistic muscles working together on the same day and allows adequate recovery before the next session.',
    whoIsItFor: 'PPL is ideal for intermediate trainees who have been training for at least 6 months and can handle 6 training days per week. It is not suitable for true beginners who have not yet mastered the major compound lifts, or for anyone who cannot commit to 6 consistent sessions per week. If you can train only 3 days, run PPL once through rather than twice.',
    pros: [
      'Each muscle group trained twice per week — research suggests this is optimal for hypertrophy.',
      'Clear, logical structure — you always know what you are training and why.',
      'High weekly volume accumulation — ideal for muscle building.',
      'Muscle groups are pre-fatigued from compound lifts when isolation work is added.',
      'Widely documented online — enormous community and resources available.',
    ],
    cons: [
      'Six days per week is a significant time commitment.',
      'Not ideal if life gets in the way — missing one day disrupts the pattern.',
      'Recovery can be challenging, especially for natural trainees at high intensity.',
      'Beginners may find 6 days overwhelming and would benefit from a full body approach first.',
    ],
    schedule: [
          {
            day: 'Monday',
            focus: 'Push A (Chest, Shoulders, Triceps)',
            exercises: [
              { name: 'Barbell Bench Press', slug: 'barbell-bench-press', sets: '4', reps: '5–8', rest: '2–3 min', notes: 'Primary chest compound — focus on progressive overload' },
              { name: 'Incline Dumbbell Press', slug: 'incline-dumbbell-press', sets: '3', reps: '8–12', rest: '90 sec', notes: 'Upper chest emphasis' },
              { name: 'Dumbbell Shoulder Press', slug: 'dumbbell-shoulder-press', sets: '3', reps: '8–12', rest: '90 sec' },
              { name: 'Dumbbell Lateral Raise', slug: 'lateral-raise', sets: '3', reps: '12–20', rest: '60 sec', notes: 'Keep these light and controlled' },
              { name: 'Cable Fly', slug: 'cable-fly', sets: '3', reps: '12–15', rest: '60–90 sec' },
              { name: 'Cable Tricep Pushdown', slug: 'tricep-pushdown', sets: '3', reps: '10–15', rest: '60–90 sec' },
            ],
          },
          {
            day: 'Tuesday',
            focus: 'Pull A (Back, Biceps)',
            exercises: [
              { name: 'Pull-Up', slug: 'pull-up', sets: '4', reps: '6–10', rest: '2 min', notes: 'Add weight if you can do 10+ bodyweight' },
              { name: 'Barbell Row', slug: 'barbell-row', sets: '4', reps: '6–10', rest: '2–3 min' },
              { name: 'Seated Cable Row', slug: 'seated-cable-row', sets: '3', reps: '8–12', rest: '90 sec' },
              { name: 'Cable Face Pull', slug: 'face-pull', sets: '3', reps: '15–20', rest: '60 sec', notes: 'Shoulder health — never skip this' },
              { name: 'Barbell Curl', slug: 'barbell-curl', sets: '3', reps: '8–12', rest: '90 sec' },
              { name: 'Hammer Curl', slug: 'hammer-curl', sets: '2', reps: '10–15', rest: '60–90 sec' },
            ],
          },
          {
            day: 'Wednesday',
            focus: 'Legs A (Quads, Hamstrings, Glutes, Calves)',
            exercises: [
              { name: 'Barbell Back Squat', slug: 'squat', sets: '4', reps: '5–8', rest: '3–5 min', notes: 'Primary quad compound' },
              { name: 'Romanian Deadlift', slug: 'romanian-deadlift', sets: '3', reps: '8–12', rest: '2 min', notes: 'Hamstring focus — control the stretch' },
              { name: 'Barbell Hip Thrust', slug: 'hip-thrust', sets: '3', reps: '8–15', rest: '90 sec' },
              { name: 'Seated Leg Curl', slug: 'leg-curl', sets: '3', reps: '10–15', rest: '60–90 sec' },
              { name: 'Standing Calf Raise', slug: 'calf-raise', sets: '4', reps: '12–20', rest: '60 sec', notes: 'Full range of motion essential' },
              { name: 'Hanging Leg Raise', slug: 'hanging-leg-raise', sets: '3', reps: '10–15', rest: '60–90 sec' },
            ],
          },
          {
            day: 'Thursday',
            focus: 'Push B (Chest, Shoulders, Triceps)',
            exercises: [
              { name: 'Incline Dumbbell Press', slug: 'incline-dumbbell-press', sets: '4', reps: '8–12', rest: '90 sec', notes: 'Upper chest emphasis' },
              { name: 'Dumbbell Bench Press', slug: 'dumbbell-bench-press', sets: '3', reps: '8–12', rest: '90 sec' },
              { name: 'Barbell Overhead Press', slug: 'overhead-press', sets: '3', reps: '5–8', rest: '2–3 min' },
              { name: 'Cable Lateral Raise', slug: 'cable-lateral-raise', sets: '3', reps: '12–20', rest: '60 sec' },
              { name: 'Cable Overhead Tricep Extension', slug: 'overhead-tricep-extension', sets: '3', reps: '12–15', rest: '60–90 sec' },
              { name: 'Skull Crusher', slug: 'skull-crusher', sets: '3', reps: '10–12', rest: '90 sec' },
            ],
          },
          {
            day: 'Friday',
            focus: 'Pull B (Back, Biceps)',
            exercises: [
              { name: 'Lat Pulldown', slug: 'lat-pulldown', sets: '4', reps: '8–12', rest: '90 sec' },
              { name: 'Chest-Supported Row', slug: 'chest-supported-row', sets: '4', reps: '8–15', rest: '90 sec' },
              { name: 'Dumbbell Row', slug: 'dumbbell-row', sets: '3', reps: '8–12', rest: '90 sec' },
              { name: 'Rear Delt Fly', slug: 'rear-delt-fly', sets: '2', reps: '15–20', rest: '60 sec' },
              { name: 'Incline Dumbbell Curl', slug: 'incline-dumbbell-curl', sets: '3', reps: '10–12', rest: '60–90 sec' },
              { name: 'Hammer Curl', slug: 'hammer-curl', sets: '2', reps: '10–15', rest: '60–90 sec' },
            ],
          },
          {
            day: 'Saturday',
            focus: 'Legs B (Quads, Hamstrings, Glutes, Calves)',
            exercises: [
              { name: 'Hack Squat', slug: 'hack-squat', sets: '4', reps: '8–15', rest: '2 min' },
              { name: 'Barbell Hip Thrust', slug: 'hip-thrust', sets: '4', reps: '8–15', rest: '90 sec' },
              { name: 'Lying Leg Curl', slug: 'lying-leg-curl', sets: '3', reps: '10–15', rest: '60–90 sec' },
              { name: 'Leg Extension', slug: 'leg-extension', sets: '3', reps: '12–20', rest: '60 sec' },
              { name: 'Seated Calf Raise', slug: 'seated-calf-raise', sets: '4', reps: '12–20', rest: '60 sec' },
              { name: 'Cable Crunch', slug: 'cable-crunch', sets: '3', reps: '15–20', rest: '60 sec' },
            ],
          },
          {
            day: 'Sunday',
            focus: 'Rest',
            exercises: [],
          },
        ],
    muscleCoverage: [
      { muscle: 'Chest', setsPerWeek: 17 },
      { muscle: 'Back', setsPerWeek: 22 },
      { muscle: 'Shoulders', setsPerWeek: 17 },
      { muscle: 'Biceps', setsPerWeek: 10 },
      { muscle: 'Triceps', setsPerWeek: 9 },
      { muscle: 'Quads', setsPerWeek: 11 },
      { muscle: 'Hamstrings', setsPerWeek: 9 },
      { muscle: 'Glutes', setsPerWeek: 7 },
      { muscle: 'Calves', setsPerWeek: 8 },
    ],
    alternatives: ['upper-lower', 'bro-split', 'pplul'],
    faqs: [
      { question: 'Is PPL good for beginners?', answer: 'PPL is generally not recommended for true beginners. Six days per week is a lot to manage while still learning the basic compound movements. A 3-day full body routine is a better starting point, moving to PPL after 6 months of consistent training.' },
      { question: 'Can I do PPL on 3 days instead of 6?', answer: 'Yes — run through Push, Pull, Legs once per week (3-day PPL). Each muscle is trained once per week, which is less optimal for hypertrophy but completely valid for someone who can only train 3 days.' },
      { question: 'What is the difference between PPL and Bro Split?', answer: 'In PPL you train each movement pattern twice per week. In a bro split you train each individual muscle group once per week. Research suggests twice-per-week frequency is generally better for muscle growth, giving PPL a theoretical advantage.' },
      { question: 'Can I build real muscle on PPL?', answer: 'Absolutely. PPL is the training structure used by countless successful bodybuilders and physique athletes. With consistent progressive overload and adequate nutrition, PPL produces excellent results.' },
      { question: 'What if I miss a day on PPL?', answer: 'Simply continue from where you left off. Do not try to squeeze missed sessions into the same week — extra recovery is better than training fatigued.' },
    ],
    tags: ['ppl', 'push-pull-legs', '6-day', 'intermediate', 'hypertrophy', 'muscle-building'],
    relatedSplits: ['bro-split', 'upper-lower', 'arnold-split', 'pplul'],
  },
  {
    slug: 'bro-split',
    name: 'Bro Split Workout',
    shortName: 'Bro Split',
    daysPerWeek: 5,
    sessionsPerWeek: 5,
    difficulty: 'Intermediate',
    goals: ['Muscle Building', 'Hypertrophy'],
    equipment: ['Full Gym'],
    sessionDuration: '45–60 min',
    description: 'One muscle group per day — the classic bodybuilding split. Chest Monday, Back Tuesday, Shoulders Wednesday, Arms Thursday, Legs Friday.',
    longDescription: 'The bro split dedicates each training day to a single muscle group, allowing maximum volume and focus on one area per session. While it trains each muscle only once per week — which some research suggests is suboptimal — it has produced countless impressive physiques and remains popular because the sessions feel intensely focused.',
    overview: 'The bro split is the most iconic workout structure in gym culture. Walk into any commercial gym on a Monday and you will see the bench press stations full — chest day is sacred. The bro split trains one muscle group per day with high volume, allowing you to absolutely obliterate each muscle before giving it a week to recover.',
    whoIsItFor: 'The bro split works well for intermediate to advanced trainees who have already built a solid foundation. It is also popular with bodybuilders who enjoy the psychological satisfaction of dedicated muscle days. Those who can train consistently 5 days per week and want a simple, clear structure.',
    pros: [
      'Simple structure — you always know exactly what you are training.',
      'High volume per session per muscle group.',
      'Sessions are focused and do not require multi-muscle coordination.',
      'Popular and widely discussed — vast resources and community support.',
      'Allows full dedication to one area — satisfying and mentally engaging.',
    ],
    cons: [
      'Each muscle trained only once per week — frequency may be suboptimal for growth.',
      'Missing a single day means a muscle group goes two weeks between sessions.',
      'Less total-body coordination development.',
      'Arms day may feel excessive for compound-focused trainees.',
    ],
    schedule: [
          {
            day: 'Monday',
            focus: 'Chest',
            exercises: [
              { name: 'Barbell Bench Press', slug: 'barbell-bench-press', sets: '4', reps: '5–8', rest: '2–3 min' },
              { name: 'Incline Dumbbell Press', slug: 'incline-dumbbell-press', sets: '4', reps: '8–12', rest: '90 sec' },
              { name: 'Chest Dip', slug: 'dips', sets: '3', reps: '8–12', rest: '90 sec' },
              { name: 'Cable Fly', slug: 'cable-fly', sets: '3', reps: '12–15', rest: '60–90 sec' },
            ],
          },
          {
            day: 'Tuesday',
            focus: 'Back',
            exercises: [
              { name: 'Barbell Row', slug: 'barbell-row', sets: '4', reps: '6–10', rest: '2–3 min' },
              { name: 'Pull-Up', slug: 'pull-up', sets: '4', reps: '6–10', rest: '2 min' },
              { name: 'Lat Pulldown', slug: 'lat-pulldown', sets: '3', reps: '8–12', rest: '90 sec' },
              { name: 'Seated Cable Row', slug: 'seated-cable-row', sets: '3', reps: '8–12', rest: '90 sec' },
              { name: 'Straight-Arm Pulldown', slug: 'straight-arm-pulldown', sets: '3', reps: '12–15', rest: '60 sec' },
              { name: 'Barbell Shrug', slug: 'barbell-shrug', sets: '3', reps: '10–15', rest: '90 sec' },
            ],
          },
          {
            day: 'Wednesday',
            focus: 'Shoulders',
            exercises: [
              { name: 'Barbell Overhead Press', slug: 'overhead-press', sets: '4', reps: '5–8', rest: '2–3 min' },
              { name: 'Dumbbell Lateral Raise', slug: 'lateral-raise', sets: '4', reps: '12–20', rest: '60 sec' },
              { name: 'Cable Lateral Raise', slug: 'cable-lateral-raise', sets: '3', reps: '12–20', rest: '60 sec' },
              { name: 'Rear Delt Fly', slug: 'rear-delt-fly', sets: '3', reps: '15–20', rest: '60 sec' },
              { name: 'Cable Face Pull', slug: 'face-pull', sets: '3', reps: '15–20', rest: '60 sec' },
              { name: 'Cable Crunch', slug: 'cable-crunch', sets: '3', reps: '15–20', rest: '60 sec' },
            ],
          },
          {
            day: 'Thursday',
            focus: 'Arms (Biceps & Triceps)',
            exercises: [
              { name: 'Barbell Curl', slug: 'barbell-curl', sets: '4', reps: '8–12', rest: '90 sec' },
              { name: 'Incline Dumbbell Curl', slug: 'incline-dumbbell-curl', sets: '3', reps: '10–12', rest: '60–90 sec' },
              { name: 'Hammer Curl', slug: 'hammer-curl', sets: '3', reps: '10–15', rest: '60–90 sec' },
              { name: 'Cable Tricep Pushdown', slug: 'tricep-pushdown', sets: '4', reps: '10–15', rest: '60–90 sec' },
              { name: 'Cable Overhead Tricep Extension', slug: 'overhead-tricep-extension', sets: '3', reps: '12–15', rest: '60–90 sec' },
              { name: 'Skull Crusher', slug: 'skull-crusher', sets: '3', reps: '10–12', rest: '90 sec' },
              { name: 'Wrist Curl', slug: 'wrist-curl', sets: '3', reps: '15–20', rest: '45 sec' },
              { name: 'Hanging Leg Raise', slug: 'hanging-leg-raise', sets: '3', reps: '10–15', rest: '60–90 sec' },
            ],
          },
          {
            day: 'Friday',
            focus: 'Legs',
            exercises: [
              { name: 'Barbell Back Squat', slug: 'squat', sets: '4', reps: '5–8', rest: '3–5 min' },
              { name: 'Romanian Deadlift', slug: 'romanian-deadlift', sets: '4', reps: '8–12', rest: '2 min' },
              { name: '45-Degree Leg Press', slug: 'leg-press', sets: '3', reps: '10–15', rest: '2 min' },
              { name: 'Leg Extension', slug: 'leg-extension', sets: '3', reps: '12–20', rest: '60 sec' },
              { name: 'Seated Leg Curl', slug: 'leg-curl', sets: '3', reps: '10–15', rest: '60–90 sec' },
              { name: 'Barbell Hip Thrust', slug: 'hip-thrust', sets: '4', reps: '8–15', rest: '90 sec' },
              { name: 'Standing Calf Raise', slug: 'calf-raise', sets: '4', reps: '12–20', rest: '60 sec' },
              { name: 'Seated Calf Raise', slug: 'seated-calf-raise', sets: '4', reps: '12–20', rest: '60 sec' },
            ],
          },
        ],
    muscleCoverage: [
      { muscle: 'Chest', setsPerWeek: 14 },
      { muscle: 'Back', setsPerWeek: 17 },
      { muscle: 'Shoulders', setsPerWeek: 17 },
      { muscle: 'Biceps', setsPerWeek: 10 },
      { muscle: 'Triceps', setsPerWeek: 10 },
      { muscle: 'Quads', setsPerWeek: 10 },
      { muscle: 'Hamstrings', setsPerWeek: 7 },
      { muscle: 'Glutes', setsPerWeek: 4 },
      { muscle: 'Calves', setsPerWeek: 8 },
    ],
    alternatives: ['push-pull-legs', 'upper-lower', 'arnold-split'],
    faqs: [
      { question: 'Does the bro split actually work?', answer: 'Yes. Despite the nickname, the bro split has produced outstanding physiques for decades. While twice-per-week frequency may be theoretically superior, volume, progressive overload, and consistency matter far more than the exact split structure.' },
      { question: 'Why is chest day always Monday?', answer: 'Nobody knows for certain, but it has become a self-reinforcing cultural norm. Monday feels like a fresh start, and bench press is the most popular upper body exercise, so Chest Monday emerged organically. It is now essentially a gym institution.' },
      { question: 'Is the bro split good for cutting?', answer: 'Yes — the focused sessions work well during a cut because you can maintain intensity on individual muscle groups even with reduced calories. The lower frequency means each session matters more, which is fine when recovery is already taxed by a caloric deficit.' },
    ],
    tags: ['bro-split', '5-day', 'intermediate', 'hypertrophy', 'bodybuilding', 'one-muscle-per-day'],
    relatedSplits: ['push-pull-legs', 'upper-lower', 'arnold-split', '5-day'],
  },
  {
    slug: 'upper-lower',
    name: 'Upper Lower Split Workout',
    shortName: 'Upper/Lower',
    daysPerWeek: 4,
    sessionsPerWeek: 4,
    difficulty: 'Beginner',
    goals: ['Strength', 'Muscle Building', 'General Fitness'],
    equipment: ['Full Gym', 'Dumbbells'],
    sessionDuration: '55–70 min',
    description: 'Train upper body twice and lower body twice per week. The ideal 4-day structure for balanced strength and hypertrophy.',
    longDescription: 'The upper/lower split divides training into upper body sessions (chest, back, shoulders, arms) and lower body sessions (quads, hamstrings, glutes, calves). With 4 sessions per week — two upper and two lower — each muscle group receives the training frequency research suggests is optimal for growth, without requiring the 6-day commitment of PPL.',
    overview: 'The upper/lower split is one of the most evidence-based workout structures available. It allows you to train each muscle group twice per week on a manageable 4-day schedule, making it ideal for intermediate trainees who want structured, effective training without the high frequency demands of PPL.',
    whoIsItFor: 'The upper/lower split is excellent for intermediate trainees who can train 4 days per week and want a balance of strength and hypertrophy. It is also a strong option for beginners who have already learned the basic compound movements and want to move beyond full-body training.',
    pros: [
      'Each muscle trained twice per week — solid training frequency for growth.',
      'Only 4 days per week — sustainable long-term.',
      'Good balance of compound and isolation work.',
      'Flexible — can be run Monday/Tuesday/Thursday/Friday or any similar pattern.',
      'Works well for both strength and hypertrophy goals.',
    ],
    cons: [
      'Less total volume per session than bro split — you cover more in less time.',
      'Sessions can run long if you try to include too much.',
      'Not as specialised — bro split and PPL allow more focus per session.',
    ],
    schedule: [
          {
            day: 'Monday',
            focus: 'Upper A (Strength Focus)',
            exercises: [
              { name: 'Barbell Bench Press', slug: 'barbell-bench-press', sets: '4', reps: '5–8', rest: '2–3 min' },
              { name: 'Barbell Row', slug: 'barbell-row', sets: '4', reps: '6–10', rest: '2–3 min' },
              { name: 'Barbell Overhead Press', slug: 'overhead-press', sets: '3', reps: '5–8', rest: '2–3 min' },
              { name: 'Pull-Up', slug: 'pull-up', sets: '3', reps: '6–10', rest: '2 min' },
              { name: 'Barbell Curl', slug: 'barbell-curl', sets: '3', reps: '8–12', rest: '90 sec' },
              { name: 'Cable Tricep Pushdown', slug: 'tricep-pushdown', sets: '3', reps: '10–15', rest: '60–90 sec' },
              { name: 'Dumbbell Lateral Raise', slug: 'lateral-raise', sets: '3', reps: '12–20', rest: '60 sec' },
            ],
          },
          {
            day: 'Tuesday',
            focus: 'Lower A (Quad Focus)',
            exercises: [
              { name: 'Barbell Back Squat', slug: 'squat', sets: '4', reps: '5–8', rest: '3–5 min' },
              { name: 'Romanian Deadlift', slug: 'romanian-deadlift', sets: '3', reps: '8–12', rest: '2 min' },
              { name: '45-Degree Leg Press', slug: 'leg-press', sets: '3', reps: '10–15', rest: '2 min' },
              { name: 'Seated Leg Curl', slug: 'leg-curl', sets: '3', reps: '10–15', rest: '60–90 sec' },
              { name: 'Standing Calf Raise', slug: 'calf-raise', sets: '4', reps: '12–20', rest: '60 sec' },
              { name: 'Plank', slug: 'plank', sets: '3', reps: '30–60 sec', rest: '60 sec' },
            ],
          },
          {
            day: 'Wednesday',
            focus: 'Rest',
            exercises: [],
          },
          {
            day: 'Thursday',
            focus: 'Upper B (Hypertrophy Focus)',
            exercises: [
              { name: 'Incline Dumbbell Press', slug: 'incline-dumbbell-press', sets: '4', reps: '8–12', rest: '90 sec' },
              { name: 'Lat Pulldown', slug: 'lat-pulldown', sets: '4', reps: '8–12', rest: '90 sec' },
              { name: 'Dumbbell Shoulder Press', slug: 'dumbbell-shoulder-press', sets: '3', reps: '8–12', rest: '90 sec' },
              { name: 'Seated Cable Row', slug: 'seated-cable-row', sets: '3', reps: '8–12', rest: '90 sec' },
              { name: 'Cable Fly', slug: 'cable-fly', sets: '3', reps: '12–15', rest: '60–90 sec' },
              { name: 'Cable Face Pull', slug: 'face-pull', sets: '3', reps: '15–20', rest: '60 sec' },
              { name: 'Hammer Curl', slug: 'hammer-curl', sets: '3', reps: '10–15', rest: '60–90 sec' },
            ],
          },
          {
            day: 'Friday',
            focus: 'Lower B (Posterior Chain Focus)',
            exercises: [
              { name: 'Conventional Deadlift', slug: 'deadlift', sets: '3', reps: '3–6', rest: '3–5 min' },
              { name: 'Hack Squat', slug: 'hack-squat', sets: '3', reps: '8–15', rest: '2 min' },
              { name: 'Barbell Hip Thrust', slug: 'hip-thrust', sets: '4', reps: '8–15', rest: '90 sec' },
              { name: 'Leg Extension', slug: 'leg-extension', sets: '3', reps: '12–20', rest: '60 sec' },
              { name: 'Lying Leg Curl', slug: 'lying-leg-curl', sets: '3', reps: '10–15', rest: '60–90 sec' },
              { name: 'Seated Calf Raise', slug: 'seated-calf-raise', sets: '4', reps: '12–20', rest: '60 sec' },
              { name: 'Cable Crunch', slug: 'cable-crunch', sets: '3', reps: '15–20', rest: '60 sec' },
            ],
          },
        ],
    muscleCoverage: [
      { muscle: 'Chest', setsPerWeek: 11 },
      { muscle: 'Back', setsPerWeek: 14 },
      { muscle: 'Shoulders', setsPerWeek: 12 },
      { muscle: 'Biceps', setsPerWeek: 6 },
      { muscle: 'Triceps', setsPerWeek: 3 },
      { muscle: 'Quads', setsPerWeek: 13 },
      { muscle: 'Hamstrings', setsPerWeek: 12 },
      { muscle: 'Glutes', setsPerWeek: 4 },
      { muscle: 'Calves', setsPerWeek: 8 },
    ],
    alternatives: ['push-pull-legs', 'full-body', '3-day'],
    faqs: [
      { question: 'Is upper/lower better than PPL?', answer: 'Neither is universally better — it depends on your schedule. Upper/lower is more efficient on 4 days; PPL allows more volume per session on 6 days. If you can do 4 quality sessions per week, upper/lower is excellent. If you have 6 available days, PPL provides more total volume.' },
      { question: 'Can I run upper/lower on 3 days?', answer: 'Yes, but it becomes either A/B/A one week and B/A/B the next, or you simply repeat one of the sessions. This is less ideal than 4 days but works if your schedule demands it.' },
      { question: 'How heavy should I go on upper/lower?', answer: 'The "A" sessions in this template are strength-focused (lower reps, heavier weight). The "B" sessions are hypertrophy-focused (moderate weight, more reps). This variation is intentional and produces good results for both strength and size.' },
    ],
    tags: ['upper-lower', '4-day', 'intermediate', 'strength', 'hypertrophy', 'beginner-friendly'],
    relatedSplits: ['push-pull-legs', 'full-body', '3-day', '5-day'],
  },
  {
    slug: 'full-body',
    name: 'Full Body Workout Split',
    shortName: 'Full Body',
    daysPerWeek: 3,
    sessionsPerWeek: 3,
    difficulty: 'Beginner',
    goals: ['General Fitness', 'Strength', 'Muscle Building'],
    equipment: ['Full Gym', 'Dumbbells', 'Bodyweight'],
    sessionDuration: '45–60 min',
    description: 'Train every major muscle group every session, three times per week. The best starting point for beginners.',
    longDescription: 'The full body split trains all major muscle groups in every session. Three times per week, you hit your chest, back, shoulders, arms, and legs — giving each muscle the highest frequency of any split structure. Research consistently shows beginners respond best to frequent, moderate-volume training.',
    overview: 'The full body split is the most efficient structure for beginners and anyone who can only train 3 days per week. Every session includes at least one major compound movement for each muscle group. High frequency means your nervous system and muscles are constantly adapting to the same movement patterns — which accelerates skill development and early strength gains.',
    whoIsItFor: 'Full body training is ideal for beginners in their first 6–12 months of training, anyone who can only train 3 days per week regardless of experience, and people returning to training after a break. It is also a solid option during periods of high life stress when recovery capacity is reduced.',
    pros: [
      'Highest training frequency — each muscle gets 3 sessions per week.',
      'Best option for beginners — frequent practice of compound movements accelerates skill development.',
      'Time-efficient — 3 days per week is manageable alongside a full life.',
      'Never miss a muscle group — every session covers everything.',
      'Excellent for building the squat, deadlift, bench, and press.',
    ],
    cons: [
      'Sessions can feel rushed if you try to include too many exercises.',
      'Limited specialisation — difficult to prioritise a specific muscle group.',
      'Advanced trainees may find the volume per session insufficient.',
      'Requires good exercise selection — every exercise must earn its spot.',
    ],
    schedule: [
          {
            day: 'Monday',
            focus: 'Full Body A',
            exercises: [
              { name: 'Barbell Back Squat', slug: 'squat', sets: '4', reps: '5–8', rest: '3–5 min', notes: 'Master this movement first' },
              { name: 'Barbell Bench Press', slug: 'barbell-bench-press', sets: '4', reps: '5–8', rest: '2–3 min' },
              { name: 'Barbell Row', slug: 'barbell-row', sets: '3', reps: '6–10', rest: '2–3 min' },
              { name: 'Romanian Deadlift', slug: 'romanian-deadlift', sets: '3', reps: '8–12', rest: '2 min' },
              { name: 'Cable Face Pull', slug: 'face-pull', sets: '3', reps: '15–20', rest: '60 sec' },
              { name: 'Standing Calf Raise', slug: 'calf-raise', sets: '3', reps: '12–20', rest: '60 sec' },
              { name: 'Plank', slug: 'plank', sets: '3', reps: '30–60 sec', rest: '60 sec' },
            ],
          },
          {
            day: 'Tuesday',
            focus: 'Rest',
            exercises: [],
          },
          {
            day: 'Wednesday',
            focus: 'Full Body B',
            exercises: [
              { name: '45-Degree Leg Press', slug: 'leg-press', sets: '3', reps: '10–15', rest: '2 min' },
              { name: 'Incline Dumbbell Press', slug: 'incline-dumbbell-press', sets: '3', reps: '8–12', rest: '90 sec' },
              { name: 'Lat Pulldown', slug: 'lat-pulldown', sets: '3', reps: '8–12', rest: '90 sec' },
              { name: 'Barbell Hip Thrust', slug: 'hip-thrust', sets: '3', reps: '8–15', rest: '90 sec' },
              { name: 'Dumbbell Shoulder Press', slug: 'dumbbell-shoulder-press', sets: '3', reps: '8–12', rest: '90 sec' },
              { name: 'Barbell Curl', slug: 'barbell-curl', sets: '3', reps: '8–12', rest: '90 sec' },
              { name: 'Standing Calf Raise', slug: 'calf-raise', sets: '3', reps: '12–20', rest: '60 sec' },
            ],
          },
          {
            day: 'Thursday',
            focus: 'Rest',
            exercises: [],
          },
          {
            day: 'Friday',
            focus: 'Full Body C',
            exercises: [
              { name: 'Hack Squat', slug: 'hack-squat', sets: '3', reps: '8–15', rest: '2 min' },
              { name: 'Dumbbell Bench Press', slug: 'dumbbell-bench-press', sets: '3', reps: '8–12', rest: '90 sec' },
              { name: 'Seated Cable Row', slug: 'seated-cable-row', sets: '3', reps: '8–12', rest: '90 sec' },
              { name: 'Seated Leg Curl', slug: 'leg-curl', sets: '3', reps: '10–15', rest: '60–90 sec' },
              { name: 'Standing Calf Raise', slug: 'calf-raise', sets: '3', reps: '12–20', rest: '60 sec' },
              { name: 'Cable Tricep Pushdown', slug: 'tricep-pushdown', sets: '3', reps: '10–15', rest: '60–90 sec' },
              { name: 'Hanging Leg Raise', slug: 'hanging-leg-raise', sets: '3', reps: '10–15', rest: '60–90 sec' },
            ],
          },
        ],
    muscleCoverage: [
      { muscle: 'Chest', setsPerWeek: 10 },
      { muscle: 'Back', setsPerWeek: 9 },
      { muscle: 'Shoulders', setsPerWeek: 6 },
      { muscle: 'Biceps', setsPerWeek: 3 },
      { muscle: 'Triceps', setsPerWeek: 3 },
      { muscle: 'Quads', setsPerWeek: 10 },
      { muscle: 'Hamstrings', setsPerWeek: 6 },
      { muscle: 'Glutes', setsPerWeek: 3 },
      { muscle: 'Calves', setsPerWeek: 9 },
    ],
    alternatives: ['upper-lower', '3-day', 'push-pull-legs'],
    faqs: [
      { question: 'Is full body or split training better?', answer: 'For beginners, full body training is clearly better — frequency of practice accelerates skill development and beginners respond to any stimulus. For intermediate trainees, the difference is minimal. For advanced trainees, higher volume splits may have an edge.' },
      { question: 'Can I gain muscle on a 3-day full body routine?', answer: 'Absolutely. Many of the strongest and most muscular people in history have trained on full body 3-day routines. The classics like StrongLifts 5x5 and Starting Strength are built on this structure and have produced exceptional results.' },
    ],
    tags: ['full-body', '3-day', 'beginner', 'strength', 'general-fitness', 'all-levels'],
    relatedSplits: ['upper-lower', '3-day', 'push-pull-legs'],
  },
  {
    slug: 'arnold-split',
    name: 'Arnold Split Workout',
    shortName: 'Arnold Split',
    daysPerWeek: 6,
    sessionsPerWeek: 6,
    difficulty: 'Advanced',
    goals: ['Muscle Building', 'Hypertrophy'],
    equipment: ['Full Gym'],
    sessionDuration: '75–90 min',
    description: 'Arnold Schwarzenegger\'s classic 6-day routine — chest/back, shoulders/arms, legs — repeated twice weekly.',
    longDescription: 'The Arnold split combines chest with back on the same day and shoulders with arms on the same day — pairing opposing muscle groups for efficient training and potential superset work. This structure is repeated twice per week across 6 training days.',
    overview: 'This is the split Arnold Schwarzenegger reportedly used during his Mr. Olympia winning years. It pairs agonist and antagonist muscle groups — chest and back together, shoulders and arms together — which creates an unusual pump and allows for superset work that saves training time while maintaining high volume.',
    whoIsItFor: 'The Arnold split is for advanced trainees with years of consistent training who want a high-volume, high-frequency approach. It demands 6 days per week and 75–90 minute sessions — not for the faint-hearted or the beginner.',
    pros: [
      'High frequency — each muscle trained twice per week like PPL.',
      'Interesting pairing — chest/back supersets are uniquely effective.',
      'High volume accumulation over 6 days.',
      'Classic, proven structure with legendary results to its name.',
    ],
    cons: [
      'Very high time commitment — 6 days, 75–90 minutes each.',
      'Recovery demands are extreme — not suitable for drug-free beginners.',
      'Chest and back together is a very long session.',
    ],
    schedule: [
          {
            day: 'Monday',
            focus: 'Chest + Back',
            exercises: [
              { name: 'Barbell Bench Press', slug: 'barbell-bench-press', sets: '4', reps: '5–8', rest: '2–3 min' },
              { name: 'Barbell Row', slug: 'barbell-row', sets: '4', reps: '6–10', rest: '2–3 min' },
              { name: 'Incline Dumbbell Press', slug: 'incline-dumbbell-press', sets: '3', reps: '8–12', rest: '90 sec' },
              { name: 'Pull-Up', slug: 'pull-up', sets: '3', reps: '6–10', rest: '2 min' },
              { name: 'Cable Fly', slug: 'cable-fly', sets: '3', reps: '12–15', rest: '60–90 sec' },
              { name: 'Seated Cable Row', slug: 'seated-cable-row', sets: '3', reps: '8–12', rest: '90 sec' },
            ],
          },
          {
            day: 'Tuesday',
            focus: 'Shoulders + Arms',
            exercises: [
              { name: 'Barbell Overhead Press', slug: 'overhead-press', sets: '4', reps: '5–8', rest: '2–3 min' },
              { name: 'Dumbbell Lateral Raise', slug: 'lateral-raise', sets: '3', reps: '12–20', rest: '60 sec' },
              { name: 'Barbell Curl', slug: 'barbell-curl', sets: '3', reps: '8–12', rest: '90 sec' },
              { name: 'Cable Tricep Pushdown', slug: 'tricep-pushdown', sets: '3', reps: '10–15', rest: '60–90 sec' },
              { name: 'Hammer Curl', slug: 'hammer-curl', sets: '3', reps: '10–15', rest: '60–90 sec' },
              { name: 'Skull Crusher', slug: 'skull-crusher', sets: '3', reps: '10–12', rest: '90 sec' },
            ],
          },
          {
            day: 'Wednesday',
            focus: 'Legs',
            exercises: [
              { name: 'Barbell Back Squat', slug: 'squat', sets: '4', reps: '5–8', rest: '3–5 min' },
              { name: 'Romanian Deadlift', slug: 'romanian-deadlift', sets: '3', reps: '8–12', rest: '2 min' },
              { name: 'Bulgarian Split Squat', slug: 'bulgarian-split-squat', sets: '3', reps: '8–12', rest: '90 sec' },
              { name: 'Seated Leg Curl', slug: 'leg-curl', sets: '3', reps: '10–15', rest: '60–90 sec' },
              { name: 'Standing Calf Raise', slug: 'calf-raise', sets: '4', reps: '12–20', rest: '60 sec' },
              { name: 'Hanging Leg Raise', slug: 'hanging-leg-raise', sets: '3', reps: '10–15', rest: '60–90 sec' },
            ],
          },
          {
            day: 'Thursday',
            focus: 'Chest + Back (repeat)',
            exercises: [
              { name: 'Incline Dumbbell Press', slug: 'incline-dumbbell-press', sets: '4', reps: '8–12', rest: '90 sec' },
              { name: 'Lat Pulldown', slug: 'lat-pulldown', sets: '4', reps: '8–12', rest: '90 sec' },
              { name: 'Dumbbell Bench Press', slug: 'dumbbell-bench-press', sets: '3', reps: '8–12', rest: '90 sec' },
              { name: 'Chest-Supported Row', slug: 'chest-supported-row', sets: '3', reps: '8–15', rest: '90 sec' },
              { name: 'Pec Deck', slug: 'pec-deck', sets: '3', reps: '12–15', rest: '60 sec' },
              { name: 'Straight-Arm Pulldown', slug: 'straight-arm-pulldown', sets: '3', reps: '12–15', rest: '60 sec' },
            ],
          },
          {
            day: 'Friday',
            focus: 'Shoulders + Arms (repeat)',
            exercises: [
              { name: 'Dumbbell Shoulder Press', slug: 'dumbbell-shoulder-press', sets: '3', reps: '8–12', rest: '90 sec' },
              { name: 'Cable Lateral Raise', slug: 'cable-lateral-raise', sets: '3', reps: '12–20', rest: '60 sec' },
              { name: 'Rear Delt Fly', slug: 'rear-delt-fly', sets: '3', reps: '15–20', rest: '60 sec' },
              { name: 'Incline Dumbbell Curl', slug: 'incline-dumbbell-curl', sets: '3', reps: '10–12', rest: '60–90 sec' },
              { name: 'Cable Overhead Tricep Extension', slug: 'overhead-tricep-extension', sets: '3', reps: '12–15', rest: '60–90 sec' },
              { name: 'Preacher Curl', slug: 'preacher-curl', sets: '3', reps: '10–12', rest: '90 sec' },
              { name: 'Close-Grip Bench Press', slug: 'close-grip-bench-press', sets: '3', reps: '6–10', rest: '2 min' },
            ],
          },
          {
            day: 'Saturday',
            focus: 'Legs (repeat)',
            exercises: [
              { name: 'Hack Squat', slug: 'hack-squat', sets: '4', reps: '8–15', rest: '2 min' },
              { name: 'Barbell Hip Thrust', slug: 'hip-thrust', sets: '4', reps: '8–15', rest: '90 sec' },
              { name: 'Leg Extension', slug: 'leg-extension', sets: '3', reps: '12–20', rest: '60 sec' },
              { name: 'Lying Leg Curl', slug: 'lying-leg-curl', sets: '3', reps: '10–15', rest: '60–90 sec' },
              { name: 'Seated Calf Raise', slug: 'seated-calf-raise', sets: '4', reps: '12–20', rest: '60 sec' },
              { name: 'Cable Crunch', slug: 'cable-crunch', sets: '3', reps: '15–20', rest: '60 sec' },
            ],
          },
        ],
    muscleCoverage: [
      { muscle: 'Chest', setsPerWeek: 20 },
      { muscle: 'Back', setsPerWeek: 20 },
      { muscle: 'Shoulders', setsPerWeek: 16 },
      { muscle: 'Biceps', setsPerWeek: 12 },
      { muscle: 'Triceps', setsPerWeek: 12 },
      { muscle: 'Quads', setsPerWeek: 14 },
      { muscle: 'Hamstrings', setsPerWeek: 9 },
      { muscle: 'Glutes', setsPerWeek: 4 },
      { muscle: 'Calves', setsPerWeek: 8 },
    ],
    alternatives: ['push-pull-legs', 'bro-split', '6-day'],
    faqs: [
      { question: 'Did Arnold actually use this split?', answer: 'Arnold has described training with high frequency and volume during his competitive years, with sessions pairing chest/back and shoulders/arms. Whether this exact template matches his historical training precisely is debatable, but the structure captures his documented training philosophy.' },
      { question: 'Is the Arnold split too much volume?', answer: 'For most natural trainees, yes — this is an extreme amount of volume and frequency. Consider whether you have years of training under your belt and excellent recovery habits (sleep, nutrition, low stress) before attempting this programme.' },
    ],
    tags: ['arnold-split', '6-day', 'advanced', 'hypertrophy', 'bodybuilding', 'classic'],
    relatedSplits: ['push-pull-legs', 'bro-split', '6-day'],
  },
  {
    slug: 'pplul',
    name: 'PPLUL Workout Split (PPL + Upper/Lower)',
    shortName: 'PPLUL',
    daysPerWeek: 5,
    sessionsPerWeek: 5,
    difficulty: 'Intermediate',
    goals: ['Muscle Building', 'Hypertrophy', 'Strength'],
    equipment: ['Full Gym'],
    sessionDuration: '60–75 min',
    description: 'Push, pull and legs followed by an upper and a lower day. Five sessions a week that train most muscles twice.',
    longDescription: 'PPLUL combines two proven structures: a push/pull/legs block early in the week, then an upper-body and a lower-body day. Over five sessions most muscles are trained twice, so you get the frequency of a six-day PPL without needing a sixth training day, and the variety of two different session styles.',
    overview: 'PPLUL starts the week with focused push, pull and legs sessions, rests midweek, then finishes with a full upper-body day and a full lower-body day. Because the upper day mixes pushing and pulling, chest, back, shoulders and arms each get a second weekly exposure, and the lower day gives the legs theirs. Day one to three can be heavier and lower rep, with the upper and lower days used for slightly lighter, higher-rep work.',
    whoIsItFor: 'PPLUL suits intermediate lifters who can train five days a week and want near-twice-weekly frequency for most muscles without committing to six days. It works well for people moving up from a four-day upper/lower plan or down from a six-day PPL.',
    pros: [
      'Most muscles are trained twice a week on only five days.',
      'Two rest days — one midweek and one at the weekend — make recovery easier than six-day PPL.',
      'Variety: focused body-part-style days early in the week, broader upper/lower sessions later.',
      'Easy to run heavy early in the week and lighter later.',
      'Flexible: drop the lower day for a four-day version if life gets busy.',
    ],
    cons: [
      'Frequency is uneven: legs and push/pull muscles may not all land exactly twice.',
      'Five days is more than most beginners need.',
      'Weeks without a clear heavy/light plan can drift into too much total fatigue.',
    ],
    schedule: [
      {
        day: 'Monday',
        focus: 'Push (Chest, Shoulders, Triceps)',
        exercises: [
          { name: 'Barbell Bench Press', slug: 'barbell-bench-press', sets: '4', reps: '5–8', rest: '2–3 min' },
          { name: 'Incline Dumbbell Press', slug: 'incline-dumbbell-press', sets: '3', reps: '8–12', rest: '90 sec' },
          { name: 'Dumbbell Shoulder Press', slug: 'dumbbell-shoulder-press', sets: '3', reps: '8–12', rest: '90 sec' },
          { name: 'Dumbbell Lateral Raise', slug: 'lateral-raise', sets: '3', reps: '12–20', rest: '60 sec' },
          { name: 'Cable Fly', slug: 'cable-fly', sets: '3', reps: '12–15', rest: '60–90 sec' },
          { name: 'Cable Tricep Pushdown', slug: 'tricep-pushdown', sets: '3', reps: '10–15', rest: '60–90 sec' },
        ],
      },
      {
        day: 'Tuesday',
        focus: 'Pull (Back, Biceps)',
        exercises: [
          { name: 'Pull-Up', slug: 'pull-up', sets: '4', reps: '6–10', rest: '2 min' },
          { name: 'Barbell Row', slug: 'barbell-row', sets: '4', reps: '6–10', rest: '2–3 min' },
          { name: 'Seated Cable Row', slug: 'seated-cable-row', sets: '3', reps: '8–12', rest: '90 sec' },
          { name: 'Cable Face Pull', slug: 'face-pull', sets: '3', reps: '15–20', rest: '60 sec' },
          { name: 'Barbell Curl', slug: 'barbell-curl', sets: '3', reps: '8–12', rest: '90 sec' },
          { name: 'Hammer Curl', slug: 'hammer-curl', sets: '2', reps: '10–15', rest: '60–90 sec' },
        ],
      },
      {
        day: 'Wednesday',
        focus: 'Legs (Quads, Hamstrings, Glutes, Calves)',
        exercises: [
          { name: 'Barbell Back Squat', slug: 'squat', sets: '4', reps: '5–8', rest: '3–5 min' },
          { name: 'Romanian Deadlift', slug: 'romanian-deadlift', sets: '3', reps: '8–12', rest: '2 min' },
          { name: 'Barbell Hip Thrust', slug: 'hip-thrust', sets: '3', reps: '8–15', rest: '90 sec' },
          { name: 'Seated Leg Curl', slug: 'leg-curl', sets: '3', reps: '10–15', rest: '60–90 sec' },
          { name: 'Standing Calf Raise', slug: 'calf-raise', sets: '4', reps: '12–20', rest: '60 sec' },
          { name: 'Hanging Leg Raise', slug: 'hanging-leg-raise', sets: '3', reps: '10–15', rest: '60–90 sec' },
        ],
      },
      {
        day: 'Thursday',
        focus: 'Rest',
        exercises: [],
      },
      {
        day: 'Friday',
        focus: 'Upper Body',
        exercises: [
          { name: 'Barbell Overhead Press', slug: 'overhead-press', sets: '3', reps: '5–8', rest: '2–3 min' },
          { name: 'Lat Pulldown', slug: 'lat-pulldown', sets: '4', reps: '8–12', rest: '90 sec' },
          { name: 'Dumbbell Bench Press', slug: 'dumbbell-bench-press', sets: '3', reps: '8–12', rest: '90 sec' },
          { name: 'Chest-Supported Row', slug: 'chest-supported-row', sets: '3', reps: '8–15', rest: '90 sec' },
          { name: 'Cable Lateral Raise', slug: 'cable-lateral-raise', sets: '3', reps: '12–20', rest: '60 sec' },
          { name: 'Incline Dumbbell Curl', slug: 'incline-dumbbell-curl', sets: '3', reps: '10–12', rest: '60–90 sec' },
          { name: 'Cable Overhead Tricep Extension', slug: 'overhead-tricep-extension', sets: '3', reps: '12–15', rest: '60–90 sec' },
        ],
      },
      {
        day: 'Saturday',
        focus: 'Lower Body',
        exercises: [
          { name: 'Hack Squat', slug: 'hack-squat', sets: '4', reps: '8–15', rest: '2 min' },
          { name: 'Barbell Hip Thrust', slug: 'hip-thrust', sets: '3', reps: '8–15', rest: '90 sec' },
          { name: 'Lying Leg Curl', slug: 'lying-leg-curl', sets: '3', reps: '10–15', rest: '60–90 sec' },
          { name: 'Bulgarian Split Squat', slug: 'bulgarian-split-squat', sets: '3', reps: '8–12', rest: '90 sec' },
          { name: 'Seated Calf Raise', slug: 'seated-calf-raise', sets: '4', reps: '12–20', rest: '60 sec' },
          { name: 'Cable Crunch', slug: 'cable-crunch', sets: '3', reps: '15–20', rest: '60 sec' },
        ],
      },
    ],
    muscleCoverage: [
      { muscle: 'Chest', setsPerWeek: 13 },
      { muscle: 'Back', setsPerWeek: 18 },
      { muscle: 'Shoulders', setsPerWeek: 15 },
      { muscle: 'Biceps', setsPerWeek: 8 },
      { muscle: 'Triceps', setsPerWeek: 6 },
      { muscle: 'Quads', setsPerWeek: 11 },
      { muscle: 'Hamstrings', setsPerWeek: 9 },
      { muscle: 'Glutes', setsPerWeek: 6 },
      { muscle: 'Calves', setsPerWeek: 8 },
    ],
    alternatives: ['push-pull-legs', 'upper-lower', 'bro-split'],
    faqs: [
      { question: 'What does PPLUL stand for?', answer: 'Push, Pull, Legs, Upper, Lower — five training days in a week, usually with a rest day after legs.' },
      { question: 'Is PPLUL better than PPL?', answer: 'Neither is better by default. PPLUL gets most muscles to twice a week in five days, while a six-day PPL gets there with shorter sessions but one fewer rest day. See the PPLUL vs PPL comparison.' },
      { question: 'Can I run PPLUL on four days?', answer: 'Yes. Drop the lower day (or the upper day) for a four-day week; you will lose some frequency on that half of the body.' },
      { question: 'How should I schedule the rest days?', answer: 'A midweek rest after legs and one at the end of the week works well, but any pattern that avoids training the same muscles hard on consecutive days is fine.' },
    ],
    tags: ['hybrid', '5-day', 'intermediate', 'hypertrophy', 'pplul'],
    relatedSplits: ['push-pull-legs', 'upper-lower', '5-day'],
  },
];

export function getSplit(slug: string): WorkoutSplit | undefined {
  return splits.find(s => s.slug === slug);
}

export function getSplitsByDays(days: number): WorkoutSplit[] {
  return splits.filter(s => s.daysPerWeek <= days);
}

export function getSplitsByGoal(goal: string): WorkoutSplit[] {
  return splits.filter(s => s.goals.some(g => g.toLowerCase().includes(goal.toLowerCase())));
}
