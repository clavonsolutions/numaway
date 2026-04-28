#!/usr/bin/env bash
# CI gate: robots-allow-prod-only (MRS §15.3)
# On staging/preview builds, robots.txt must contain Disallow: /.
# On production builds (MODE=production), Disallow must NOT be / for all.

set -euo pipefail

ROBOTS="public/robots.txt"
BUILD_MODE="${MODE:-staging}"

echo "▸ Running robots-allow-prod-only gate (mode: $BUILD_MODE)..."

if [ ! -f "$ROBOTS" ]; then
  echo "  ✗ public/robots.txt not found"
  echo "✗ GATE FAILED: robots-allow-prod-only"
  exit 1
fi

if [ "$BUILD_MODE" = "production" ]; then
  # Production: must have Allow: / (or no blanket Disallow)
  if grep -q "Disallow: /$" "$ROBOTS" && ! grep -q "Allow: /" "$ROBOTS"; then
    echo "  ✗ Production robots.txt has Disallow: / with no Allow — crawlers blocked"
    echo "✗ GATE FAILED: robots-allow-prod-only"
    exit 1
  fi
  echo "✓ robots-allow-prod-only gate passed (production — crawlers allowed)."
else
  # Staging: must have Disallow: /
  if ! grep -q "Disallow: /" "$ROBOTS"; then
    echo "  ✗ Staging robots.txt is missing Disallow: / — crawler leak risk"
    echo "✗ GATE FAILED: robots-allow-prod-only"
    exit 1
  fi
  echo "✓ robots-allow-prod-only gate passed (staging — crawlers blocked)."
fi
