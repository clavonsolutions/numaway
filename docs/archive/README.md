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
| `urs-v1.0-archived-YYYY-MM-DD.docx` | NUMAWAY-URS-WEB-001 v1.0 | Original Lovable.dev codebase audit (may be skipped if not in original handover) |
| `urs-v2.0-archived-YYYY-MM-DD.docx` | NUMAWAY-URS-WEB-001 v2.0 | Enrichment edition (sections 21–29) |
| `urs-supplement-v1.0-archived-YYYY-MM-DD.docx` | NUMAWAY-URS-SUPPLEMENT-001 v1.0 | 10 gap resolutions, 14 ADRs |

## When new entries are added

Whenever the next versioned URS or Supplement is absorbed into the Master URS, the
absorbed document is moved here with a date-stamped filename per the Clavon Master URS
Pattern. The lifecycle is:echo "  ✓ docs/archive/README.md"
echo ""

# ─── Project README ───
echo "▸ Writing project README.md ..."

cat > "README.md" <<'READMEEOF'
# Numaway

Global education mobility platform. Clavon Digital delivery.

- **Project memory:** `.claude/CLAUDE.md`
- **Status & backlog:** `docs/PROGRESS.md`
- **Spec (single source of truth):** `docs/master-urs.docx`
- **Historical archive:** `docs/archive/`
- **Domain:** numaway.com
- **Contact:** connect@numaway.com · WhatsApp +234 906 505 0363
- **Repo:** github.com/clavonsolutions/numaway

## Working on this project

```bash
cd ~/clavon/Numaway
clavon-sync-notion "Numaway" --pull
claude
```

First prompt in any session:

> "What is the current status of the Numaway project and what should I work on first?
> Reference Master URS §16.1 for Phase 1 cleanup tasks."

## Build sequence (per Master URS §16)

| Phase | Theme |
|---|---|
| 1 | Trust foundations & cleanup *(current)* |
| 2 | Image overhaul |
| 3 | High-traffic page enrichment |
| 4 | Country & exam pages |
| 5 | Wide-layout rebuild |
| 6 | SEO & schema |
| 7 | Content hubs |
| 8 | Portal & admin polish |

See `docs/PROGRESS.md` for the detailed backlog.

## Spec governance

The Master URS at `docs/master-urs.docx` is a **living document** — updated in place when
new versioned URSs or Supplements are absorbed. Version bumps minor on each absorption
(v1.0 → v1.1 → v1.2). Archived predecessors live in `docs/archive/` as date-stamped
read-only snapshots.

When working on the project: always read the Master URS for current spec. Archived URSs
are historical reference only.
READMEEOF

echo "  ✓ README.md"
echo ""

# ─── .gitignore ───
echo "▸ Writing .gitignore ..."

cat > ".gitignore" <<'GITIGNOREEOF'
# Dependencies
node_modules/
.pnp/
.pnp.js

# Build output
dist/
build/
.vite/
.next/

# Environment
.env
.env.local
.env.*.local

# Editor / OS
.DS_Store
.idea/
.vscode/
*.swp

# Logs
*.log
npm-debug.log*
yarn-debug.log*
yarn-error.log*

# Test / coverage
coverage/
.nyc_output/
*.lcov

# Cache
.cache/
.eslintcache

# Local Claude session artefacts (keep .claude/CLAUDE.md, not session state)
.claude/sessions/
.claude/cache/
GITIGNOREEOF

echo "  ✓ .gitignore"
echo ""

# ─── Verification ───
echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
echo "  Verification"
echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
echo ""
echo "▸ Folder structure:"
find . -type f -not -path './node_modules/*' | sort | sed 's|^\./|  |'
echo ""
echo "▸ Sizes:"
du -sh .claude docs docs/archive 2>/dev/null | sed 's/^/  /'
echo ""
echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
echo "  ✓ Local initialisation complete"
echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
echo ""
echo "  Workspace:  $HOME/clavon/Numaway/"
echo "  Live spec:  docs/master-urs.docx"
echo "  Archive:    docs/archive/  ($(ls docs/archive/*.docx 2>/dev/null | wc -l | tr -d ' ') predecessor documents)"
echo ""
echo "  Next: switch to the Claude desktop app to handle:"
echo "    • Notion 8-page creation + sync registration"
echo "    • git remote add + clone of clavonsolutions/numaway"
echo "    • Clavon scaffolding PR"
echo "    • First Claude Code session for Phase 1 cleanup"
echo ""
