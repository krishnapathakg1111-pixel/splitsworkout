# SEO growth roadmap

## Before launch (checklist)
1. Deploy to Cloudflare Pages; connect `splitsworkout.com`; confirm `https://splitsworkout.com/sitemap.xml` and `/robots.txt` load.
2. Replace analytics/AdSense placeholders in `Layout.astro` and `public/ads.txt` with real IDs.
3. Add the site to Google Search Console (domain property) and Bing Webmaster Tools; submit the sitemap.
4. Run `npm run audit:seo` after deploy-config changes; keep errors at 0.
5. Request indexing for: home, `/workout-splits`, `/workout-splits/best-workout-split`, `/workout-split-finder`, `/workout-planner`.

## Phase 2 — DONE
- 4 comparison pages, 5 goal-based pages, 6 new muscle pages (16 total; muscle route is now data-driven), 4 new guides.
- 15 exercises rewritten with exercise-specific coaching and corrected classifications, then promoted to indexable (168 indexable / 163 noindex).
- Sitemap, cross-links (hub, split pages, best-split page, muscle pages) and audits updated.

## Phase 3 (in progress)
1. ~~Exercise review queue~~ — **done**: queue cleared (8 + 2 more promoted; 92 mapped as duplicates; 61 hidden as stunts/drills). Visible library = 178 reviewed exercises. To grow the library: add new exercises with full coaching content (the validator and quality report enforce the bar).
   _(historical note)_ **Exercise review queue (163 noindex).** Most are dataset filler or duplicates of curated exercises (e.g. `hammer-curls`, `lying-leg-curls`, `car-deadlift`, `bench-sprint`). Decide per exercise: *promote* (rewrite), *keep noindex*, or *remove from the library/planner*. Rewrite the genuinely distinct ones in batches of 15–20 and re-run `exercise-quality-report.mjs`.
2. ~~Exercise swap UI~~ — **done** (engine `src/lib/swapEngine.ts`; exercise pages + planner; `node scripts/test-swap-engine.mjs`).
3. ~~Planner features~~ — **done**: reorder, duplicate, swap, rest, notes, PDF includes rest/notes.
3b. ~~Visual muscle coverage~~ — **done**: heat-mapped anatomy, indirect sets (¼ weight), frequency, push/pull and upper/lower balance, fix suggestions.
3c. ~~Enrich split templates~~ — **done**: all five templates rewritten to sensible weekly volume and scored with the planner's own coverage logic (PPL and upper/lower: every major muscle on target; full body/bro/Arnold: only glutes or biceps marginally light, which is inherent to those structures). Fixed duplicate exercises (bro split) and empty repeat days (Arnold). `muscleCoverage` is now computed from the schedule, not hand-typed.

4. **More guides** from the cluster map (bench press form, bench alternatives, bench muscles worked, how to choose exercises per muscle).
5. ~~Hybrid split~~ — **done**: `/workout-splits/pplul` + `/workout-splits/pplul-vs-ppl`, finder profile, planner template. A separate body-part page is not needed (the bro split page covers it).
6. ~~Per-exercise visuals~~ — **done**: every library exercise renders its own start → finish pose diagram from a skeleton rig (`src/lib/figure.ts` two-bone IK + `src/lib/moves.ts` ~35 pose pairs), with that exercise's equipment drawn in, the primary muscle highlighted, plus equipment icons and level chips (`ExerciseVisual`/`EquipmentIcon`). `node scripts/test-diagrams.mjs` guards coverage. To add a movement: add a pose pair to `MOVES` and route it in `moveKeyFor`. Remaining ideas: front/side camera variants and per-grip variations.
7. **Authority signals:** a real named author/reviewer profile page once genuine credentials exist (never invented).

## Search Console loop (monthly)
**Publish → Measure → Identify → Improve → Measure.**
1. Export queries/pages (last 28 days). 
2. Pages at **average position 8–20** with impressions → improve the *existing* page (answer the query more directly, add a section, strengthen internal links, tighten title/H1). Do **not** create a second page for the same intent.
3. High impressions + low CTR → rewrite title/description.
4. Check Indexing → "Excluded by noindex": should equal the unreviewed-exercise list only. Check sitemap "discovered/crawled – not indexed".
5. Check Core Web Vitals and Rich results for BreadcrumbList/Article errors.
6. When promoting exercises, watch whether they get indexed and rank before promoting the next batch.

## Linkable assets (earn links, never buy them)
- Split Finder and Workout Planner (free tools others can reference).
- Original comparison tables and the day-based split guides.
- Downloadable printable plans (planner PDF export → templates page).
- An open dataset page summarising the exercise taxonomy (muscles/equipment/movement patterns).
Outreach: fitness subreddits/Discords when genuinely useful, creators who recommend splits, trainers/teachers needing a free planner. No PBNs, no directory spam.

## Content freshness
Do not edit dates for freshness. Review triggers: new exercise added/promoted, broken-link audit failure, calculator assumptions changed, a Search Console decline on a page. Record material changes in the page content (and add `dateModified` only when a real review happens).

## Remaining risks
- 153 hidden exercise pages stay noindex by design (duplicates/stunts); they add no organic value and are not linked from the library.
- Front delts have no dedicated page (folded into `shoulders`); hip flexors/adductors have none yet.
- Day/split pages are original but unreviewed by a qualified professional; authority signals (real named author/reviewer) are absent by design until real credentials exist.
- Four brief-specified titles exceed ~60 chars.
- Diagrams are generated from ~35 pose pairs (shared across exercises of the same pattern); equipment and muscle highlight differ per exercise, but two variations of one movement share a pose.
- New domain: expect a sandbox period; links/mentions matter more than on-page tweaks early on.
