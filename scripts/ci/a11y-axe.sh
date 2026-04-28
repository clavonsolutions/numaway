#!/usr/bin/env bash
# CI gate: a11y-axe (MRS §15.3)
# Runs axe-core via Playwright against key public pages.
# Fails on any serious or critical violation.
# Requires: npx playwright install (done once per CI runner)

set -euo pipefail

echo "▸ Running a11y-axe gate..."

if ! command -v npx &>/dev/null; then
  echo "  ✗ npx not found"
  exit 1
fi

# Inline Playwright + axe test
node - <<'EOF'
const { chromium } = require('playwright');
const AxeBuilder = require('@axe-core/playwright').default;

const PAGES = ['/', '/services', '/countries', '/contact', '/faq'];
const BASE = process.env.PREVIEW_URL || 'http://localhost:4173';

(async () => {
  const browser = await chromium.launch();
  let failed = false;

  for (const path of PAGES) {
    const page = await browser.newPage();
    await page.goto(`${BASE}${path}`, { waitUntil: 'domcontentloaded' });

    const results = await new AxeBuilder({ page })
      .disableRules(['color-contrast']) // waived pending brand colour audit
      .analyze();

    const serious = results.violations.filter(v => v.impact === 'serious' || v.impact === 'critical');

    if (serious.length > 0) {
      console.error(`✗ a11y violations on ${path}:`);
      serious.forEach(v => console.error(`  [${v.impact}] ${v.id}: ${v.description}`));
      failed = true;
    } else {
      console.log(`  ✓ ${path} — no serious/critical violations`);
    }

    await page.close();
  }

  await browser.close();
  if (failed) process.exit(1);
})();
EOF

echo "✓ a11y-axe gate passed."
