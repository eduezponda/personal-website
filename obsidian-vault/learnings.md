# Learnings

Patterns, gotchas, and discoveries worth remembering across sessions.

---

## 2026-06-02 — Turbopack stale cache

- A `ChunkLoadError` in the Next.js dev overlay with "(stale)" next to the version is always a corrupted Turbopack cache. It is not a code issue.
- Fix: `rm -rf .next && npm run dev`
- Do not read source files when this error appears. The "(stale)" label in the overlay is the diagnosis. Go straight to the fix.

---

## 2026-05-14 — Scaffold session

- Project scaffolded from scratch: CLAUDE.md, CONTEXT.md, TASKS.md, .githooks, obsidian-vault, .gitignore, .gitattributes, .env.example
- No personal-website.skill was found on this machine — spec was provided inline
- Git hooks must be activated manually after cloning: `git config core.hooksPath .githooks`

---
