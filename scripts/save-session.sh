#!/usr/bin/env bash
set -euo pipefail

PROJECT_ROOT="$(git rev-parse --show-toplevel 2>/dev/null)" || exit 1
cd "$PROJECT_ROOT"

TODAY=$(date +%Y-%m-%d)
NOW=$(date +"%H:%M")
SESSION_FILE="obsidian-vault/sessions/${TODAY}.md"

# Preserve any manual notes written between auto-updates
NOTES="<!-- Add session notes here -->"
if [ -f "$SESSION_FILE" ]; then
  extracted=$(awk '/^## Notes/{found=1; next} found && /^_Last updated/{found=0} found{print}' "$SESSION_FILE")
  [ -n "$extracted" ] && NOTES="$extracted"
fi

# Today's git commits
GIT_LOG=$(git log --oneline --since="${TODAY} 00:00:00" --format="- %s" 2>/dev/null || true)
[ -z "$GIT_LOG" ] && GIT_LOG="_No commits yet today_"

# Tasks: completed with today's date
DONE_TODAY=$(grep -E "^\- \[x\].*${TODAY}" TASKS.md 2>/dev/null || true)
[ -z "$DONE_TODAY" ] && DONE_TODAY="_None_"

# Tasks: still pending
PENDING=$(grep '^\- \[ \]' TASKS.md 2>/dev/null || true)
[ -z "$PENDING" ] && PENDING="_No pending tasks_"

cat > "$SESSION_FILE" <<EOF
# Session ${TODAY}

## Completed today

${DONE_TODAY}

## Git activity

${GIT_LOG}

## Pending tasks

${PENDING}

## Notes

${NOTES}

_Last updated: ${NOW}_
EOF

echo "Session saved → $SESSION_FILE"
