#!/usr/bin/env bash
# CI gate: nap-consistency (MRS §15.3)
# Fails if any TSX/TS file in src/ contains a hardcoded NAP value
# (email, phone, WhatsApp number, or address) instead of importing from nap.ts.
# Exception: the nap.ts source file itself and legal.config.json are allowed.

set -euo pipefail

FAILED=0
CHECKED=0

# Load canonical values from legal.config.json
EMAIL=$(node -e "const c=require('./content/legal.config.json'); console.log(c.canonical_email)" 2>/dev/null || echo "connect@numaway.com")
PHONE_RAW=$(node -e "const c=require('./content/legal.config.json'); console.log(c.canonical_phone)" 2>/dev/null || echo "9065050363")

echo "▸ Running nap-consistency gate..."
echo "  Checking for hardcoded: $EMAIL, $PHONE_RAW"

while IFS= read -r -d '' file; do
  # Skip the nap.ts source itself
  [[ "$file" == *"nap.ts"* ]] && continue

  violations=""

  grep -qn "$EMAIL" "$file" 2>/dev/null     && violations="$violations email($EMAIL)"
  grep -qn "9065050363" "$file" 2>/dev/null && violations="$violations phone(9065050363)"
  grep -qn "Mai Kwano" "$file" 2>/dev/null  && violations="$violations address(Mai Kwano)"

  if [ -n "$violations" ]; then
    echo "  ✗ Hardcoded NAP in $file:$violations"
    FAILED=1
  fi

  CHECKED=$((CHECKED + 1))
done < <(find src -name '*.tsx' -o -name '*.ts' -print0 2>/dev/null)

if [ $FAILED -eq 1 ]; then
  echo ""
  echo "✗ GATE FAILED: nap-consistency — import NAP values from @/lib/nap, never hardcode."
  exit 1
fi

echo "✓ nap-consistency gate passed ($CHECKED files checked)."
