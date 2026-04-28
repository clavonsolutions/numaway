#!/usr/bin/env bash
# CI gate: image-floor-check (MRS §15.3, ADR-004)
# Fails if any prerendered public HTML page has fewer than 3 substantive <img> tags.

set -euo pipefail

DIST="dist"
FAILED=0
CHECKED=0

echo "▸ Running image-floor-check gate..."

for html_file in "$DIST"/*.html "$DIST"/**/*.html; do
  [ -f "$html_file" ] || continue

  # Skip error pages and utility pages
  basename=$(basename "$html_file" .html)
  case "$basename" in
    404|500|403|401|maintenance|offline|sitemap) continue ;;
  esac

  img_count=$(grep -oi '<img[^>]*src=' "$html_file" 2>/dev/null | wc -l | tr -d ' ')

  if [ "$img_count" -lt 3 ]; then
    echo "  ✗ Image floor not met: $html_file ($img_count image(s), need ≥3)"
    FAILED=1
  fi

  CHECKED=$((CHECKED + 1))
done

if [ $FAILED -eq 1 ]; then
  echo ""
  echo "✗ GATE FAILED: image-floor-check — every public page needs ≥3 substantive images."
  exit 1
fi

echo "✓ image-floor-check gate passed ($CHECKED pages checked)."
