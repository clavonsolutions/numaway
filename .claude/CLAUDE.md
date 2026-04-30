# Numaway — Project Context
# Division: Clavon Digital
# Version: 1.0 | Last Updated: April 2026

---

## PROJECT IDENTITY

Project: Numaway — global education mobility platform
Division: Clavon Digital (client delivery)
Client: Numaway Education Services Limited (Kano, Nigeria)
Tier default: Tier 2 (business logic — booking, applications, payments, AI assistant)
Stage: Build (Master URS v1.0 approved, Phase 1 in progress)
Domain: numaway.com
Postal: Mai Kwano Plaza, Zaria Road, 700102 Tarauni LGA, Kano, Nigeria
Canonical contact: connect@numaway.com  ·  WhatsApp/phone: +234 906 505 0363
Repo: github.com/clavonsolutions/numaway
Branch strategy: feature/* → develop → main (trunk-based)

---

## SOURCE-OF-TRUTH HIERARCHY (LIVING SPEC MODEL)

The **Master URS** is the single source of spec truth. Predecessor documents (URS v1.0, URS v2.0,
URS Supplement v1.0) have been absorbed and archived. Resolution order:

1. **`docs/master-urs.docx`** — Master URS v1.0 (THE spec — single source of truth)
2. `/content/legal.config.json` + `/content/seo/keyword-map.csv` — live runtime data
3. Clavon Design and UI/UX Standards v1.0 — cross-product design tokens
4. Numaway Brand Identity (canonical) — typography, palette, voice
5. Numaway Service Catalogue v1.0 — service taxonomy and KPIs
6. Numaway High-Level Strategy — pillars, principles, deferral triggers
7. Existing codebase (numaway-navigator) — reference only; does NOT override docs
8. `docs/archive/` (URS v1.0, v2.0, Supplement v1.0) — historical record only; do NOT use as live spec
9. Claude Code prior knowledge — last resort

**The Master URS is the only document Claude Code reads for spec questions.** Archived URSs
exist for audit, legal review, and historical context — they do not bind the build.

---

## STACK (per Master URS §5)

Framework: **Vite 5.4 + React 18 + React Router DOM v6** (SPA)
Prerendering: **vite-react-ssg** for all public routes (per ADR-010)
Language: TypeScript (strict — no `any`, explicit return types always)
Styling: TailwindCSS 3.4 + shadcn/ui (Radix primitives) + Clavon design tokens
Typography: **Montserrat** (display/headings) + **Inter** (body) + Playfair Display (premium opt-in only)
Colour palette: **5-token system** — Navy #0A1E3F, Teal #1AB6B4, Gold #D9A441, Sky Blue #77D1F2, neutrals
State: Zustand (client) + TanStack Query (server)
Forms: React Hook Form + Zod
Animation: Framer Motion
Database: Supabase PostgreSQL (ADR-015) — `supabase/migrations/001_initial_schema.sql`
Auth: Supabase Auth (ADR-016) — email/password, `@supabase/supabase-js`, NDPA consent at signup
Hosting: Digital Ocean Droplet — Nginx serves static frontend from dist/; PM2 manages API server (server/index.ts, port 3001); Nginx proxies /api/* to API server
Payments: Paystack + Flutterwave (Phase 8, no card data on Numaway servers)
AI: Anthropic Claude API for Sage assistant — server-side only, never browser-direct
Image sources: Pexels / Unsplash / Pixabay via MCP — self-hosted under /public/images
Testing: Vitest (unit) + Playwright (E2E)

**ADR-010:** If the prerender path can't meet a Master URS gate at any point, migrate to
Next.js 15 without further approval. Standards are non-negotiable; mechanism is.

---

## DESIGN MODE

**FULL** — Clavon UI/UX Standards v1.0 + Master URS §6 (Brand System) + §10 (Wide Layouts)
+ Numaway Brand Identity. No UI work without design-token compliance. No hex literals in
component code.

---

## COMPLIANCE FLAGS (per Master URS §3)

- **GDPR** (EU students, EU diaspora audience)
- **Nigeria Data Protection Act 2023 (NDPA)** — primary
- **WCAG 2.2 AA** — accessibility
- **FCCPA 2018** — Nigerian consumer protection
- **PCI-DSS** — delegated to Paystack/Flutterwave
- **NOT in scope:** GAMP 5, GxP, HIPAA, SOC 2

---

## BRAND VOICE — 5 LOCKED ATTRIBUTES (ADR-012)

1. **Assured** — we know the global mobility system deeply
2. **Supportive** — students feel guided, not overwhelmed
3. **Precise** — every claim is anchored to a number, source, or counsellor
4. **Modern** — AI-native; speak insight, not hype
5. **Globally Neutral** — avoid Nigerian slang and country-specific idioms in global copy

**Forbidden vocabulary on global pages:** "Easy/easily/effortlessly", "Best/#1/top-rated"
without evidence, "Guarantee/guaranteed" for outcomes, "Cheap/discounted", "Just" as softener,
"japa" and country-specific slang, aggressive marketing ("Don't miss out!").

**Tone compass:** Numaway sounds like a counsellor with twenty years in global mobility who
happens to be excellent at AI. Warm, authoritative, globally sophisticated.

Full voice rules in Master URS §6.3–6.7.

---

## SERVICE TAXONOMY — 9 DOMAINS (ADR-011)

| Code | Domain | Phase 1–8 |
|---|---|---|
| STU | Student Services (10) | **Yes — full scope** |
| UNI | University Partnership (5) | Deferred |
| DIG | Digital & AI (5) | Partial — public Sage in scope |
| COM | Compliance & Fraud Prevention (3) | Partial — internal only |
| COMU | Community & Engagement (3) | Partial — public surfaces only |
| CON | Consulting & Insights (3) | Deferred |
| EVT | Events & Marketing (3) | Partial |
| PREM | Premium Services (3) | Partial — badging only |
| FUT | Future Add-ons (4) | Backlog |

Service IDs (STU-01..STU-10) are stable references. Every service component carries
`data-service-id` on its outer container. Full taxonomy in Master URS §7.

---

## ACTIVE ARCHITECTURE DECISIONS (per Master URS §4)

- **ADR-001** — Master URS pattern (this document) is single source of spec truth
- **ADR-002** — Email canonical: connect@numaway.com
- **ADR-003** — WhatsApp canonical: +234 906 505 0363
- **ADR-004** — Three-picture rule enforced as ship-blocking CI gate
- **ADR-005** — AI-generated photography of humans forbidden on commercial pages
- **ADR-006** — Five-tier container width system
- **ADR-007** — Build sequence locked to Master URS §16 phases 1→8
- **ADR-008** — Typography: Montserrat + Inter + Playfair (premium opt-in)
- **ADR-009** — Brand colours: 5-token palette
- **ADR-010** — Vite + prerender for public; SPA for /app + /admin; Next.js 15 escalation if needed
- **ADR-011** — Service taxonomy: 9 domains; STU in Phase 1–8, others deferred
- **ADR-012** — Brand voice: 5 attributes + forbidden vocabulary list
- **ADR-013** — Lovable-tagger removed; CI gate prevents reintroduction
- **ADR-014** — Audience scope: Africa + Europe primary; en-NG/en-GB/en-US at launch
- **ADR-015** — Database: Supabase PostgreSQL; schema in `supabase/migrations/001_initial_schema.sql`; 7 tables + RLS; apply via `supabase db push`; registered 2026-04-28
- **ADR-016** — Auth: Supabase Auth (email/password); `@supabase/supabase-js` client; session via `onAuthStateChange`; NDPA consent recorded at registration; registered 2026-04-28

---

## AGENT INSTRUCTIONS

1. Read `docs/PROGRESS.md` before starting any task.
2. Read `docs/master-urs.docx` for the relevant section before generating code.
   (Extracted text version at `docs/master-urs.md` if available.)
3. State the Tier classification and the Master URS section reference before generating code.
4. Apply skills as needed: `@typescript-patterns`, `@api-design`, `@security-audit`,
   `@gdpr-ndpr`, `@accessibility`, `@performance-optimisation`, `@testing-strategy`,
   `@ai-integration` (for Sage).
5. Run subagent gates per Tier:
   - Tier 1: pre-commit gate only.
   - Tier 2: `/review` + pre-commit + CI pipeline.
   - Tier 3: `/review` + `/security-audit` + founder sign-off.
6. Update `docs/PROGRESS.md` after completing any task.
7. Never delete files. Never drop database collections. Confirm before any destructive action.

---

## NUMAWAY-SPECIFIC NON-NEGOTIABLES (per Master URS §15)

- **Three-picture rule** — no public page ships with fewer than 3 substantive images. CI gate
  `image-floor-check`.
- **AI-generated photography of humans is FORBIDDEN** on commercial pages. Replace via MCP
  procurement (Master URS §9.3).
- **Top-nav Book button** is the only nav-level CTA.
- **Canonical NAP** appears identically across the entire codebase. CI gate `nap-consistency`.
- **Every public route** must emit `<title>`, meta description, canonical, OG, schema.org JSON-LD
  via react-helmet-async. CI gate `meta-completeness`.
- **Every public route** must be in sitemap.xml. CI gate `sitemap-coverage`.
- **All public pages** render with JS disabled (prerendered). CI gates `prerender-coverage`
  + `js-disabled-content-check`.
- **Definition of Done**: 20-point per-page checklist in Master URS §15.1. PR template enforces it.
- **Five-tier container widths** — never invent a new width.

---

## DESIGN TOKEN GUARDRAILS (per Master URS §6)

- **Colours**: only Tailwind tokens or CSS variables — never hex literals in components
- **Spacing**: 8px-base scale (space-1..space-9)
- **Typography**: fluid clamp() scale; Montserrat for display, Inter for body
- **Containers**: container-tight, container-prose, container-default, container-wide,
  container-bleed
- **Icons**: Lucide React only, stroke 1.75

---

## CI QUALITY GATES (14 — all must pass; per Master URS §15.3)

`image-floor-check`, `no-external-image-host`, `no-hex-literal`, `meta-completeness`,
`sitemap-coverage`, `nap-consistency`, `lighthouse-budget`, `a11y-axe`, `link-check`,
`legal-config-required-keys`, `robots-allow-prod-only`, `prerender-coverage`,
`js-disabled-content-check`, `no-lovable-strings`.

---

## ESCALATE TO FOUNDER (Sagir) BEFORE PROCEEDING

- Any change to the canonical NAP, domain, or top-nav structure
- Any payment-provider integration change (Paystack/Flutterwave)
- Any addition of a third-party script that requires consent
- Any change to the Sage AI system prompt or model selection
- Any decision touching legal pages — counsel sign-off gating
- Any departure from the Master URS §16 build sequence
- Any new connector or vendor not already approved
- Any activation of a deferred surface (Partner Portal, Ambassador, B2B AI, Compliance Consulting)
- Phase 8 database and auth decisions
- **Any new ADR — register in Master URS §4 at next minor-version bump**

---

## BUILD SEQUENCE (per Master URS §16)

**Phase 1 — Trust Foundations & Cleanup** (current) — codebase cleanup, architecture, legal pages,
all 14 CI gates active
**Phase 2 — Image Overhaul** — MCP pull across all existing pages
**Phase 3 — High-Traffic Page Enrichment** — Homepage, services, Sage, FAQ
**Phase 4 — Country and Exam Pages** — 8 + 5
**Phase 5 — Wide-Layout Rebuild** — §10 system applied
**Phase 6 — SEO & Schema** — sitemap, schema.org library, local SEO Kano, backlinks
**Phase 7 — Content Hubs** — 5 pillars × 5 articles each
**Phase 8 — Portal & Admin Polish** — /app and /admin (DB + auth decisions)

---

## DEFERRED / NOT IN SCOPE (per Master URS §17)

- **Partner Portal** — activate when ≥2 paying university partnerships
- **Ambassador Surface** — activate when first cohort ≥10
- **B2B AI Profiling** (DIG-02 white-label) — activate when ≥2 pilot institutions sign 12-month subs
- **Compliance Consulting** (COM-03 / CON-03) — activate when first paid engagement signed
- French content (fr-CA, fr-FR): routing provisioned, content waits for market expansion
- Polish/EU virtual address: pending at Clavon level — not blocking Numaway

---

## ABSORPTION RITUAL (when next URS or Supplement is approved)

When a new versioned URS or Supplement is approved by the founder:

1. Merge the new content into the appropriate Master URS sections
2. Add new ADRs to §4
3. Update Cumulative Supersession Ledger (Appendix B)
4. Add row to Change Log (Appendix C)
5. Bump Master URS minor version (v1.0 → v1.1)
6. Move the absorbed document to `docs/archive/` with date-stamped filename
7. Update Archive Index (Appendix D)
8. Sign-off cascade: Lead Engineer → Marketing Lead → Founder → Counsel (if §13 touched)
9. Push updated Master URS to Notion via `clavon-sync-notion "Numaway" --push`

The absorbed document becomes read-only forever after the absorption.
