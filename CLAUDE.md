# CLAUDE.md — personal-website

## Identity

Eduardo Ezponda's personal website. Professional portfolio for an AI Engineer and value investor.
Deployed to Vercel at [domain TBD].

- GitHub: eduezponda
- Email: eduezponda@gmail.com
- Repo: eduezponda/personal-website

## Session rituals

1. Read CONTEXT.md — understand current state and next steps.
2. Read TASKS.md — pick up the highest-priority pending task.
3. After completing a task, mark it done in TASKS.md and update CONTEXT.md.

## Project structure

```
personal-website/
├── app/                        # Next.js App Router pages
│   ├── layout.tsx              # Root layout — Inter font, nav, dark background
│   ├── page.tsx                # / — Landing / Hero
│   ├── about/page.tsx          # /about — Full CV
│   ├── projects/
│   │   ├── page.tsx            # /projects — Project grid
│   │   ├── zrive/page.tsx      # /projects/zrive
│   │   ├── komorebi/page.tsx   # /projects/komorebi
│   │   └── ezponda-capital/page.tsx
│   └── blog/
│       ├── page.tsx            # /blog — Post list
│       └── [slug]/page.tsx     # /blog/[slug] — MDX post
├── components/                 # Generic UI primitives (Button, Card, Badge, etc.)
├── features/                   # Domain-specific components (ProjectCard, TimelineItem, BlogPostCard, ModuleCard)
├── lib/                        # Data layer + infra (blog.ts for MDX, projects data, cv data)
├── content/
│   └── blog/                   # .mdx files
├── public/                     # Static assets
├── obsidian-vault/             # Session notes, decisions, learnings
└── .githooks/                  # pre-commit and pre-push
```

## Design system

Dark mode. Linear/Vercel aesthetic. Teal accent. Inter font.

```css
--surface:                #131313;
--surface-container-low:  #1c1b1b;
--surface-container:      #201f1f;
--surface-container-high: #2a2a2a;
--on-surface:             #e5e2e1;
--on-surface-variant:     #c6c6c6;
--outline:                #919191;
--outline-variant:        #474747;
--accent:                 #2dd4bf;   /* teal-400 */
--accent-muted:           #0d9488;   /* teal-600 */
```

Typography scale:
- Hero display: 5rem / 800 weight
- Section titles: 2.5rem / 700 weight
- Body: 1.125rem / 400 weight
- Labels: 0.6875rem / 500 weight, uppercase, tracked

Icon system:
- Material Symbols Outlined — decorative / informational icons
- lucide-react — interactive / UI icons (Nav, buttons)

## Architecture constraints

- `"use client"` only for: forms, filters, navbar state (burger menu / scroll state)
- No Zustand — RSC for server state, URL searchParams for UI state
- No client-side data fetching for static content — use RSC + `generateStaticParams`
- MDX via `next-mdx-remote` or `@next/mdx` (decide at MDX setup task)
- Folder split: `components/` (generic UI) · `features/` (domain logic) · `lib/` (data + infra)

## Reference material

- Design inspiration: linear.app, vercel.com
- Project data lives in `lib/projects.ts` (typed objects, not CMS)
- CV / timeline data lives in `lib/cv.ts`
- Blog post discovery: `lib/blog.ts` reads `content/blog/*.mdx`

## Git hooks

Configured in `.githooks/`. Activate with:
```bash
git config core.hooksPath .githooks
```

- **pre-commit** (all branches): `tsc --noEmit`
- **pre-push** (main only): `npm run build`
