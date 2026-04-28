#!/usr/bin/env bash
# CI gate: legal-config-required-keys (MRS §15.3, §13.3)
# Fails if content/legal.config.json is missing any required key.

set -euo pipefail

CONFIG="content/legal.config.json"
FAILED=0

required_keys=(
  "canonical_business_name"
  "canonical_company_number"
  "canonical_postal_address"
  "canonical_email"
  "canonical_phone"
  "canonical_whatsapp"
  "canonical_whatsapp_number_only"
  "dpo_name"
  "dpo_email"
  "jurisdiction"
  "governing_law"
  "ndpa_registration_number"
  "effective_date"
  "last_reviewed_date"
  "next_review_due_date"
  "complaint_resolution_timeline_days"
  "refund_cooling_off_days"
  "domain"
  "canonical_url"
)

echo "▸ Running legal-config-required-keys gate..."

if [ ! -f "$CONFIG" ]; then
  echo "  ✗ $CONFIG not found"
  echo "✗ GATE FAILED: legal-config-required-keys"
  exit 1
fi

for key in "${required_keys[@]}"; do
  if ! grep -q "\"$key\"" "$CONFIG"; then
    echo "  ✗ Missing key: $key"
    FAILED=1
  fi
done

if [ $FAILED -eq 1 ]; then
  echo ""
  echo "✗ GATE FAILED: legal-config-required-keys — populate all required keys in $CONFIG."
  exit 1
fi

echo "✓ legal-config-required-keys gate passed (${#required_keys[@]} keys verified)."
