# Learnings

Patterns, gotchas, and discoveries worth remembering across sessions.

---

## 2026-07-03 — `scrollTo({ behavior: "auto" })` silently obeys CSS `scroll-behavior: smooth`

- Made the centered carousel (`features/RelatedPostsCarousel.tsx`) loop infinitely: clone the last post before the first and the first post after the last, so navigating past either edge lands on a real-looking neighbor, then silently teleport from the clone to the matching real post once the scroll settles, so the loop has no visible seam.
- The teleport used `el.scrollTo({ left: ..., behavior: "auto" })`, expecting an instant jump. Instead it animated smoothly across every card in between, briefly showing the wrong post mid-transition (a test polling the centered title 700ms after a click caught it mid-animation and reported a post that was never meant to be reachable in one click).
- Root cause: per the scroll spec, `behavior: "auto"` does not mean "no animation." It means "defer to the element's CSS `scroll-behavior` property," and this carousel's scroll container has Tailwind's `scroll-smooth` class (`scroll-behavior: smooth`) for the deliberate, user-visible slide when clicking the prev/next arrows. So the "silent" correction inherited that smoothing too.
- Fix: use `behavior: "instant"` for every programmatic scroll that must not animate (the initial center-on-mount, and the clone-to-real teleport), and keep `behavior: "smooth"` only for the button-driven `scrollBy` that the user is meant to see moving.
- Diagnosis shortcut for next time: if a `scrollTo`/`scrollIntoView` call that should be instant appears to animate anyway, check for a `scroll-behavior: smooth` (or Tailwind's `scroll-smooth`) on that element or an ancestor before assuming the jump logic itself is wrong. `"auto"` is not an escape hatch from it, only `"instant"` is.
- Related, separate bug caught in the same feature: a boundary-detection formula computed `index = Math.round((scrollLeft - padding) / step)`, copying the `padding` term from the earlier (non-looping) percentage-math gotcha above without re-deriving it. Once items are indexed as `scrollLeft = index * step` (which is what centers index 0 at `scrollLeft = 0` by construction, per that same earlier entry), the correct formula has no `padding` term at all. Carrying an offset from a previous fix into a new formula without re-deriving it from scratch produced a wrong-but-plausible-looking bug that only showed up as an incorrect post title after navigation, not as an error.
- Bonus pattern from the same pass: equalizing card heights in that same carousel (differing title lengths made cards different heights, pushing "Read post" to a different vertical spot on each card) just needed `h-full` on the card's root element (`features/RelatedPostCard.tsx`'s `<Link>`), nothing on the flex row itself. `align-items: stretch` is the flex row's default, so sibling items already stretch to the tallest one's height; the missing piece was the *inner* element filling that stretched height, which `height: 100%` can resolve against a flex-item's stretched cross size even though that size was never set as an explicit CSS `height` (flexbox spec treats a stretched cross size as definite for this purpose, unlike ordinary block layout). Combined with the card's existing `justify-between`, the extra height turns into visible breathing room between the title and the bottom-pinned link automatically.

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
