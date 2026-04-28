#!/usr/bin/env bash
# CI gate: image-floor-check (MRS §15.3, ADR-004)
# Every public commercial/content page must have ≥3 substantive <img> tags.
# Legal, functional, and error pages are exempt — they are text-driven by design.

set -euo pipefail

DIST="dist"
FAILED=0
CHECKED=0

echo "▸ Running image-floor-check gate..."

for html_file in "$DIST"/*.html "$DIST"/**/*.html; do
  [ -f "$html_file" ] || continue

  rel="${html_file#$DIST/}"
  basename=$(basename "$html_file" .html)

  # Error / utility pages
  case "$basename" in
    404|500|403|401|maintenance|offline|sitemap|credits) continue ;;
  esac

  # Legal pages — text-driven compliance documents, no decorative images needed
  case "$basename" in
    privacy-policy|terms|cookies|disclaimer|complaints|\
    fraud-prevention|refunds|acceptable-use|accessibility) continue ;;
  esac
  case "$rel" in
    legal/*) continue ;;
  esac

  # Functional / interactive pages — conversion interfaces, not content pages
  case "$basename" in
    contact|consultation|search|careers|sage) continue ;;
  esac
  case "$rel" in
    universities/compare*) continue ;;
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
  echo "✗ GATE FAILED: image-floor-check — every commercial/content page needs ≥3 substantive images."
  exit 1
fi

echo "✓ image-floor-check gate passed ($CHECKED pages checked)."
