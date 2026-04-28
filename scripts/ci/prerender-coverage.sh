#!/usr/bin/env bash
# CI gate: prerender-coverage (MRS §15.3, ADR-010)
# Fails if dist/ is missing a .html file for any required public route.

set -euo pipefail

DIST="dist"
FAILED=0

required_routes=(
  "index.html"
  "about.html"
  "about/team.html"
  "about/why-numaway.html"
  "contact.html"
  "consultation.html"
  "services.html"
  "scholarships.html"
  "countries.html"
  "universities.html"
  "courses.html"
  "exams.html"
  "accommodation.html"
  "loans.html"
  "resources.html"
  "careers.html"
  "faq.html"
  "sage.html"
  "search.html"
  "for-students.html"
  "for-agents.html"
  "for-institutions.html"
  "privacy-policy.html"
  "terms.html"
  "cookies.html"
  "disclaimer.html"
  "complaints.html"
  "fraud-prevention.html"
  "sitemap.html"
)

echo "▸ Running prerender-coverage gate..."

for route in "${required_routes[@]}"; do
  if [ ! -f "$DIST/$route" ]; then
    echo "  ✗ Missing: $DIST/$route"
    FAILED=1
  fi
done

if [ $FAILED -eq 1 ]; then
  echo ""
  echo "✗ GATE FAILED: prerender-coverage — run 'npm run build' to regenerate dist/"
  exit 1
fi

echo "✓ prerender-coverage gate passed ($(find $DIST -name '*.html' | wc -l | tr -d ' ') HTML files present)."
