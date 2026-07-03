#!/usr/bin/env bash
# Check a blog post MDX file against this project's writing rules.
#
# Usage: .claude/skills/write-blog-post/scripts/check-style.sh content/blog/my-post.mdx
#
# Reports the body word count (front matter excluded, for comparing length
# against sibling posts) and flags anything the CLAUDE.md dash/bullet rules
# forbid: em dashes, en dashes, " - " as a clause connector, and bullet
# points in the prose.

set -euo pipefail

if [ $# -ne 1 ]; then
  echo "Usage: $0 <path-to-post.mdx>" >&2
  exit 1
fi

file="$1"

if [ ! -f "$file" ]; then
  echo "File not found: $file" >&2
  exit 1
fi

echo "== Body word count (front matter excluded) =="
awk 'BEGIN{fm=0} /^---$/{fm++; next} fm>=2{print}' "$file" | wc -w

echo
echo "== Em dashes / en dashes (—, –) =="
grep -n '[—–]' "$file" && echo "^ FOUND: rewrite with a colon, comma, full stop, or connector." || echo "none found"

echo
echo "== ' - ' used as a clause connector =="
grep -n ' - ' "$file" && echo "^ FOUND: rewrite without the dash." || echo "none found"

echo
echo "== Bullet point lines (-, * at line start) =="
grep -nE '^[[:space:]]*[-*][[:space:]]' "$file" && echo "^ FOUND: convert to prose unless the user explicitly asked for a list." || echo "none found"

echo
echo "== Markdown tables (pipe syntax) =="
grep -nE '^\|' "$file" && echo "^ FOUND: fine on its own, but fold into prose if the user asked to remove all dashes (table separator rows use hyphens)." || echo "none found"
