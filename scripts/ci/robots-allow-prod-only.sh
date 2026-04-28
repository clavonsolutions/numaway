#!/usr/bin/env bash
# CI gate: robots-allow-prod-only (MRS §15.3)
# Production: public/robots.txt must NOT blanket-block crawlers.
# Staging/feature: public/robots.staging.txt must exist and contain Disallow: /.

set -euo pipefail

BUILD_MODE="${MODE:-staging}"

echo "▸ Running robots-allow-prod-only gate (mode: $BUILD_MODE)..."

if [ "$BUILD_MODE" = "production" ]; then
  ROBOTS="public/robots.txt"
  if [ ! -f "$ROBOTS" ]; then
    echo "  ✗ public/robots.txt not found"
    echo "✗ GATE FAILED: robots-allow-prod-only"
    exit 1
  fi
  if grep -q "Disallow: /$" "$ROBOTS" && ! grep -q "Allow: /" "$ROBOTS"; then
    echo "  ✗ Production robots.txt has Disallow: / with no Allow — crawlers blocked"
    echo "✗ GATE FAILED: robots-allow-prod-only"
    exit 1
  fi
  echo "✓ robots-allow-prod-only gate passed (production — crawlers allowed)."
else
  # Staging/feature branches: validate the staging robots file exists and blocks crawlers.
  # The live robots.txt is the production version (allows crawlers). The staging version
  # lives separately at robots.staging.txt and is deployed to non-production environments.
  STAGING_ROBOTS="public/robots.staging.txt"
  if [ ! -f "$STAGING_ROBOTS" ]; then
    echo "  ✗ public/robots.staging.txt not found — staging crawler block file is missing"
    echo "✗ GATE FAILED: robots-allow-prod-only"
    exit 1
  fi
  if ! grep -q "Disallow: /" "$STAGING_ROBOTS"; then
    echo "  ✗ public/robots.staging.txt is missing Disallow: / — crawler leak risk on staging"
    echo "✗ GATE FAILED: robots-allow-prod-only"
    exit 1
  fi
  echo "✓ robots-allow-prod-only gate passed (staging — robots.staging.txt blocks crawlers)."
fi
