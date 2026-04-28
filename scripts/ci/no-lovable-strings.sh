#!/usr/bin/env bash
# CI gate: no-lovable-strings (ADR-013)
# Fails if any lovable-tagger reference exists in source or config files.

set -euo pipefail

SEARCH_PATHS="src package.json vite.config.ts"
PATTERN="lovable-tagger"

echo "▸ Running no-lovable-strings gate..."

if grep -r --include="*.ts" --include="*.tsx" --include="*.js" --include="*.json" \
    "$PATTERN" $SEARCH_PATHS 2>/dev/null; then
  echo ""
  echo "✗ GATE FAILED: lovable-tagger reference found. Remove before merging (ADR-013)."
  exit 1
fi

echo "✓ no-lovable-strings gate passed."
