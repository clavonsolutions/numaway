#!/usr/bin/env bash
# CI gate: js-disabled-content-check (MRS §15.3, ADR-010, F-09)
# Fails if a prerendered HTML page contains only <div id="root"></div> with no server-rendered content.
# Checks that substantive text content exists in the static HTML (not empty shell).

set -euo pipefail

DIST="dist"
FAILED=0
CHECKED=0

echo "▸ Running js-disabled-content-check gate..."

for html_file in "$DIST"/*.html "$DIST"/**/*.html; do
  [ -f "$html_file" ] || continue

  # Count text characters between tags (rough content check)
  content_length=$(grep -o '[A-Za-z]\{4,\}' "$html_file" 2>/dev/null | wc -w | tr -d ' ')

  if [ "$content_length" -lt 50 ]; then
    echo "  ✗ Thin or empty prerender: $html_file (word count: $content_length)"
    FAILED=1
  fi

  CHECKED=$((CHECKED + 1))
done

if [ $FAILED -eq 1 ]; then
  echo ""
  echo "✗ GATE FAILED: js-disabled-content-check — pages must contain substantive prerendered content."
  exit 1
fi

echo "✓ js-disabled-content-check gate passed ($CHECKED pages checked)."
