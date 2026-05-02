#!/usr/bin/env bash
# CI gate: sitemap-coverage (MRS §15.3)
# Every required public route must appear in at least one sitemap*.xml file.
#
# Sitemaps are build artefacts — they are not committed to the repository.
# This gate must run AFTER the build job so the dist/ artefact is available.
# The gate looks in dist/ first (CI context), then falls back to public/ for
# local runs where the developer has already run `npm run build`.

set -euo pipefail

FAILED=0

echo "▸ Running sitemap-coverage gate..."

# Determine the sitemap directory: prefer dist/ (CI artefact), fall back to public/.
if [ -f "dist/sitemap.xml" ]; then
  SITEMAP_DIR="dist"
elif [ -f "public/sitemap.xml" ]; then
  SITEMAP_DIR="public"
else
  echo "  ✗ sitemap.xml not found in dist/ or public/"
  echo ""
  echo "✗ GATE FAILED: sitemap-coverage — sitemap.xml is missing. Run npm run build first."
  exit 1
fi

SITEMAP_ROOT="${SITEMAP_DIR}/sitemap.xml"

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
  if ! grep -qF "$path" "${SITEMAP_DIR}"/sitemap*.xml; then
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
