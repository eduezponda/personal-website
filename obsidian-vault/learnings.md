# Learnings

Patterns, gotchas, and discoveries worth remembering across sessions.

---

## 2026-07-03 — CSS percentage padding + child width on the same element don't compose

- Building a centered carousel (`features/RelatedPostsCarousel.tsx`): tried `w-1/2` on the items and `px-[25%]` on their scrolling flex parent, expecting each item to be 50% of the parent's full width with 25% empty space on each side (so neighboring cards would peek in at exactly half-width).
- Result was wrong: items rendered at ~25% of the frame width instead of 50%, roughly half of what was expected.
- Root cause: percentages resolve against each element's own containing block, and that reference differs between the two properties on the same element:
  - `padding: 25%` on the parent resolves against the parent's own containing block (its parent's width) — full frame width.
  - `width: 50%` on a child resolves against *that parent's content box*, which is already reduced by the parent's own padding. So `50%` was 50% of `(frame - 2×25%)`, not 50% of `frame`.
- This is correct CSS spec behavior, not a Tailwind bug, but it makes percentage-based width + padding on the same scrolling element unreliable whenever the two need to relate to the *same* outer reference (e.g. "item is exactly half of the visible frame, padding reveals the other half of each neighbor").
- Fix: measure the real frame width in JS (`ResizeObserver` on a non-padded wrapper) and set item width and padding as computed pixel values (`item = frame/2 - gap`, `padding = (frame - item)/2`), applied via inline `style`, not Tailwind percentage classes. This keeps both values referencing the same real number and stays correct at any viewport size.
- Diagnosis shortcut for next time: if a percentage-based width and a percentage-based padding on the *same* element (or parent/child pair) don't visually match the hand-computed expectation, check whether they're being computed against different containing blocks before assuming a class name typo or a Tailwind config issue.

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
