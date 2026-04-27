# Numaway — Progress Tracker
# Initialised: April 2026
# Rule: Items marked [x] are DONE. Never re-implement without explicit instruction.

---

## SOURCE-OF-TRUTH HIERARCHY

The **Master URS** at `docs/master-urs.docx` is the single source of spec truth. Predecessor
documents (URS v1.0, URS v2.0, URS Supplement v1.0) have been absorbed and live in
`docs/archive/` for historical reference only — they do not bind the build.

Resolution order: Master URS → live config files → design standards → brand identity →
service catalogue → strategy → codebase reference → archive (read-only) → prior knowledge.

---

## COMPLETED

- [x] URS v1.0 produced (initial audit of Lovable.dev codebase) — April 2026 — *now archived*
- [x] URS v2.0 produced (enrichment edition) — April 2026 — *now archived*
- [x] URS Supplement v1.0 produced (10 gap resolutions, 14 ADRs) — April 2026 — *now archived*
- [x] **Master URS v1.0 produced** — absorbs v1.0 + v2.0 + Supplement v1.0; single source of spec truth — April 2026
- [x] Clavon Master URS Pattern v1.0 documented — Clavon-wide governance standard
- [x] Project initialised in Clavon workspace (~/clavon/Numaway/)
- [x] CLAUDE.md updated to reference Master URS as primary source
- [x] PROGRESS.md updated (this file)

---

## IN PROGRESS

- [ ] Repo connection: clavonsolutions/numaway (existing Lovable.dev codebase pushed)
- [ ] Notion sync registration: clavon-sync-notion --init "Numaway" + 8 page IDs
- [ ] `docs/archive/` folder created with predecessor URSs and README.md
- [ ] Phase 1 cleanup execution (per Master URS §16.1)

---

## BLOCKED

| Item | Blocked By | Unblock Condition |
|---|---|---|
| Legal pages go-live (10 pages per Master URS §13) | Counsel review | Numaway counsel sign-off on /content/legal/ Markdown drafts |
| GBP listing live | GBP postcard / video verification | Marketing receives + verifies the address |
| status.numaway.com link in /500 page | Status page not yet built | Engineering builds Statuspage / Better Stack subdomain |
| DPO appointment in legal.config.json | DPO not yet appointed | Founder appoints internal candidate or engages DPO-as-a-service |

---

## ARCHITECTURE DECISIONS (per Master URS §4)

| ADR | Decision | Date |
|---|---|---|
| ADR-001 | Master URS pattern adopted as single source of spec truth. v1.0 + v2.0 + Supplement archived | April 2026 |
| ADR-002 | Email canonical: connect@numaway.com | April 2026 |
| ADR-003 | WhatsApp/phone canonical: +234 906 505 0363 | April 2026 |
| ADR-004 | Three-picture rule enforced as ship-blocking CI gate | April 2026 |
| ADR-005 | AI-generated photography of humans forbidden on commercial pages | April 2026 |
| ADR-006 | Five-tier container width system | April 2026 |
| ADR-007 | Build sequence locked to Master URS §16 phases 1→8 | April 2026 |
| ADR-008 | Typography: Montserrat + Inter + Playfair Display (premium opt-in) | April 2026 |
| ADR-009 | Brand colour palette: 5-token system (Navy + Teal + Gold + Sky Blue + neutrals) | April 2026 |
| ADR-010 | Vite + vite-react-ssg prerender for public; SPA for /app + /admin; Next.js 15 escalation if needed (no further approval) | April 2026 |
| ADR-011 | Service taxonomy: 9 domains; STU in Phase 1–8 scope; UNI/CON/PREM/FUT/B2B portal deferred | April 2026 |
| ADR-012 | Brand voice: 5 attributes + forbidden vocabulary list; codified into Sage AI system prompt | April 2026 |
| ADR-013 | Lovable-tagger removed; CI gate `no-lovable-strings` prevents reintroduction | April 2026 |
| ADR-014 | Audience scope: global (Africa + Europe primary); en-NG/en-GB/en-US at launch; fr-CA/fr-FR provisioned | April 2026 |

New ADRs (ADR-015 onward) are added to Master URS §4 at the next minor-version bump.

---

## BACKLOG (per Master URS §16 build sequence)

### Phase 1 — Trust Foundations & Cleanup (current)

**Codebase cleanup**
1. Remove `lovable-tagger` from package.json devDependencies and from vite.config.ts
2. Run `npm uninstall lovable-tagger`; verify package-lock.json clean
3. Add CI gate `no-lovable-strings` to prevent reintroduction
4. Replace fonts in src/index.css: load Montserrat (400,500,600,700,800) + Inter (400,500,600); remove Plus Jakarta Sans and @fontsource/sora
5. Update tailwind.config.ts: `fontFamily.display = ['Montserrat', ...]`; remove Sora references
6. Remove `@fontsource/sora` from package.json
7. Search-and-replace `hello@numaway.com` → `connect@numaway.com` across entire repo
8. Search-and-replace `2348000000000` → `9065050363` in WhatsApp links
9. Update /index.html schema.org JSON-LD: addressLocality "Lagos" → "Kano", full Mai Kwano Plaza address, areaServed AF + EU

**Architecture (per ADR-010 / Master URS §5.1)**
10. Install vite-react-ssg as devDependency
11. Configure vite.config.ts to prerender all public routes
12. Install react-helmet-async; wrap App with HelmetProvider
13. Add per-route `<Helmet>` components
14. Verify dist/ contains a static `.html` artefact for every public route after build
15. Add CI gate `prerender-coverage`
16. Add CI gate `js-disabled-content-check`

**Trust-foundation surfaces (per Master URS §8 + §12)**
17. Implement top-nav with Book button (NAV-01..NAV-08)
18. Create /content/legal.config.json with all canonical NAP keys (per Master URS §13.3)
19. Update canonical NAP across the codebase to read from legal.config.json
20. Update footer to v1.0 stamp + Numaway version reference
21. Refresh /404 page (NotFound.tsx)
22. Build /500 ServerError page (NEW)
23. Build /403 Forbidden page (NEW)
24. Build /401 Unauthorized page (NEW)
25. Build /maintenance (503) page (NEW)
26. Build /offline page (NEW)
27. Build EmptyState component library — 9 surfaces (NEW)
28. Build favicon pack (16/32/48/96/128/192/512 + Apple touch 180)
29. Build PWA manifest.json
30. Build Open Graph asset pack templates (1200×630)

**Legal pages (per Master URS §13 — gated by counsel)**
31. /privacy-policy — refresh from /content/legal/privacy-policy.md
32. /terms — refresh from /content/legal/terms.md
33. /cookies — refresh from /content/legal/cookies.md + cookie consent banner
34. /disclaimer — refresh from /content/legal/disclaimer.md
35. /complaints — refresh from /content/legal/complaints.md
36. /fraud-prevention — refresh from /content/legal/fraud-prevention.md
37. /refunds (NEW) — implement from /content/legal/refunds.md
38. /acceptable-use (NEW) — implement from /content/legal/acceptable-use.md
39. /accessibility (NEW) — implement from /content/legal/accessibility.md
40. /legal/dpa (NEW) — implement from /content/legal/dpa.md

**CI quality gates — all 14 must be active (per Master URS §15.3)**
41. image-floor-check
42. no-external-image-host
43. no-hex-literal
44. meta-completeness
45. sitemap-coverage
46. nap-consistency
47. lighthouse-budget
48. a11y-axe
49. link-check
50. legal-config-required-keys
51. robots-allow-prod-only
52. prerender-coverage
53. js-disabled-content-check
54. no-lovable-strings

**Phase 1 exit gate** (per Master URS §16.1):
- Every item 1–54 ticked
- Site renders on staging with NAP consistent everywhere
- Homepage + one service page pass DoD-01..DoD-20 with screenshots and Lighthouse + axe reports attached
- All 14 CI gates green on develop branch
- Sagir signs off in writing

### Phase 2 — Image Overhaul (per Master URS §16.2)

55. Pull replacement imagery for every existing public page via MCP (Pexels → Unsplash → Pixabay)
56. Replace AI-generated human photography on services pages and elsewhere
57. Generate AVIF / WebP / JPEG variants at 480/768/1200/1600/2400 widths
58. Populate /content/images/attribution.json
59. Build /credits page (auto-generated from attribution.json)

### Phase 3 — High-Traffic Page Enrichment (per Master URS §16.3)

60. Homepage / — apply brief from /content/briefs/index.md
61. /services overview
62. Service detail pages — STU-01 through STU-10 (8 routes)
63. /sage public page
64. /faq
65. /scholarships, /accommodation, /loans
66. /for-students, /for-agents, /for-institutions

### Phase 4 — Country and Exam Pages (per Master URS §16.4)

67. Country landing pages — UK, Canada, USA, Australia, Germany, Ireland, Poland, UAE
68. Exam pages — IELTS, TOEFL, SAT, GRE, GMAT

### Phase 5 — Wide-Layout Rebuild (per Master URS §16.5)

69. Apply Master URS §10 layout system across all Phase 1–4 pages

### Phase 6 — SEO and Schema (per Master URS §16.6)

70. Sitemap.xml generator with per-section indexes
71. Schema.org JSON-LD library per page-type (per Master URS §14.2)
72. Submit sitemap to Google Search Console + Bing Webmaster
73. Verify Google Business Profile (Mai Kwano Plaza)
74. Begin backlink outreach campaign
75. Pan-African / Diaspora keyword wave (per ADR-014)

### Phase 7 — Content Hubs (per Master URS §16.7)

76. Pillar pages × 5 (UK, Canada, Scholarships, English Tests, Visa Interviews)
77. First 5 cluster articles per pillar

### Phase 8 — Portal and Admin Polish (per Master URS §16.8)

78. Decide database — escalate to founder; new ADR registered in Master URS §4
79. Decide auth — escalate to founder; new ADR registered in Master URS §4
80. /app routes (5 surfaces)
81. /admin routes (8 surfaces)

---

## FUTURE SCOPE (per Master URS §17 — track only, do not build)

| Surface | Trigger to activate | Catalogue link |
|---|---|---|
| Partner Portal (UNI domain) | First 2 paying university partnerships signed | UNI-01..UNI-05, DIG-02 |
| Ambassador & Referral Surface | First ambassador cohort recruited (≥10) | COMU-03, FUT-04 |
| B2B AI Profiling — White-Label | 2 pilot institutions willing to sign 12-month subscription | DIG-02 |
| Compliance Consulting Practice | First paid consulting engagement signed | COM-03, CON-03 |
| Annual Research Report — "Nigerian Student Index" | Phase 6+; Marketing-led research initiative | (backlink magnet) |
| French content (fr-CA, fr-FR) | Numaway formally enters French-speaking markets | (audience expansion) |
| Polish/EU virtual address | Pending at Clavon level | (Clavon-level) |
| Status page (status.numaway.com) | Pre-Phase 1 launch | (referenced from /500) |

---

## ABSORPTION RITUAL (when next URS or Supplement is approved)

Per Master URS §1.4 and the Clavon Master URS Pattern:

1. Merge new content into appropriate Master URS sections
2. Add new ADRs to Master URS §4
3. Update Cumulative Supersession Ledger (Master URS Appendix B)
4. Add row to Change Log (Master URS Appendix C)
5. Bump Master URS minor version (v1.0 → v1.1)
6. Move absorbed document to `docs/archive/` with date-stamped filename
   (e.g., `urs-v3.0-archived-YYYY-MM-DD.docx`)
7. Update Archive Index (Master URS Appendix D)
8. Sign-off cascade: Lead Engineer → Marketing Lead → Founder → Counsel (if §13 touched)
9. Push updated Master URS to Notion: `clavon-sync-notion "Numaway" --push`

The absorbed document becomes read-only forever after the absorption.

---

## NOTES FOR THE NEXT SESSION

- First task in any new Claude Code session: read `.claude/CLAUDE.md` + this file +
  the Master URS section relevant to today's work.
- The Master URS lives at `docs/master-urs.docx`. Optional extracted text version at
  `docs/master-urs.md` for Claude Code search.
- Predecessor URSs in `docs/archive/` are read-only — never edit, never delete. They are
  not source-of-truth references. The Master URS is.
- When in doubt about the current state of a decision, check the Master URS first. If you
  need historical context (e.g., "why was this decided?"), check Appendix B (Cumulative
  Supersession Ledger) inside the Master URS — it preserves the full decision trail.
- Run `/review` before opening any Tier 2 PR. Run `/security-audit` for any Tier 3 work
  (auth, payments, Sage system prompt, legal config).
- Phase 1 is the longest single phase. Pace it; do not rush. Phase 1 quality determines
  whether Phases 2–8 land cleanly or require rework continuously.
