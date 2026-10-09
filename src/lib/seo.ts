// Central SEO helpers — one place for site constants, JSON-LD builders and URL rules.
// Rules: canonical URLs have NO trailing slash (Cloudflare Pages serves /x/index.html at /x).
// Structured data only describes content that is visibly on the page. No fabricated
// ratings, reviews, prices, dates or credentials.
import unreviewed from '../data/unreviewed-exercises.json';
import hiddenList from '../data/hidden-exercises.json';
import duplicates from '../data/exercise-duplicates.json';

export const SITE_URL = 'https://splitsworkout.com';
export const BRAND = 'SplitsWorkout';
export const TAGLINE = 'Find Your Split. Build Your Workout. Train Smarter.';

export const abs = (path: string) => SITE_URL + (path === '/' ? '/' : path.replace(/\/$/, ''));
export const cleanPath = (p: string) => (p.length > 1 ? p.replace(/\/$/, '') : p);

export type Crumb = { name: string; url?: string };

export function breadcrumbLd(crumbs: Crumb[], currentPath: string) {
  const items = [{ name: 'Home', url: '/' }, ...crumbs];
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((c, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name: c.name,
      item: abs(c.url ?? (i === items.length - 1 ? currentPath : '/')),
    })),
  };
}

export const organizationLd = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: BRAND,
  url: SITE_URL,
  logo: SITE_URL + '/logo.png',
  description:
    'Free workout split guides, an exercise library, a muscle guide, a workout planner and fitness calculators.',
};
export const websiteLd = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  name: BRAND,
  url: SITE_URL,
  description: TAGLINE,
};

export function articleLd(o: { headline: string; description: string; path: string; image?: string }) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: o.headline,
    description: o.description,
    mainEntityOfPage: abs(o.path),
    image: SITE_URL + (o.image ?? '/og/default.png'),
    author: { '@type': 'Organization', name: BRAND },
    publisher: { '@type': 'Organization', name: BRAND, logo: { '@type': 'ImageObject', url: SITE_URL + '/logo.png' } },
  };
}

export function webAppLd(o: { name: string; description: string; path: string; category: string }) {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebApplication',
    name: o.name,
    description: o.description,
    url: abs(o.path),
    applicationCategory: o.category,
    operatingSystem: 'Any (web browser)',
    isAccessibleForFree: true,
    publisher: { '@type': 'Organization', name: BRAND, url: SITE_URL },
  };
}

// ── Exercise quality gate ────────────────────────────────────────────────
// Exercises imported from the open dataset still carry generic cues/mistakes, so their
// pages are noindex (but fully usable) until reviewed. To promote one: delete its slug
// from src/data/unreviewed-exercises.json — it then becomes indexable and enters the sitemap.
const unreviewedSet = new Set<string>(unreviewed as string[]);
// Hidden = stunts/drills (hidden-exercises.json) + duplicates of reviewed exercises (exercise-duplicates.json).
// They keep their URL and data (noindex) but are left out of the library, planner picker and counts.
const hiddenSet = new Set<string>([...(hiddenList as string[]), ...Object.keys(duplicates)]);
export const isHiddenExercise = (slug: string) => hiddenSet.has(slug);
export const duplicateOf = (slug: string): string | undefined => (duplicates as Record<string, string>)[slug];
export const isStuntExercise = (slug: string) => (hiddenList as string[]).includes(slug);
export const visibleOnly = <T extends { slug: string }>(xs: T[]): T[] => xs.filter((x) => !hiddenSet.has(x.slug));
export const isIndexableExercise = (slug: string) => !unreviewedSet.has(slug);
export const unreviewedCount = unreviewedSet.size;

// ── Cross-linking maps ───────────────────────────────────────────────────
export const MUSCLE_PAGES: Record<string, string> = {
  Chest: 'chest', 'Upper Chest': 'chest',
  Back: 'back', 'Lower Back': 'back', Lats: 'lats', 'Upper Back': 'upper-back', Traps: 'upper-back',
  Shoulders: 'shoulders', 'Front Delts': 'shoulders', 'Side Delts': 'side-delts', 'Rear Delts': 'rear-delts',
  Biceps: 'biceps', Brachialis: 'biceps', Triceps: 'triceps', Forearms: 'forearms', Brachioradialis: 'forearms',
  Quads: 'quads', Adductors: 'quads', Hamstrings: 'hamstrings', Glutes: 'glutes', 'Hip Abductors': 'glutes',
  Calves: 'calves', Soleus: 'calves', Core: 'abs', Abs: 'abs', Obliques: 'obliques',
};
export const muscleUrl = (name: string) => (MUSCLE_PAGES[name] ? `/muscles/${MUSCLE_PAGES[name]}` : null);

export const SPLIT_NAMES: Record<string, string> = {
  'push-pull-legs': 'Push Pull Legs (PPL)',
  'upper-lower': 'Upper Lower Split',
  'full-body': 'Full Body Split',
  'pplul': 'PPLUL (PPL + Upper/Lower)',
  'bro-split': 'Bro Split (Body-Part Split)',
  'arnold-split': 'Arnold Split',
};
export const splitUrl = (slug: string) => `/workout-splits/${slug}`;
