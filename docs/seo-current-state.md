# SEO current state — BEFORE the SEO overhaul (baseline)

Captured by running `scripts/seo-audit.mjs` against the previous build (362 pages), plus a manual code review.

## Summary
| Metric | Before |
|---|---|
| Pages built | 362 (360 indexable) |
| Audit errors | **689** |
| URLs in sitemap.xml | 51 (hand-written, stale; 309 indexable pages missing) |
| `og:image` | referenced on every page but **file did not exist** (362 errors) |
| Broken internal links | 18 (e.g. `/6-day-workout-split`, `/muscles/legs`, `/blog/ppl-vs-bro-split`) |
| BreadcrumbList structured data | none (359 pages) |
| Thin pages (<300 words) | 6 (`/blog`, `/contact`, `/muscles`, BMI, macros, one more) |
| Image weight | ~6.6 MB of PNG (logo 680 KB; three mascot sheets 1.6–2.2 MB each) |

## Findings by area
- **URL architecture:** flat, keyword-poor routes (`/ppl-workout`, `/tools/tdee-calculator`, `/workout-builder`, `/blog`). No day-based split pages, no "best workout split" page, no split-finder page, no methodology pages.
- **Titles/descriptions:** unique per page, but 226 exercise titles >65 chars; the exercise library title claimed "500+" exercises (actual: 331).
- **Canonicals:** present; root canonical inconsistent with trailing-slash policy.
- **Structured data:** sitewide `WebSite` JSON-LD on *every* page (should be homepage only); `Article` without publisher/image; `FAQPage` only on two calculators.
- **Robots/sitemap:** robots.txt correct but sitemap was a static file listing 51 URLs. Hreflang tags pointed only at the page itself. `favicon.ico` was linked but did not exist.
- **Internal linking:** broken links above; exercise "related splits" used old slugs; no contextual CTAs into the Split Finder/Planner; calculators did not link to training pages.
- **Duplicate/boilerplate content:** four split pages shared an identical "Professor Splits" paragraph. **178 imported exercises** carry identical generic form cues/mistakes and templated descriptions (thin/duplicate at scale).
- **Trust / accuracy:** homepage showed fabricated stats ("500K+ users", "4.8/5 rating", "100+ workout splits"); About page claimed exercises were "written by people who actually train".
- **Localisation:** `astro.config.mjs` declares es/pt/de/fr locales but no localised pages exist.
- **Product CTAs:** generic "Build Workout" buttons; no deep links.

## Page inventory (before)
The full per-page inventory (title, H1 count, words) from the baseline run is kept in `docs/seo-baseline-inventory.md`.
