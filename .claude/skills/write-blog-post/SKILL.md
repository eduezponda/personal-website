---
name: write-blog-post
description: Write, draft, edit, shorten, or restructure blog posts for this site's /blog, including proposing an editorial plan for a multi-part series before drafting. Use this whenever the user asks to write a new blog post, add a post to content/blog/, draft an article, continue or plan out a blog series, or edit/simplify/shorten/re-date an existing .mdx post, even if they don't say "skill" or name this file. Also use it when asked to check a draft against this project's writing rules before shipping it.
---

# Write a Blog Post

This project's blog (`content/blog/*.mdx`, rendered by `lib/blog.ts` and `app/blog/[slug]/page.tsx`) has an established voice, a strict style rule, and a verification habit built up over several posts. Follow this workflow instead of drafting from a blank slate each time, so every post reads like it belongs next to the others.

## 1. Ground yourself before drafting

Read the most recently published post in `content/blog/` (sort by `date` in the front matter) and skim `CLAUDE.md`'s writing style rules. A new post should feel like a sibling of the last one, not a fresh voice. Do not start writing prose until you've done this, even for a "quick" post.

## 2. For a series or any open-ended ask, propose a plan first

If the request is broad ("write about X", "cover these five ideas", "start a series on Y") or spans more than one post, do not draft immediately. Come back with an editorial plan and get it validated first:

- State whether this should be one post or a series, and why (a single post that tries to cover a knowledge-graph's worth of distinct arguments reads as a reference manual, not an essay; splitting gives each thesis its own punch and its own comment thread).
- For each proposed post: a working title, the narrative angle, and which concepts/tools it covers, as a short table.
- Suggested front matter (slug, tags, rough length) per post.
- Ask which post to write first, rather than assuming.

Only start drafting MDX after the user confirms the plan (or explicitly says to skip planning and just write).

## 3. Draft in the established voice

- **Length**: this blog's posts have ranged from ~430 to ~1200 words in the body (excluding front matter), depending on how tightly the user asked you to scope it. Default to matching the length of the most recent sibling post. If the user says "shorter" or "straight to the point," cut hard rather than trimming a few adjectives — drop whole sections and lead with the conclusion, don't just compress sentences.
- **No em dashes or en dashes anywhere in the post** (`—`, `–`, or `" - "` as a clause connector). This is a project-wide rule from `CLAUDE.md`, not a per-post preference. Rewrite with a colon, a comma, a full stop, or a natural connector ("with", "since", "as") instead.
  - This rule targets rendered, user-visible text. In practice, a markdown pipe-table's `| --- |` separator row is a literal hyphen in the source even though it renders as a table border, not a dash. When a user asks you to strip all dashes from a post, fold any tables into prose too rather than arguing that the separator row doesn't "count" — that's the convention this project has followed.
- **No bullet points in the body prose** unless the user has explicitly signed off on a specific post using them. Convert lists into sentences using commas and "including"/"covering" instead. (Tables are a separate call: they've been used for structured data like a metrics threshold list, then later folded into prose in the same post when the user asked for a simpler, shorter rewrite. Default to prose; only reach for a table if the data is genuinely tabular and the user hasn't asked for a plainer read.)
- **Essay structure**: an opening hook (often a callback to the previous post in the series), 3-6 `##` sections with a clear throughline, and a closing section that states the author's personal thesis in 2-4 sentences. If this post is part of a series, open with a one-line callback to the previous post and close with a one-line tease of the next one.
- **Tag taxonomy**: reuse existing tags before inventing new ones, so the blog's tag filter (`/blog?tag=`) stays useful instead of fragmenting into one-off tags. Tags already in use: `AI`, `Software Engineering`, `Agent Engineering`, `CI/CD`, `Context Engineering`, `Obsidian`, `Testing`, `TDD`, `Career`, `RAG`, `LLMs`, `Retrieval`. Check `content/blog/*.mdx` front matter for the current full list before picking tags, since this list will grow.
- If the post leans on external stats or research claims, verify them (web search) before citing a number, and bold the figure in the sentence that states it — don't assert a stat from memory.

## 4. Front matter contract

Every post needs exactly these fields (see `lib/blog.ts`'s `PostMeta` type, which will fail to build if a field is missing or the file can't be parsed):

```yaml
---
title: "Post Title in Title Case"
date: "YYYY-MM-DD"
excerpt: "One to three sentences. Shows in the list view and in <meta description>. Follows the same no-dash rule as the body."
tags: ["Existing Tag", "Another Existing Tag"]
---
```

The filename (minus `.mdx`) becomes the slug and the URL at `/blog/<slug>`. Use kebab-case, descriptive, matching the title.

## 5. Verify before calling it done

Run the bundled check after drafting or editing any post:

```bash
.claude/skills/write-blog-post/scripts/check-style.sh content/blog/your-post.mdx
```

This reports the body word count (front matter excluded) and flags any em/en dashes, `" - "` connectors, or bullet-point lines. Fix anything it flags, then re-run it.

After the style check is clean, also run the same checks the rest of this repo's CLAUDE.md requires for any change: `npx tsc --noEmit` and `npm run build`. A production build failure here usually means a front matter field is missing, the date isn't a parseable string, or the MDX has a syntax error (e.g. an unescaped `<` or `{`) that `next-mdx-remote` chokes on. Confirm the new slug appears in the build's static route list before considering the post shipped.

## 6. Shipping

- Create a new branch off the latest `main` for each post (`git fetch origin main && git checkout -B <branch-name> origin/main`), even if a previous post's branch is still open. Don't stack a new post on top of an unrelated, possibly-already-merged branch: check `git log --oneline -3 origin/main` first if unsure whether the branch you're about to reuse is stale.
- Commit with a message that says what the post covers, not just "add blog post."
- Don't open a PR unless asked; say what branch you pushed to and what's left open (title/date/tag decisions) for the user to confirm.
- When the user asks for a targeted revision (shorten a section, remove a paragraph, change the date), make the smallest edit that satisfies the ask and verify by diffing against the prior version, so you can show exactly what changed rather than asserting it.
