#!/usr/bin/env bash
set -euo pipefail

# Claude Code PreToolUse hook — fires before every Bash tool call.
# Reads the tool input JSON from stdin and only acts on git push commands.
INPUT=$(cat)
COMMAND=$(echo "$INPUT" | python3 -c "
import json, sys
try:
    d = json.load(sys.stdin)
    print(d.get('tool_input', {}).get('command', ''))
except:
    sys.exit(0)
" 2>/dev/null || true)

if ! echo "$COMMAND" | grep -qE "git push"; then
  exit 0
fi

PROJECT_ROOT="$(git rev-parse --show-toplevel 2>/dev/null)" || exit 0
cd "$PROJECT_ROOT"

bash scripts/save-session.sh

if ! git diff --quiet -- "obsidian-vault/sessions/"; then
  git add "obsidian-vault/sessions/"
  git commit -m "chore: update session $(date +%Y-%m-%d)"
fi
