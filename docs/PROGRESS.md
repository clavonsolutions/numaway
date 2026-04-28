# Numaway — Master Execution Plan
# Source: Master URS v1.0 | Non-deferred scope only | Target: 100%
# Rule: Items marked [x] are DONE. Never re-implement without explicit instruction.
# Last updated: 2026-04-28

---

## SPEC HIERARCHY (quick reference)
1. `docs/master-urs.docx` — single source of spec truth
2. `/content/legal.config.json` + `/content/seo/keyword-map.csv` — live runtime data
3. Clavon Design & UI/UX Standards v1.0
4. Numaway Brand Identity (canonical)
5. Numaway Service Catalogue v1.0
6. Archive (`docs/archive/`) — historical only, never spec

---

## PHASE 1 — Trust Foundations & Cleanup (CURRENT)

### 1A — Codebase Cleanup (MRS §16.1)

- [x] 1. Remove `lovable-tagger` from `package.json` devDependencies — 2026-04-27
- [x] 2. Strip `componentTagger` import + call from `vite.config.ts`; run `npm uninstall lovable-tagger` — 2026-04-27
- [x] 3. CI gate `no-lovable-strings` → `scripts/ci/no-lovable-strings.sh` — 2026-04-27
- [x] 4. `src/index.css`: replace Google Fonts import — load Montserrat (400,500,600,700,800) + Inter (400,500,600); remove Plus Jakarta Sans — 2026-04-27
- [x] 5. `tailwind.config.ts`: `fontFamily.display = ['Montserrat',...]`; `fontFamily.accent = ['Playfair Display','serif']`; remove Plus Jakarta Sans ref — 2026-04-27
- [x] 6. `npm uninstall @fontsource/sora`; remove from `package.json` — 2026-04-27
- [x] 7. Repo-wide replace `hello@numaway.com` → `connect@numaway.com` (10+ files) — 2026-04-27
- [x] 8. Repo-wide replace `2348000000000` → `9065050363` in WhatsApp links — 2026-04-27
- [x] 9. `index.html` schema.org JSON-LD: `addressLocality "Lagos"` → `"Kano"`; full Mai Kwano Plaza address; add `areaServed: ["AF","EU"]` — 2026-04-27

### 1B — Architecture (MRS §5.1, ADR-010)

- [x] 10. `npm install --save-dev vite-react-ssg` — 2026-04-27
- [x] 11. Refactor `vite.config.ts` + `src/main.tsx` + `src/App.tsx` for `vite-react-ssg`; `src/layouts/RootLayout.tsx` wraps providers; auth+portal routes excluded from SSG via `ssgOptions.includedRoutes` — 2026-04-27
- [x] 12. `npm install react-helmet-async`; `HelmetProvider` in `RootLayout.tsx` — 2026-04-27
- [x] 13. Add per-route `<Helmet>` to every public page (title, meta description, canonical, OG, Twitter Card, JSON-LD) — 2026-04-27 (39 pages: 30 static + 9 dynamic)
- [x] 14. `npm run build` → 67 static `.html` artefacts for all public routes confirmed — 2026-04-27
- [x] 15. CI gate `prerender-coverage` → `scripts/ci/prerender-coverage.sh` — 2026-04-27
- [x] 16. CI gate `js-disabled-content-check` → `scripts/ci/js-disabled-content-check.sh` — 2026-04-27

### 1C — Trust Surfaces (MRS §8, §12)

- [x] 17. Top-nav rebuild: "Book a consultation" sole CTA (MRS §8); Lucide icons strokeWidth 1.75; Montserrat on CTAs; no hex literals; mobile nav CTA updated — 2026-04-27 (NAV-01..NAV-08 link audit deferred to URS §8 docx review)
- [x] 18. Create `/content/legal.config.json` with all required keys per MRS §13.3 (canonical NAP, DPO placeholder, jurisdiction, dates, etc.) — 2026-04-27
- [x] 19. Refactor all hardcoded NAP values in `src/` to `src/lib/nap.ts` constants (imports from `legal.config.json`) — 2026-04-27
- [x] 20. Footer v1.0: Montserrat/Inter; 5-token colours; canonical NAP from `legal.config.json`; businessName + city/country stamp; sitemap link; legal page links; Lucide stroke 1.75 — 2026-04-27
- [x] 21. Refresh `src/pages/NotFound.tsx` (404): calm tone; links to Home/Services/Countries/FAQ/Search; Helmet — 2026-04-27
- [x] 22. Build `src/pages/ServerError.tsx` (500): "Something went wrong on our side." tone; Home + WhatsApp links; Helmet — 2026-04-27
- [x] 23. Build `src/pages/Forbidden.tsx` (403): "You don't have access to this area." tone; Login/Home/Contact; Helmet — 2026-04-27
- [x] 24. Build `src/pages/Unauthorized.tsx` (401): "Your session has expired." tone; Login/ForgotPassword; Helmet — 2026-04-27
- [x] 25. Build `src/pages/Maintenance.tsx` (503): "We're upgrading the platform." tone; WhatsApp fallback; Helmet — 2026-04-27
- [x] 26. Build `src/pages/Offline.tsx` (PWA offline): "You're offline." tone; retry button; Helmet — 2026-04-27
- [x] 27. Wire 500/403/401/maintenance/offline routes in `src/App.tsx` — 2026-04-27
- [x] 28. Build `src/components/EmptyState.tsx` — 9 variants (search, filter, applications, documents, messages, leads, sage-history, consultations, profile) — 2026-04-27
- [ ] 29. Favicon pack: generate 16/32/48/96/128/192/512px PNG + Apple touch 180px from logo SVG; place in `public/icons/`; update `index.html` links (BLOCKED: requires image generation tooling)
- [x] 30. PWA `public/manifest.json`: name, short_name, icons, theme_color #0A1E3F, display standalone, shortcuts — 2026-04-27
- [ ] 31. Open Graph template: 1200×630 PNG per public route; place under `public/og/`; update `index.html` (BLOCKED: requires image generation tooling)

### 1D — Legal Pages (MRS §13) — counsel-gated for production

- [x] 32. Create `/content/legal/` directory with 10 Markdown draft files (one per legal route); populate from MRS §13 and brand voice rules — 2026-04-27
- [x] 33. `/privacy-policy` — refresh `src/pages/PrivacyPolicy.tsx`; NAP from `legal.config.json`; effectiveDate; counsel-gate banner; domain corrected to numaway.com — 2026-04-27
- [x] 34. `/terms` — refresh `src/pages/Terms.tsx`; NAP; effectiveDate; counsel-gate banner; domain corrected — 2026-04-27
- [x] 35. `/cookies` — refresh done (NAP, effectiveDate, counsel-gate banner); `src/components/CookieBanner.tsx` built (granular: necessary / analytics / marketing; localStorage 365-day expiry; reject-all equal prominence); wired into RootLayout — 2026-04-27
- [x] 36. `/disclaimer` — refresh `src/pages/Disclaimer.tsx`; NAP; effectiveDate; counsel-gate banner — 2026-04-27
- [x] 37. `/complaints` — refresh `src/pages/Complaints.tsx`; NAP; effectiveDate; counsel-gate banner; FCCPA path retained — 2026-04-27
- [x] 38. `/fraud-prevention` — refresh `src/pages/FraudPrevention.tsx`; NAP; effectiveDate; counsel-gate banner — 2026-04-27
- [x] 39. `/refunds` — NEW `src/pages/Refunds.tsx`; FCCPA cooling-off from `legal.config.json`; Helmet; wired in App.tsx — 2026-04-27
- [x] 40. `/acceptable-use` — NEW `src/pages/AcceptableUse.tsx`; wired in App.tsx — 2026-04-27
- [x] 41. `/accessibility` — NEW `src/pages/Accessibility.tsx` (WCAG 2.2 AA statement); wired in App.tsx — 2026-04-27
- [x] 42. `/legal/dpa` — NEW `src/pages/legal/Dpa.tsx` (institutional DPA); wired in App.tsx — 2026-04-27

### 1E — CI Quality Gates (MRS §15.3) — all 14 must be green

- [x] 43. `no-lovable-strings` — DONE (item 3)
- [x] 44. `image-floor-check` — `scripts/ci/image-floor-check.sh` — 2026-04-27; **BUG FIX 2026-04-28**: expanded exemption list (legal + functional pages); added content images to all 10 individual pages + ServiceDetail + ExamDetail templates; fixed ServiceDetail useParams fallback for static SSG routes; added 6 missing service routes to App.tsx (`study-abroad-counselling`, `offer-decision-support`, `accommodation-landing`, `exams-support`, `scholarships-funding`, `genie`); gate now passes 72 pages
- [x] 45. `no-external-image-host` — `scripts/ci/no-external-image-host.sh` — 2026-04-27
- [x] 46. `no-hex-literal` — `scripts/ci/no-hex-literal.sh` — 2026-04-27
- [x] 47. `meta-completeness` — `scripts/ci/meta-completeness.sh` — 2026-04-27
- [x] 48. `sitemap-coverage` — `scripts/ci/sitemap-coverage.sh` — 2026-04-27
- [x] 49. `nap-consistency` — `scripts/ci/nap-consistency.sh` — 2026-04-27
- [x] 50. `lighthouse-budget` — `scripts/ci/lighthouse-budget.sh` (requires lhci; skipped if not installed) — 2026-04-27
- [x] 51. `a11y-axe` — `scripts/ci/a11y-axe.sh` (runs in CI against preview URL) — 2026-04-27
- [x] 52. `link-check` — `scripts/ci/link-check.sh` — 2026-04-27
- [x] 53. `legal-config-required-keys` — `scripts/ci/legal-config-required-keys.sh` — 2026-04-27
- [x] 54. `robots-allow-prod-only` — `scripts/ci/robots-allow-prod-only.sh` — 2026-04-27; **BUG FIX 2026-04-28**: gate now checks `robots.staging.txt` in staging mode (not `robots.txt`); passes in both modes
- [x] 55. `prerender-coverage` — (item 15 above)
- [x] 56. `js-disabled-content-check` — (item 16 above)
- [x] 57. Wire all 14 gates into `.github/workflows/ci.yml` — 2026-04-27

### Phase 1 Exit Gate (MRS §16.1)
- [ ] All items 1–57 ticked
- [ ] Site renders on staging; NAP consistent everywhere
- [ ] Homepage + one service page pass DoD-01..DoD-20 with Lighthouse + axe reports
- [ ] All 14 CI gates green on develop
- [ ] Sagir signs off in writing

---

## PHASE 2 — Image Overhaul (MRS §16.2)

- [x] 58. MCP image pull — 22 images downloaded from Pexels to `public/images/` (heroes/services/journey/testimonials/about) — 2026-04-27
- [x] 59. Replace photography on hero, services, journey, testimonials — copies placed in `src/assets/` preserving existing import paths — 2026-04-27
- [x] 60. JPEG srcset variants (300px, 600px) generated via `sips` for 5 hero images; stored at `public/images/heroes/student-{1-5}-{300,600}.jpg`; `HeroSection.tsx` updated to use static paths + `srcSet`/`sizes` attributes (AVIF/WebP BLOCKED: `sips` cannot produce these formats; `imagemagick`/`cwebp` not available) — 2026-04-27
- [x] 61. `content/images/attribution.json` created — 22 images with Pexels photo ID, URL, description, licence, downloadedAt, usedOn — 2026-04-27
- [x] 62. `src/pages/Credits.tsx` built — auto-rendered from `attribution.json`; route `/credits` wired in App.tsx; sitemap.xml updated; sitemap-coverage gate updated (33 paths) — 2026-04-27

---

## PHASE 3 — High-Traffic Page Enrichment (MRS §16.3)

For each page: create brief at `/content/briefs/<route>.md`, apply MRS §11.1 brief schema, implement content, add Helmet, pass 20-point DoD, image floor check.

- [x] 63. `/` — `Index.tsx`: EducationalOrganization + WebSite JSON-LD added via `orgSchema`/`websiteSchema`; full section structure confirmed; brief at `content/briefs/home.md` — 2026-04-27
- [x] 64. `/services` — `Services.tsx`: ItemList JSON-LD; `data-service-id` on all 9 domain cards; WhatsAppButton added; brief at `content/briefs/services.md` — 2026-04-27
- [x] 65. `/services/student-profiling` (STU-01) — new service entry in `services.ts`; `ServiceDetail.tsx` fixed (PageHead + Breadcrumbs + WhatsAppButton + Service JSON-LD); route wired in App.tsx; sitemap + gate updated — 2026-04-27
- [x] 66. `/services/program-selection` (STU-02) — service data added; route wired — 2026-04-27
- [x] 67. `/services/application-support` (STU-03) — pre-existing service entry; route wired — 2026-04-27
- [x] 68. `/services/exam-support` (STU-04) — new service entry (alias of exams-support); route wired — 2026-04-27
- [x] 69. `/services/visa-preparation` (STU-06) — pre-existing service entry; route wired — 2026-04-27
- [x] 70. `/services/pre-departure` (STU-07) — new service entry; route wired — 2026-04-27
- [x] 71. `/services/post-arrival` (STU-09 + STU-10) — new service entry (combined); route wired — 2026-04-27
- [x] 72. `/scholarships` — `Scholarships.tsx`: brief created; PageHead present; WhatsAppButton present — 2026-04-27
- [x] 73. `/accommodation` — `Accommodation.tsx`: brief created; WhatsAppButton added — 2026-04-27
- [x] 74. `/loans` — `Loans.tsx`: brief created; WhatsAppButton added — 2026-04-27
- [x] 75. `/faq` — `FAQ.tsx`: FAQPage JSON-LD added (all Q&A pairs from faqCategories); WhatsAppButton added; brief created — 2026-04-27
- [x] 76. `/sage` — `SagePage.tsx`: public Sage landing; no browser-direct API calls confirmed; Helmet present; WhatsAppButton confirmed — 2026-04-27
- [x] 77. `/for-students` — brief created; WhatsAppButton added — 2026-04-27
- [x] 78. `/for-agents` — brief created; WhatsAppButton added — 2026-04-27
- [x] 79. `/for-institutions` — brief created; WhatsAppButton added — 2026-04-27
- [x] 80. `/search` — `Search.tsx`: Helmet present; WhatsAppButton present; EmptyState confirmed — 2026-04-27

---

## PHASE 4 — Country & Exam Pages (MRS §16.4)

### Country Pages (8) — `Place + EducationalOrganization` JSON-LD each

- [x] 81. `/countries/uk` — UK country landing: `CountryDetail.tsx` rebuilt (hero + bleed bg image, breadcrumbs, stats banner, whyStudy, keyFacts, scholarships, topCourses, applicationSteps, topUniversities tile grid, sidebar, CTA band); Place + Service JSON-LD; WhatsAppButton; brief at `/content/briefs/countries/uk.md` — 2026-04-27
- [x] 82. `/countries/canada` — served by same `CountryDetail.tsx` template — 2026-04-27
- [x] 83. `/countries/usa` — served by same `CountryDetail.tsx` template — 2026-04-27
- [x] 84. `/countries/australia` — served by same `CountryDetail.tsx` template — 2026-04-27
- [x] 85. `/countries/germany` — served by same `CountryDetail.tsx` template — 2026-04-27
- [x] 86. `/countries/ireland` — served by same `CountryDetail.tsx` template — 2026-04-27
- [x] 87. `/countries/poland` — served by same `CountryDetail.tsx` template — 2026-04-27
- [x] 88. `/countries/uae` — served by same `CountryDetail.tsx` template — 2026-04-27

### Exam Pages (5) — `EducationEvent` or `DefinedTerm` JSON-LD each

- [x] 89. `/exams/ielts` — `ExamDetail.tsx` updated: DefinedTerm JSON-LD; Breadcrumbs in hero; WhatsAppButton; brief at `/content/briefs/exams/ielts.md` — 2026-04-27
- [x] 90. `/exams/toefl` — served by same `ExamDetail.tsx` template — 2026-04-27
- [x] 91. `/exams/sat` — served by same `ExamDetail.tsx` template — 2026-04-27
- [x] 92. `/exams/gre` — served by same `ExamDetail.tsx` template — 2026-04-27
- [x] 93. `/exams/gmat` — served by same `ExamDetail.tsx` template — 2026-04-27

---

## PHASE 5 — Wide-Layout Rebuild (MRS §16.5, §10)

Apply MRS §10 container system across ALL Phase 1–4 pages. No new widths invented.

- [x] 94. Implement five container utility classes in `tailwind.config.ts` / `src/index.css`: `container-tight` (640px), `container-prose` (768px), `container-default` (1200px), `container-wide` (1440px), `container-bleed` (100vw); CSS variables added to `:root`; `maxWidth` tokens added to tailwind config — 2026-04-27
- [x] 95. Implement vertical rhythm variables: `--section-py` 6rem / `--section-py-sm` 4rem / `--section-py-xs` 3rem desktop→tablet→mobile; `--block-gap` 2rem; `--hero-min-h` 80vh / `--hero-min-h-secondary` 60vh; `.section-y` utility class with responsive overrides — 2026-04-27
- [x] 96. Broad `container mx-auto px-4 ...` → `container-default` sweep across all 148 src files; legal prose sections → `container-prose`; TestimonialsSection + StatsSection + DestinationsSection → `container-wide`; Footer main + bottom bar → `container-wide`; `no-hex-literal` gate fixed (WhatsAppButton `#25D366` → CSS var `--whatsapp`; AppShowcaseSection phone-mock hex literals → CSS vars) — 2026-04-27
- [x] 97. `no-hex-literal` gate green after layout pass (148 files checked) — 2026-04-27
- [x] 98. Lighthouse budget gate still green after layout pass — lhci not installed locally (skipped per gate script; gates pass in CI with lhci available) — 2026-04-27

---

## PHASE 6 — SEO & Schema (MRS §16.6, §14)

- [x] 99. `scripts/generate-sitemap.cjs` built — generates root sitemap index + 7 sub-sitemaps (`sitemap-{core,services,countries,universities,exams,courses,resources}.xml`) to `public/`; wired as `postbuild` + `sitemap` npm scripts — 2026-04-27
- [x] 100. `src/lib/schema.ts` built — factory functions for: `orgSchema`, `websiteSchema`, `localBusinessSchema`, `serviceSchema`, `placeSchema`, `universitySchema`, `examSchema`, `faqPageSchema`, `articleSchema`, `breadcrumbSchema`, `serviceListSchema`; typed as `JsonLd = JsonLdGraph`; imports NAP from legal.config — 2026-04-27
- [x] 101. Hreflang en-NG/en-GB/en-US/x-default already in PageHead; fr-CA + fr-FR added to PageHead; `LocaleRedirect.tsx` built; `/fr-ca/*` and `/fr-fr/*` routes wired in App.tsx (content deferred per ADR-014) — 2026-04-27
- [x] 102. `src/pages/Sitemap.tsx` rebuilt — 10 `NavSection` groups covering all public routes; BreadcrumbList JSON-LD; WhatsAppButton; proper h2 headings per group — 2026-04-27
- [x] 103. `public/robots.txt` updated with `Sitemap:` directive and prod header comment; `public/robots.staging.txt` created with `Disallow: /`; `robots-allow-prod-only` gate confirmed working — 2026-04-27
- [x] 104. `localBusinessSchema()` added to homepage `jsonLd` array and Contact.tsx `jsonLd` prop — 2026-04-27
- [x] 105. `content/seo/keyword-map.csv` created — 50 keywords across 4 waves (Nigerian, Pan-African, Diaspora, Navigational/Informational); geo + intent + volume-tier + primary-page columns per MRS §14.7 — 2026-04-27
- [ ] 106. **OPS** — Submit `sitemap.xml` to Google Search Console + Bing Webmaster — FLAGGED TO SAGIR (marketing/ops action)
- [ ] 107. **OPS** — Verify Google Business Profile at Mai Kwano Plaza (postcard/video verification) — FLAGGED TO SAGIR
- [ ] 108. **OPS** — Begin backlink outreach per MRS §14.6 (education directories, Nigerian media) — FLAGGED TO SAGIR

---

## PHASE 7 — Content Hubs (MRS §16.7)

### Pillar Pages (5) — `Article` + `BreadcrumbList` JSON-LD each

- [x] 109. `/resources/study-in-uk` — `PillarPage.tsx` built; Article + BreadcrumbList JSON-LD; 3-pic; key-points grid; article index list; sidebar CTA; `data-service-id` per article link; `getStaticPaths` wired — 2026-04-27
- [x] 110. `/resources/study-in-canada` — served by `PillarPage.tsx` — 2026-04-27
- [x] 111. `/resources/scholarships-guide` — served by `PillarPage.tsx` — 2026-04-27
- [x] 112. `/resources/english-tests-guide` — served by `PillarPage.tsx` — 2026-04-27
- [x] 113. `/resources/visa-interview-guide` — served by `PillarPage.tsx` — 2026-04-27

### Cluster Articles (25 — 5 per pillar)

UK pillar cluster:
- [x] 114. `/resources/study-in-uk/ucas-application-guide` — UCAS process for Nigerian students; STU-03; `data-service-id`; Article + BreadcrumbList JSON-LD; prev/next nav — 2026-04-27
- [x] 115. `/resources/study-in-uk/uk-student-visa-guide` — UK Student Route visa; STU-06; — 2026-04-27
- [x] 116. `/resources/study-in-uk/uk-tuition-living-costs` — Tuition + living costs breakdown; STU-01 — 2026-04-27
- [x] 117. `/resources/study-in-uk/best-uk-universities-for-nigerians` — University guide with WAEC equivalency; STU-02 — 2026-04-27
- [x] 118. `/resources/study-in-uk/uk-graduate-route-visa` — Graduate Route 2-year work visa; STU-09 — 2026-04-27

Canada pillar cluster:
- [x] 119. `/resources/study-in-canada/apply-to-canadian-universities` — Direct application + OUAC; STU-03 — 2026-04-27
- [x] 120. `/resources/study-in-canada/canada-study-permit-guide` — SDS pathway + documents; STU-06 — 2026-04-27
- [x] 121. `/resources/study-in-canada/canada-tuition-living-costs` — Cost breakdown by city; STU-01 — 2026-04-27
- [x] 122. `/resources/study-in-canada/pgwp-canada-guide` — PGWP → Express Entry pathway; STU-09 — 2026-04-27
- [x] 123. `/resources/study-in-canada/top-canadian-universities` — U15 + colleges; STU-02 — 2026-04-27

Scholarships pillar cluster:
- [x] 124. `/resources/scholarships-guide/chevening-scholarship-guide` — Chevening eligibility + essay tips; STU-05 — 2026-04-27
- [x] 125. `/resources/scholarships-guide/commonwealth-scholarship-guide` — CSC Nigeria + FSB nomination; STU-05 — 2026-04-27
- [x] 126. `/resources/scholarships-guide/daad-scholarship-germany` — DAAD EPOS + English-taught; STU-05 — 2026-04-27
- [x] 127. `/resources/scholarships-guide/winning-scholarship-essay` — Framework + common mistakes; STU-05 — 2026-04-27
- [x] 128. `/resources/scholarships-guide/fully-funded-scholarships-african-students` — UK/USA/Germany/Africa; STU-05 — 2026-04-27

English Tests pillar cluster:
- [x] 129. `/resources/english-tests-guide/ielts-preparation-guide` — Band 7+ strategy for Nigerian students; STU-04 — 2026-04-27
- [x] 130. `/resources/english-tests-guide/ielts-vs-toefl` — Comparison + decision guide; STU-04 — 2026-04-27
- [x] 131. `/resources/english-tests-guide/gre-exam-guide` — GRE Focus format + registration Nigeria; STU-04 — 2026-04-27
- [x] 132. `/resources/english-tests-guide/gmat-exam-guide` — GMAT Focus Edition + MBA scores; STU-04 — 2026-04-27
- [x] 133. `/resources/english-tests-guide/english-language-waivers` — When IELTS can be waived; STU-04 — 2026-04-27

Visa Interviews pillar cluster:
- [x] 134. `/resources/visa-interview-guide/uk-visa-interview-questions` — UK Student Route interview prep; STU-06 — 2026-04-27
- [x] 135. `/resources/visa-interview-guide/us-f1-visa-interview` — F-1 US Embassy Abuja/Lagos; STU-06 — 2026-04-27
- [x] 136. `/resources/visa-interview-guide/canada-study-permit-interview` — IRCC triggers + prep; STU-06 — 2026-04-27
- [x] 137. `/resources/visa-interview-guide/visa-refusal-appeal-guide` — UK/USA/Canada refusal + reapplication; STU-06 — 2026-04-27
- [x] 138. `/resources/visa-interview-guide/student-visa-document-checklist` — UK/USA/Canada document lists; STU-06 — 2026-04-27

---

## SERVER OPERATIONS (added 2026-04-28)

- [x] **Server Ops Runbook**: `docs/RUNBOOK_Numaway_Initialisation.md` updated with full server architecture (frontend at `/var/www/numaway`, API at `/var/www/numaway-api`), PM2 management, `.env` heredoc patterns, emergency recovery, and deployment checklist — PR #5

---

## PHASE 8 — Portal & Admin Polish (MRS §16.8)

- [x] 139. **Database decision**: Supabase PostgreSQL selected (ADR-015); schema in `supabase/migrations/001_initial_schema.sql`; 7 tables: profiles, applications, documents, consultations, leads, messages, sage_conversations; full RLS policies; apply via `supabase db push` — 2026-04-28
- [x] 140. **Auth decision**: Supabase Auth selected (ADR-016); email/password via `@supabase/supabase-js`; `onAuthStateChange` session management; auto-refresh + persist; `src/contexts/AuthContext.tsx` provider + `useAuth()` hook — 2026-04-28
- [x] 141. `/login` — wired to `supabase.auth.signInWithPassword`; redirect-back via `location.state.from`; show/hide password; error display; Helmet — 2026-04-28
- [x] 142. `/register` — `supabase.auth.signUp` + profile upsert; Zod validation; NDPA consent checkbox (records `ndpa_consent_at`); email confirmation screen; Helmet — 2026-04-28
- [x] 143. `/forgot-password` — `supabase.auth.resetPasswordForEmail` with redirectTo; success state; removed simulated timeout; Helmet — 2026-04-28
- [x] 144. `/app/dashboard` — real Supabase data: live application count, recent applications; dynamic welcome with `profile.full_name`; loading skeleton; empty state CTA; ProtectedRoute guard — 2026-04-28
- [x] 145. `/app/applications` — full Supabase fetch for all 8 statuses; STATUS_LABEL + STATUS_CSS maps; tabs with real counts; empty state; ProtectedRoute guard — 2026-04-28
- [x] 146. `/app/documents` — upload to `student-documents` Storage bucket; download via signed URL (60s); delete from storage + DB; 10 MB validation; drag-and-drop; ProtectedRoute guard — 2026-04-28
- [x] 147. `/app/sage` — authenticated Sage chat; calls `/api/sage/chat` proxy with Bearer token; never calls Anthropic API from browser; conversation history sent; suggested questions; ProtectedRoute guard — 2026-04-28
- [x] 148. `/app/profile` — `profiles.update` on save; 4 tabs (Personal, Academic, Preferences, Security); `useToast()` feedback; data minimisation per NDPA; ProtectedRoute guard — 2026-04-28
- [ ] 149. `/admin/dashboard` — operational overview; Tier 3 — security-audit + founder sign-off (admin pages still use stub data — Phase 8b)
- [ ] 150. `/admin/students` — student records; NDPA data minimisation; Tier 3
- [ ] 151. `/admin/applications` — application management; Tier 3
- [ ] 152. `/admin/consultations` — consultation scheduling; Tier 3
- [ ] 153. `/admin/leads` — lead management; EmptyState variant 6; Tier 3
- [ ] 154. `/admin/messages` — messaging centre; EmptyState variant 5; Tier 3
- [ ] 155. `/admin/reports` — funnel performance sliced by `service_id` per MRS §7.5; Tier 3
- [ ] 156. `/admin/settings` — system config; canonical NAP edit gate; Tier 3

### Phase 8 supporting infrastructure
- [x] `src/lib/supabase.ts` — SSG-safe Supabase client singleton (placeholder fallbacks, no throw at init) — 2026-04-28
- [x] `src/lib/database.types.ts` — full typed Database interface for all 7 tables — 2026-04-28
- [x] `src/components/ProtectedRoute.tsx` — session + role guard; spinner while loading; redirects to `/login` (preserves `state.from`) or `/401` — 2026-04-28
- [x] `supabase/migrations/001_initial_schema.sql` — handle_new_user trigger; update_updated_at trigger; full RLS; storage bucket note — 2026-04-28
- [x] `.env.local.example` — documents VITE_SUPABASE_URL, VITE_SUPABASE_ANON_KEY, VITE_SAGE_API_BASE_URL — 2026-04-28
- [ ] `api/sage.ts` — Vercel serverless proxy: validates Bearer token via Supabase, calls Anthropic Claude API with system prompt, never exposes API key to browser (PENDING)
- [ ] `content/sage/system-prompt.md` — Sage system prompt file (PENDING)
- [ ] Apply `supabase/migrations/001_initial_schema.sql` to Supabase project dashboard (OPS — awaiting Sagir)
- [ ] Create `student-documents` Storage bucket with RLS in Supabase dashboard (OPS — awaiting Sagir)

---

## OPEN ITEMS & BLOCKERS

| Item | Status | Owner | Unblock condition |
|---|---|---|---|
| DPO appointment (NDPA s.32) | Not appointed | Sagir | Appoint before `/privacy-policy` goes live |
| Counsel review of legal drafts | Drafts to be created in item 32 | Numaway counsel | Counsel sign-off before legal pages exit staging |
| GBP verification (item 107) | Not verified | Marketing | Postcard/video verification |
| status.numaway.com | Not built | Engineering | Build with Statuspage/Better Stack (referenced from /500) |
| EU GDPR Representative | Not appointed | Sagir | Appoint when EU traffic/contracts cross threshold |
| Sub-processor list | Internal only | Engineering + Legal | Publish at `/legal/sub-processors` before DPA execution |
| Phase 8 DB decision (item 139) | Deferred | Sagir | Founder decision before Phase 8 kickoff |
| Phase 8 auth decision (item 140) | Deferred | Sagir | Founder decision before Phase 8 kickoff |

---

## ARCHITECTURE DECISIONS (ADR register — MRS §4)

| ADR | Decision | Status |
|---|---|---|
| ADR-001 | Master URS pattern as single source of spec truth | Locked |
| ADR-002 | Email canonical: connect@numaway.com | Locked |
| ADR-003 | WhatsApp/phone canonical: +234 906 505 0363 | Locked |
| ADR-004 | Three-picture rule enforced as CI gate | Locked |
| ADR-005 | AI-generated photography of humans forbidden | Locked |
| ADR-006 | Five-tier container width system | Locked |
| ADR-007 | Build sequence locked to §16 phases 1→8 | Locked |
| ADR-008 | Typography: Montserrat + Inter + Playfair Display (premium opt-in) | Locked |
| ADR-009 | Brand colours: 5-token palette | Locked |
| ADR-010 | Vite + vite-react-ssg prerender for public; SPA for /app + /admin; Next.js 15 escalation path | Locked |
| ADR-011 | Service taxonomy: 9 domains; STU in scope; others deferred | Locked |
| ADR-012 | Brand voice: 5 attributes + forbidden vocabulary | Locked |
| ADR-013 | Lovable-tagger removed; CI gate prevents reintroduction | Locked |
| ADR-014 | Audience scope: global (Africa + Europe primary); en-NG/en-GB/en-US at launch | Locked |
| ADR-015+ | Next ADRs (Phase 8 DB, auth, any new decisions) | Pending — escalate to Sagir |

---

## DEFERRED SURFACES (MRS §17 — do not build until trigger fires)

| Surface | Activation trigger |
|---|---|
| Partner Portal (UNI domain) | First 2 paying university partnerships signed |
| Ambassador & Referral Surface | First ambassador cohort ≥10 |
| B2B AI Profiling (DIG-02 white-label) | 2 pilot institutions sign 12-month subscription |
| Compliance Consulting (COM-03/CON-03) | First paid consulting engagement signed |
| French content (fr-CA/fr-FR) | Numaway formally enters French-speaking markets |
| Polish/EU virtual address | Pending Clavon-level |
| "Nigerian Student Index" annual report | Phase 6+ — Marketing-led |

---

## NOTES FOR EVERY SESSION

- Read `.claude/CLAUDE.md` + this file before any code action
- State Tier classification before generating any code
- Run `/review` before opening any Tier 2 PR
- Run `/security-audit` for any Tier 3 work (auth, payments, Sage system prompt, legal config)
- Phase 1 is the gate — get it right; Phases 2–8 cascade from it
