#!/usr/bin/env bash
# CI gate: link-check (MRS §15.3)
# Checks all internal href links in built HTML resolve to existing HTML files.

set -euo pipefail

DIST="dist"
FAILED=0
CHECKED=0

echo "▸ Running link-check gate..."

# Extract all href links from built HTML and check they exist
while IFS= read -r -d '' html_file; do
  # Extract internal hrefs (starting with /)
  hrefs=$(grep -oi 'href="/[^"#?]*"' "$html_file" 2>/dev/null | sed 's/href="//;s/"//' | sort -u || true)

  while IFS= read -r href; do
    [ -z "$href" ] && continue

    # Normalise: /foo → dist/foo.html or dist/foo/index.html
    target_file="${DIST}${href%.html}.html"
    target_index="${DIST}${href%/}/index.html"

    if [ ! -f "$target_file" ] && [ ! -f "$target_index" ]; then
      echo "  ✗ Dead internal link '$href' in $html_file"
      FAILED=1
    fi

    CHECKED=$((CHECKED + 1))
  done <<< "$hrefs"
done < <(find "$DIST" -name '*.html' -print0)

if [ $FAILED -eq 1 ]; then
  echo ""
  echo "✗ GATE FAILED: link-check — all internal links must resolve to built HTML files."
  exit 1
fi

echo "✓ link-check gate passed ($CHECKED links checked)."
