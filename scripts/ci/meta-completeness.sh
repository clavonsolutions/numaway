#!/usr/bin/env bash
# CI gate: meta-completeness (MRS §15.3)
# Every prerendered public HTML page must have: <title>, meta description,
# rel=canonical, og:title, og:description, og:image, and at least one JSON-LD script.

set -euo pipefail

DIST="dist"
FAILED=0
CHECKED=0

echo "▸ Running meta-completeness gate..."

check_meta() {
  local file="$1"
  local missing=""

  grep -qi '<title>' "$file"                              || missing="$missing title"
  grep -qi 'name="description"'  "$file"                 || missing="$missing meta-description"
  grep -qi 'rel="canonical"'     "$file"                 || missing="$missing canonical"
  grep -qi 'property="og:title"' "$file"                 || missing="$missing og:title"
  grep -qi 'property="og:description"' "$file"           || missing="$missing og:description"
  grep -qi 'property="og:image"' "$file"                 || missing="$missing og:image"
  grep -qi 'application/ld+json' "$file"                 || missing="$missing json-ld"

  echo "$missing"
}

for html_file in "$DIST"/*.html "$DIST"/**/*.html; do
  [ -f "$html_file" ] || continue

  missing=$(check_meta "$html_file")

  if [ -n "$missing" ]; then
    echo "  ✗ Missing meta in $html_file:$missing"
    FAILED=1
  fi

  CHECKED=$((CHECKED + 1))
done

if [ $FAILED -eq 1 ]; then
  echo ""
  echo "✗ GATE FAILED: meta-completeness — all public pages need full SEO meta."
  exit 1
fi

echo "✓ meta-completeness gate passed ($CHECKED pages checked)."
