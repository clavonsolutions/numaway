# Numaway — Initialisation Runbook

**[Clavon Digital | I1 — Internal Operations]**
**Date:** April 2026
**Project:** Numaway (clavonsolutions/numaway)
**Status:** Ready for execution
**Spec model:** Living Spec — Master URS v1.0 is the single source of spec truth

This is the single, ordered, copy-paste-ready runbook for connecting Numaway to the Clavon
ecosystem. The Master URS pattern means there is exactly **one current spec document** —
`docs/master-urs.docx`. Predecessor URSs (v1.0, v2.0, Supplement v1.0) are absorbed and
archived under `docs/archive/`.

---

## Pre-flight

Before starting, confirm you have:

- macOS terminal open (Apple Silicon or Intel)
- GitHub CLI installed (`gh --version` returns 2.x or later)
- Notion access to the `📚 Clavon Template Library` parent page
- The 6 Clavon deliverables downloaded from the previous chat:
  - `NUMAWAY-MASTER-URS_v1_0.docx`  ← **the live spec**
  - `NUMAWAY-URS-WEB-001_v2_0.docx`  ← to be archived
  - `NUMAWAY-URS-SUPPLEMENT-001_v1_0.docx`  ← to be archived
  - `Clavon_Master_URS_Pattern_v1.md`  ← Clavon-wide governance reference
  - `CLAUDE.md`
  - `PROGRESS.md`
- `clavon-sync-notion --list` returns successfully (CLI installed, token configured)

---

## Step 1 — Create Notion pages (8 total)

Navigate to your `📚 Clavon Template Library` in Notion. Under your active-projects parent
page (the same place where Clavon Website and QARI live), create a new section titled
"Numaway" and add **eight** child pages with these **exact** titles:

```
CLAUDE-MD - Numaway
PROGRESS-MD - Numaway
URS - Numaway                    ← will hold Master URS v1.0
SRS - Numaway
ADR - Numaway
PROPOSAL - Numaway
SOW - Numaway
CASE-STUDY - Numaway
```

For each page, use the corresponding template from `📚 Clavon Template Library`.

After creating each page, **copy its page ID** from the URL. The ID is the 32-character hash
at the end of the URL (everything after the last dash, before the question mark).

Save these 8 page IDs in a temporary text file. You'll paste them in Step 5.

---

## Step 2 — Local workspace + Clavon scaffolding

```bash
# Create the workspace folder (matches Clavon Website / qari pattern)
mkdir -p ~/clavon/Numaway
cd ~/clavon/Numaway

# Create the standard Clavon directory structure with archive subfolder
mkdir -p .claude docs docs/archive

# Drop in the Clavon scaffolding files
cp ~/Downloads/CLAUDE.md .claude/CLAUDE.md
cp ~/Downloads/PROGRESS.md docs/PROGRESS.md

# Drop in the live spec — Master URS v1.0
cp ~/Downloads/NUMAWAY-MASTER-URS_v1_0.docx docs/master-urs.docx

# Drop archived predecessors into docs/archive/ with date-stamped filenames
TODAY=$(date +%Y-%m-%d)
cp ~/Downloads/NUMAWAY-URS-WEB-001_v2_0.docx docs/archive/urs-v2.0-archived-${TODAY}.docx
cp ~/Downloads/NUMAWAY-URS-SUPPLEMENT-001_v1_0.docx docs/archive/urs-supplement-v1.0-archived-${TODAY}.docx

# Optional: if you have a copy of URS v1.0 (the original Lovable.dev audit),
# also archive it. If not, skip this line — it's noted in the Master URS Lineage anyway.
# cp ~/Downloads/NUMAWAY-URS-WEB-001_v1_0.docx docs/archive/urs-v1.0-archived-${TODAY}.docx

# Create the archive README
cat > docs/archive/README.md <<'EOF'
# Archive

This folder contains historical specification documents that have been **absorbed** into
the live Master URS at `../master-urs.docx`.

## Read-only

These files are read-only. Do not edit. Do not delete. They are preserved for:

- **Audit** — when an auditor needs to see what was approved at a specific moment in time
- **Legal review** — when counsel needs the snapshot version that was current when a
  contract was signed
- **Historical context** — to understand why a decision was made

## Source of truth

If the Master URS and an archived document conflict, **the Master URS wins by definition**.

The Master URS is the only document Claude Code reads for spec questions. Archived
documents are referenced manually when historical context is needed.

## Contents

| File | Original document | Notes |
|---|---|---|
| `urs-v1.0-archived-YYYY-MM-DD.docx` | NUMAWAY-URS-WEB-001 v1.0 | Original Lovable.dev codebase audit |
| `urs-v2.0-archived-YYYY-MM-DD.docx` | NUMAWAY-URS-WEB-001 v2.0 | Enrichment edition (sections 21–29) |
| `urs-supplement-v1.0-archived-YYYY-MM-DD.docx` | NUMAWAY-URS-SUPPLEMENT-001 v1.0 | 10 gap resolutions, 14 ADRs |

## When new entries are added

Whenever the next versioned URS or Supplement is absorbed into the Master URS, the absorbed
document is moved here with a date-stamped filename (per the Clavon Master URS Pattern).

For the current spec, always refer to `../master-urs.docx`.
EOF

# Verify
ls -la .claude/ docs/ docs/archive/
```

You should see:
- `.claude/CLAUDE.md`
- `docs/PROGRESS.md`
- `docs/master-urs.docx`  ← **the live spec**
- `docs/archive/urs-v2.0-archived-{date}.docx`
- `docs/archive/urs-supplement-v1.0-archived-{date}.docx`
- `docs/archive/README.md`

---

## Step 3 — Optional: extract Master URS text for Claude Code

For faster Claude Code search of the Master URS, optionally extract a text version:

```bash
cd ~/clavon/Numaway

# This requires `extract-text` (pandoc-based) — install via brew if needed:
# brew install pandoc

extract-text docs/master-urs.docx > docs/master-urs.md
```

This gives Claude Code a markdown version it can grep through quickly. The .docx remains
the canonical artefact (preserves formatting, sign-offs, cover); the .md is for
search-and-read efficiency.

---

## Step 4 — Clone the existing repo and layer in scaffolding

The Numaway repo already exists at `clavonsolutions/numaway` with the Lovable.dev codebase
pushed. We layer in Clavon scaffolding via PR — non-destructive.

```bash
cd ~/clavon/Numaway

# Initialize git in this folder and connect to the existing remote
git init
git remote add origin git@github.com:clavonsolutions/numaway.git

# Pull the existing codebase
git fetch origin
git checkout -b develop origin/develop 2>/dev/null || git checkout -b main origin/main

# Confirm we have the Lovable code
ls src/ package.json vite.config.ts

# Now create a feature branch for Clavon scaffolding
git checkout -b feature/clavon-scaffolding

# Add a README that points future developers at the Master URS
cat > README.md <<'EOF'
# Numaway

Global education mobility platform. Clavon Digital delivery.

- **Project memory:** `.claude/CLAUDE.md`
- **Status & backlog:** `docs/PROGRESS.md`
- **Spec (single source of truth):** `docs/master-urs.docx`
- **Historical archive:** `docs/archive/`
- **Domain:** numaway.com
- **Contact:** connect@numaway.com · WhatsApp +234 906 505 0363

## Working on this project

Run `clavon-sync-notion "Numaway" --pull` at the start of every session, then open Claude Code:

```bash
cd ~/clavon/Numaway
clavon-sync-notion "Numaway" --pull
claude
```

First prompt in any session:

> "What is the current status of the Numaway project and what should I work on first?
> Reference Master URS §16.1 for Phase 1 cleanup tasks."

## Build sequence (per Master URS §16)

Phase 1 — Trust foundations & cleanup (current)
Phase 2 — Image overhaul
Phase 3 — High-traffic page enrichment
Phase 4 — Country & exam pages
Phase 5 — Wide-layout rebuild
Phase 6 — SEO & schema
Phase 7 — Content hubs
Phase 8 — Portal & admin polish

See `docs/PROGRESS.md` for the detailed backlog.

## Spec governance

The Master URS at `docs/master-urs.docx` is a **living document** — it is updated in place
when new versioned URSs or Supplements are absorbed. The version number bumps minor on each
absorption (v1.0 → v1.1 → v1.2). Archived predecessors live in `docs/archive/` as
date-stamped read-only snapshots.

When working on the project: always read the Master URS for current spec. Archived URSs are
historical reference only.
EOF

# Stage everything
git add .claude/CLAUDE.md docs/PROGRESS.md docs/master-urs.docx \
        docs/archive/ README.md
[ -f docs/master-urs.md ] && git add docs/master-urs.md

# Commit
git commit -m "chore: add Clavon scaffolding — Master URS v1.0 as single source of spec truth

- .claude/CLAUDE.md — project memory, references Master URS as primary
- docs/PROGRESS.md — Phase 1 backlog, 14 ADRs, absorption ritual
- docs/master-urs.docx — Living Specification v1.0 (absorbs URS v1.0 + v2.0 + Supplement v1.0)
- docs/archive/ — date-stamped predecessor URSs (read-only)
- docs/archive/README.md — explains archive policy
- README.md — points to Master URS

Per Clavon Master URS Pattern v1.0 (Living Spec model): there is exactly one current spec
document per product (the Master URS). Predecessors are absorbed and archived; new versioned
URSs/Supplements are absorbed at minor-version bumps."

# Push the feature branch
git push -u origin feature/clavon-scaffolding

# Open the PR
gh pr create \
  --base develop \
  --title "Clavon scaffolding — Master URS v1.0 (Living Spec model)" \
  --body "Adds the Clavon project memory, progress tracker, README, and the Master URS v1.0 as the single source of spec truth. Predecessor URSs (v1.0, v2.0, Supplement v1.0) are placed in docs/archive/ with date-stamped filenames per the Clavon Master URS Pattern. No source-code changes. Phase 1 cleanup work follows in subsequent PRs per docs/PROGRESS.md."
```

If the default branch on GitHub is `main` and not `develop`, swap `develop` for `main` in
the last `gh pr create --base develop` line.

---

## Step 5 — Notion sync registration

```bash
cd ~/clavon/Numaway

# Initialise Numaway in the sync tool
clavon-sync-notion --init "Numaway"

# Register each of the 8 Notion page IDs from Step 1.
# REPLACE each <PASTE_ID_HERE> with the 32-character page ID.
clavon-sync-notion --set "Numaway" claude-md      <PASTE_ID_HERE>
clavon-sync-notion --set "Numaway" progress-md    <PASTE_ID_HERE>
clavon-sync-notion --set "Numaway" urs            <PASTE_ID_HERE>
clavon-sync-notion --set "Numaway" srs            <PASTE_ID_HERE>
clavon-sync-notion --set "Numaway" adr            <PASTE_ID_HERE>
clavon-sync-notion --set "Numaway" proposal       <PASTE_ID_HERE>
clavon-sync-notion --set "Numaway" sow            <PASTE_ID_HERE>
clavon-sync-notion --set "Numaway" case-study     <PASTE_ID_HERE>

# Verify all 8 are registered
clavon-sync-notion --list
```

Note: the `urs` page in Notion holds the Master URS content (not v2.0 or the Supplement —
those are archived).

---

## Step 6 — Push CLAUDE.md and PROGRESS.md to Notion

```bash
cd ~/clavon/Numaway
clavon-sync-notion "Numaway" --push
```

This uploads the local content to the matching Notion pages. After this, Notion is the
authoring environment going forward — the daily ritual is pull → work → push.

---

## Step 7 — Optional: paste Master URS content into Notion URS page

The Master URS is a .docx file. The Notion `URS - Numaway` page can either:

**Option A** — Embed the .docx file in Notion as a file attachment (simplest)
**Option B** — Paste the Master URS content as Notion blocks for searchability and inline editing

For Option B, run:

```bash
extract-text ~/clavon/Numaway/docs/master-urs.docx > /tmp/master-urs.md
```

Then copy the contents of `/tmp/master-urs.md` into the `URS - Numaway` Notion page.

Recommend Option B once Phase 1 is in flight — searchable Master URS content in Notion
accelerates future sessions.

---

## Step 8 — First Claude Code session

```bash
cd ~/clavon/Numaway
clavon-sync-notion "Numaway" --pull
claude
```

The session start banner should fire (ADK status). Claude Code will read:
- `.claude/CLAUDE.md` (project memory)
- `docs/PROGRESS.md` (status + backlog)

First prompt to send:

```
What is the current status of the Numaway project and what should I work on first?
Reference Master URS §16.1 for Phase 1 cleanup tasks. List items 1–9 (codebase cleanup) from
PROGRESS.md and recommend which to tackle first.
```

Claude Code should respond with:
- Numaway recognised, Tier 2, Build stage
- Phase 1 cleanup is current
- Master URS v1.0 is the live spec; predecessor URSs in docs/archive/ are not consulted
- Recommendation: start with Lovable-tagger removal (items 1–3) — atomic, reduces shipping risk

---

## Step 9 — Verification checklist

Run through this list to confirm the connection is healthy:

- [ ] `~/clavon/Numaway/.claude/CLAUDE.md` exists and references Master URS as primary
- [ ] `~/clavon/Numaway/docs/PROGRESS.md` exists with all 14 ADRs in the table
- [ ] `~/clavon/Numaway/docs/master-urs.docx` exists (Master URS v1.0)
- [ ] `~/clavon/Numaway/docs/archive/` exists with predecessor URSs (date-stamped)
- [ ] `~/clavon/Numaway/docs/archive/README.md` explains archive policy
- [ ] `~/clavon/Numaway/README.md` points to Master URS
- [ ] `git remote -v` shows `origin` pointing at `git@github.com:clavonsolutions/numaway.git`
- [ ] `gh pr view` shows the open Clavon scaffolding PR
- [ ] `clavon-sync-notion --list` shows Numaway with 8 doc mappings
- [ ] `clavon-sync-notion "Numaway" --pull` runs cleanly (no errors)
- [ ] Notion pages contain the local CLAUDE.md and PROGRESS.md content
- [ ] `claude` opens with the session-start banner showing Numaway recognised

---

## Step 10 — Approve the scaffolding PR

Review the PR on GitHub. Once Sagir approves and merges:

```bash
cd ~/clavon/Numaway
git checkout develop
git pull origin develop
git branch -d feature/clavon-scaffolding
```

You're now on a clean develop with Clavon scaffolding committed. Phase 1 cleanup work
begins on a new feature branch.

---

## Phase 1 — First execution branch (after scaffolding merged)

```bash
cd ~/clavon/Numaway
git checkout develop
git pull origin develop
git checkout -b feature/phase1-codebase-cleanup
```

Then prompt Claude Code:

```
Execute PROGRESS.md Phase 1 items 1–9 (codebase cleanup): Lovable-tagger removal,
font swap from Plus Jakarta Sans + Sora to Montserrat + Inter, hello@numaway.com
to connect@numaway.com replacement, schema.org Lagos→Kano fix, and the WhatsApp
number canonicalisation. Reference Master URS §6.1 for typography lock and §15.2
for forbidden patterns. Show the diff for each, run `npm run lint` and `npm run build`
to confirm everything still compiles, and update PROGRESS.md to mark items 1–9 as done.
```

---

## Daily ritual (every Numaway session)

```bash
cd ~/clavon/Numaway
clavon-sync-notion "Numaway" --pull   # Notion → local at start
claude                                  # Work
# /exit                                 # When done
clavon-sync-notion "Numaway" --push   # Local → Notion at end
```

---

## When to escalate to founder (Sagir)

Per CLAUDE.md and Master URS §1.7, escalate before proceeding when:

- Any change to the canonical NAP, domain, or top-nav structure
- Any payment-provider integration change (Paystack/Flutterwave)
- Any addition of a third-party script that requires consent
- Any change to the Sage AI system prompt or model selection
- Any decision touching legal pages — counsel sign-off gating
- Any departure from the Master URS §16 build sequence
- Any new connector or vendor not already approved
- Any activation of a deferred surface (Master URS §17)
- Phase 8 database and auth decisions
- **Any new ADR** — drafted, approved, and added to Master URS §4 at next minor-version bump

---

## Absorption ritual (when next URS or Supplement is approved)

When the founder approves a new versioned URS (e.g., URS v3.0) or a Supplement:

```bash
cd ~/clavon/Numaway
git checkout develop
git pull origin develop
git checkout -b feature/master-urs-v1.1-absorption
```

Then in Claude Code:

```
Absorb [DOCUMENT NAME] into the Master URS, producing v1.1.

Steps:
1. Read the new document at docs/incoming/[filename].docx
2. Merge content into appropriate Master URS sections
3. Add new ADRs to Master URS §4
4. Update Cumulative Supersession Ledger (Appendix B)
5. Add row to Change Log (Appendix C)
6. Bump version on cover and footer to v1.1
7. Move the absorbed document to docs/archive/ with date-stamped filename
8. Update Archive Index (Appendix D)
9. Update PROGRESS.md to reflect new tasks if any
10. Commit and open PR for sign-off cascade
```

The PR triggers the sign-off cascade: Lead Engineer → Marketing Lead → Founder → Counsel
(if §13 was touched). Once merged, the absorbed document is read-only forever.

---

## What success looks like at the end of Phase 1

- Lovable-tagger fully removed, CI gate prevents reintroduction
- Montserrat + Inter loading on every page (per ADR-008)
- Single canonical NAP everywhere (per ADR-002, ADR-003)
- Top-nav with Book button on every page
- All 14 CI gates active and green on develop
- All 6 existing legal pages refreshed; 4 new legal pages added
- All 6 error/utility pages built (404, 500, 403, 401, 503, offline)
- EmptyState component library shipped
- Favicon pack and PWA manifest live
- Open Graph templates rendering at 1200×630 for every public route
- Static HTML emitted for every public route via vite-react-ssg
- Counsel review of legal drafts complete (or scheduled)
- Sagir signs Phase 1 exit gate

Phase 1 is the gate. Get it right and Phases 2–8 cascade cleanly.

---

## Folder structure (final)

After Step 9 completes successfully, your `~/clavon/Numaway/` looks like:

```
~/clavon/Numaway/
├── .claude/
│   └── CLAUDE.md
├── docs/
│   ├── master-urs.docx              ← THE LIVE SPEC (v1.0)
│   ├── master-urs.md                ← optional extracted text
│   ├── PROGRESS.md
│   └── archive/                     ← read-only historical record
│       ├── urs-v2.0-archived-{date}.docx
│       ├── urs-supplement-v1.0-archived-{date}.docx
│       └── README.md
├── content/                         ← created during Phase 1 execution
│   ├── briefs/
│   ├── legal/
│   ├── seo/
│   ├── images/
│   ├── sage/
│   └── legal.config.json
├── src/                             ← existing Lovable.dev-origin codebase
├── public/
├── package.json
├── vite.config.ts
└── README.md
```

This structure matches the Clavon Master URS Pattern v1.0 standard and will be replicated
for QARI, HESSA, RENSWITCH, and AFRIX CORE when they reach their consolidation moment.

---

## Server Architecture (DigitalOcean Droplet)

**Droplet IP:** 68.183.74.180
**OS:** Ubuntu 22.04 LTS
**Domain:** numaway.com

There are **two completely separate services** on the droplet. Never confuse them.

| Service | Directory | What it is |
|---|---|---|
| Frontend (React/Vite SPA) | `/var/www/numaway` | Static HTML/JS/CSS built from GitHub and served by nginx |
| API Server (Node/Express) | `/var/www/numaway-api` | Express API running under PM2, proxied by nginx at `/api/` |

nginx routes:
- `https://numaway.com/` — serves static files from `/var/www/numaway/dist/`
- `https://numaway.com/api/` — reverse-proxies to `localhost:3001` (the Express API)

---

## Standard Deployment Workflow

Every code change follows this sequence:

```
local code change
  → commit to feature branch
    → push to GitHub
      → open PR on GitHub
        → Sagir reviews and merges to main
          → SSH into droplet and run deploy commands
```

**Never push directly to main. Never deploy uncommitted local changes.**

---

## Deploy the Frontend (after merging a PR to main)

```bash
# Always cd into the correct directory first
cd /var/www/numaway

# Stash any local drift (e.g. package-lock.json regenerated by a previous npm install)
git stash

# Pull latest main
git pull origin main

# Install any new/changed dependencies
npm install

# Build — this runs vite-react-ssg + generates sitemaps (postbuild hook)
npm run build
```

A successful build ends with:
```
[vite-react-ssg] Build finished.
Sitemaps generated (8 files) → public/
```

nginx serves from `dist/` automatically — no nginx reload needed after a frontend deploy.

**Common mistake:** Running these commands from `/root` or any directory other than
`/var/www/numaway`. Git will say "not a git repository" and npm will say
"package.json not found". Always `cd /var/www/numaway` first.

---

## Manage the API Server (PM2)

The API server runs as PM2 process `id 0`, named `numaway-api`.

### Check status
```bash
pm2 list
```

### View live logs
```bash
pm2 logs numaway-api
```

### View last N lines without tailing
```bash
pm2 logs numaway-api --lines 10 --nostream
```

### Restart after a config change
```bash
cd /var/www/numaway-api
pm2 restart numaway-api --update-env
sleep 3
pm2 logs numaway-api --lines 5 --nostream
```

A healthy restart ends with this line in the out log:
```
Numaway API on :3001
```

### Start from scratch (if PM2 process was deleted)
```bash
cd /var/www/numaway-api
pm2 start server.js --name numaway-api
pm2 save
```

**Common mistake:** Running `pm2 restart numaway-api --update-env` from `/root` and then assuming
the `.env` in `/var/www/numaway-api/` was updated. The restart command does not rewrite
the `.env` file. The `.env` must be edited separately (see below).

---

## Edit the API .env File

The `.env` belongs at `/var/www/numaway-api/.env`. Always `cd` there first.

```bash
cd /var/www/numaway-api
cat > .env << 'ENVEOF'
PORT=3001
SUPABASE_URL=https://vubbhwkxeriagyjpirde.supabase.co
SUPABASE_SERVICE_ROLE_KEY=PASTE_YOUR_SERVICE_ROLE_KEY_HERE
ANTHROPIC_API_KEY=PASTE_YOUR_ANTHROPIC_KEY_HERE
ALLOWED_ORIGIN=https://numaway.com
ENVEOF
```

Verify the file before restarting:
```bash
cat .env
```

The SUPABASE_URL must be a plain URL with no markdown brackets. Correct:
```
SUPABASE_URL=https://vubbhwkxeriagyjpirde.supabase.co
```

Wrong (causes "Invalid supabaseUrl" crash loop):
```
SUPABASE_URL=[https://vubbhwkxeriagyjpirde.supabase.co](https://...)
```

After editing, always restart:
```bash
pm2 restart numaway-api --update-env
sleep 3
pm2 logs numaway-api --lines 5 --nostream
```

**Common mistake:** Writing the `.env` from `/root` (the home directory you land in on SSH).
This creates `/root/.env` which is silently ignored by the API. The API reads from
`/var/www/numaway-api/.env`.

---

## Git Credentials on the Server

The server authenticates to GitHub using an SSH deploy key. This is the recommended
approach: no token is stored on disk in plaintext.

### One-time SSH key setup (if not already done)

```bash
# Generate a key with no passphrase (the server is not interactive)
ssh-keygen -t ed25519 -C "numaway-server-deploy" -f /root/.ssh/numaway_deploy -N ""

# Print the public key — copy this output
cat /root/.ssh/numaway_deploy.pub
```

Add the public key to GitHub:
1. Go to github.com/clavonsolutions/numaway → Settings → Deploy keys
2. Click "Add deploy key"
3. Title: `numaway-server` | Key: paste the output above | Allow write access: NO
4. Click "Add key"

Configure SSH to use this key for GitHub:
```bash
cat >> /root/.ssh/config << 'EOF'
Host github.com
  IdentityFile /root/.ssh/numaway_deploy
  StrictHostKeyChecking no
EOF
chmod 600 /root/.ssh/config
```

Switch the remote URL to SSH:
```bash
cd /var/www/numaway
git remote set-url origin git@github.com:clavonsolutions/numaway.git
```

Verify the connection:
```bash
ssh -T git@github.com
# Expected: "Hi clavonsolutions/numaway! You've successfully authenticated..."
```

Subsequent `git pull` commands will use the deploy key silently.

---

## Verify Everything is Running

```bash
# 1. Check both services
pm2 list

# 2. Test API health
curl -s http://localhost:3001/api/health || echo "API not responding"

# 3. Check nginx
systemctl status nginx | grep -E "active|running"

# 4. Check dist/ was built (should show recent modification time)
ls -la /var/www/numaway/dist/index.html
```

---

## Full Deployment Checklist (run after every deploy)

- [ ] `git pull origin main` completed without errors
- [ ] `npm install` completed (no fatal errors)
- [ ] `npm run build` completed with `[vite-react-ssg] Build finished.`
- [ ] `pm2 list` shows `numaway-api` as `online`
- [ ] `pm2 logs numaway-api --lines 5 --nostream` shows `Numaway API on :3001`
- [ ] `https://numaway.com` loads in a browser
- [ ] `https://numaway.com/api/health` responds (or a form submission reaches Supabase)

---

## Emergency: API in crash loop

Symptom: PM2 shows high restart count, logs show repeated `Error: Invalid supabaseUrl`.

Fix:
```bash
cd /var/www/numaway-api
cat .env                     # inspect — look for markdown brackets or missing values
cat > .env << 'ENVEOF'       # rewrite from scratch with correct plain values
PORT=3001
SUPABASE_URL=https://vubbhwkxeriagyjpirde.supabase.co
SUPABASE_SERVICE_ROLE_KEY=YOUR_KEY
ANTHROPIC_API_KEY=YOUR_KEY
ALLOWED_ORIGIN=https://numaway.com
ENVEOF
pm2 restart numaway-api --update-env
sleep 3
pm2 logs numaway-api --lines 5 --nostream
```

---

## Emergency: Frontend stuck on old build

Symptom: Site shows old content after a deploy, or build failed.

Fix:
```bash
cd /var/www/numaway
git status                   # check for uncommitted local drift
git stash                    # park any local changes
git pull origin main         # pull latest
npm install                  # reinstall if package.json changed
npm run build                # rebuild
```

If build still fails, check the error output for the specific file and line number.
Common causes: TypeScript errors, missing imports, split array exports in `src/data/`.

---

## Server File Summary

| Path | Purpose |
|---|---|
| `/var/www/numaway/` | Frontend repo (cloned from GitHub) |
| `/var/www/numaway/dist/` | Built static files served by nginx |
| `/var/www/numaway-api/` | Node API server |
| `/var/www/numaway-api/server.js` | Express entry point |
| `/var/www/numaway-api/.env` | API secrets (not in git) |
| `/root/.pm2/logs/numaway-api-out.log` | PM2 stdout log |
| `/root/.pm2/logs/numaway-api-error.log` | PM2 stderr log |
| `/etc/nginx/sites-available/numaway` | nginx site config |
