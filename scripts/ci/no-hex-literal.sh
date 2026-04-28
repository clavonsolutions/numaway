#!/usr/bin/env bash
# CI gate: no-hex-literal (MRS §15.3)
# Fails if any hex colour literal (#RRGGBB or #RGB) appears in src/components/ or src/pages/.

set -euo pipefail

FAILED=0
CHECKED=0

echo "▸ Running no-hex-literal gate..."

for dir in "src/components" "src/pages"; do
  [ -d "$dir" ] || continue
  while IFS= read -r -d '' file; do
    # Match 3 or 6 digit hex colour literals in JSX strings/className
    # Exclude comments and known-safe patterns (e.g. schema.org JSON-LD strings)
    matches=$(grep -n '"#[0-9A-Fa-f]\{3\}\|#[0-9A-Fa-f]\{6\}' "$file" 2>/dev/null | grep -v '//' | grep -v '^\s*/\*' || true)
    if [ -n "$matches" ]; then
      echo "  ✗ Hex literal found in: $file"
      echo "$matches" | head -5 | sed 's/^/      /'
      FAILED=1
    fi
    CHECKED=$((CHECKED + 1))
  done < <(find "$dir" -name '*.tsx' -print0 2>/dev/null)
done

if [ $FAILED -eq 1 ]; then
  echo ""
  echo "✗ GATE FAILED: no-hex-literal — use Tailwind tokens or CSS variables, never hex literals."
  exit 1
fi

echo "✓ no-hex-literal gate passed ($CHECKED files checked)."
