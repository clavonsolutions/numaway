#!/usr/bin/env bash
# CI gate: sitemap-coverage (MRS §15.3)
# Every required public route must appear in at least one public/sitemap*.xml file.

set -euo pipefail

SITEMAP_ROOT="public/sitemap.xml"
FAILED=0

echo "▸ Running sitemap-coverage gate..."

if [ ! -f "$SITEMAP_ROOT" ]; then
  echo "  ✗ sitemap.xml not found at $SITEMAP_ROOT"
  echo ""
  echo "✗ GATE FAILED: sitemap-coverage — sitemap.xml is missing."
  exit 1
fi

# Combine all sitemap XML files for checking
ALL_SITEMAP_CONTENT=$(cat public/sitemap*.xml 2>/dev/null || cat "$SITEMAP_ROOT")

required_paths=(
  "/about"
  "/about/team"
  "/about/why-numaway"
  "/contact"
  "/consultation"
  "/services"
  "/services/student-profiling"
  "/services/program-selection"
  "/services/application-support"
  "/services/exam-support"
  "/services/visa-preparation"
  "/services/pre-departure"
  "/services/post-arrival"
  "/scholarships"
  "/countries"
  "/universities"
  "/courses"
  "/exams"
  "/accommodation"
  "/loans"
  "/resources"
  "/careers"
  "/faq"
  "/sage"
  "/search"
  "/for-students"
  "/for-agents"
  "/for-institutions"
  "/privacy-policy"
  "/terms"
  "/cookies"
  "/disclaimer"
  "/complaints"
  "/fraud-prevention"
  "/refunds"
  "/acceptable-use"
  "/accessibility"
  "/legal/dpa"
  "/sitemap"
  "/credits"
)

for path in "${required_paths[@]}"; do
  if ! echo "$ALL_SITEMAP_CONTENT" | grep -q "$path"; then
    echo "  ✗ Missing from sitemap: $path"
    FAILED=1
  fi
done

if [ $FAILED -eq 1 ]; then
  echo ""
  echo "✗ GATE FAILED: sitemap-coverage — all public routes must be in sitemap.xml."
  exit 1
fi

echo "✓ sitemap-coverage gate passed (${#required_paths[@]} required paths verified)."
