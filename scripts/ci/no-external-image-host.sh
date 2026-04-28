#!/usr/bin/env bash
# CI gate: no-external-image-host (MRS §15.3, ADR-005)
# Fails if any src/ component or page file references an <img> pointing to an external host.
# Allowed: relative paths, /public, and approved CDN domain numaway.com

set -euo pipefail

FAILED=0
CHECKED=0

echo "▸ Running no-external-image-host gate..."

# Find src img references pointing to external URLs
while IFS= read -r -d '' file; do
  # Match src= or src={ with http/https URLs that are not numaway.com
  matches=$(grep -n 'src=.*https\?://' "$file" 2>/dev/null | grep -v 'numaway\.com' || true)
  if [ -n "$matches" ]; then
    echo "  ✗ External image host found in: $file"
    echo "$matches" | head -5 | sed 's/^/      /'
    FAILED=1
  fi
  CHECKED=$((CHECKED + 1))
done < <(find src -name '*.tsx' -o -name '*.ts' -print0 2>/dev/null)

if [ $FAILED -eq 1 ]; then
  echo ""
  echo "✗ GATE FAILED: no-external-image-host — all images must be self-hosted or use numaway.com."
  exit 1
fi

echo "✓ no-external-image-host gate passed ($CHECKED files checked)."
