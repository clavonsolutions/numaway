#!/usr/bin/env bash
# CI gate: lighthouse-budget (MRS §15.3)
# Runs Lighthouse CI against the built site.
# Requires: npm install -g @lhci/cli
# Thresholds: perf ≥85, a11y ≥95, SEO 100 mobile

set -euo pipefail

echo "▸ Running lighthouse-budget gate..."

if ! command -v lhci &>/dev/null; then
  echo "  ⚠ lhci not installed. Skipping Lighthouse gate (install with: npm install -g @lhci/cli)"
  exit 0
fi

lhci autorun \
  --upload.target=temporary-public-storage \
  --assert.preset=lighthouse:recommended \
  --assert.assertions.categories:performance=["error",{"minScore":0.85}] \
  --assert.assertions.categories:accessibility=["error",{"minScore":0.95}] \
  --assert.assertions.categories:seo=["error",{"minScore":1.0}] \
  --collect.url="http://localhost:4173/" \
  --collect.url="http://localhost:4173/services" \
  --collect.url="http://localhost:4173/countries" 2>&1

echo "✓ lighthouse-budget gate passed."
