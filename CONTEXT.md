# CONTEXT.md

## Current state

**Session 1 complete. All pages built and production build passes.**

All routes are implemented and statically prerendered:
- `/` — Landing hero with CTA buttons
- `/about` — Full CV (timeline, skills, certifications, links)
- `/projects` — Project cards grid
- `/projects/zrive` — 6 Zrive module cards
- `/projects/komorebi` — Churn project page (asset placeholders)
- `/projects/ezponda-capital` — Coming soon placeholder
- `/blog` — Post list (empty state shown, ready for MDX posts)
- `/blog/[slug]` — MDX renderer with prose styles

Next: deploy to Vercel, then add real assets (Komorebi PDF, GitHub links, notebook screenshots).

## Architecture map

```
Stack:    Next.js 15 · React 19 · TypeScript · Tailwind CSS
Deploy:   Vercel (project to be created)
Content:  MDX files in content/blog/ (no posts yet)
Data:     lib/projects.ts · lib/cv.ts · lib/blog.ts (static, typed)
```

### Routes
| Route                          | Status    | Notes                                |
|-------------------------------|-----------|--------------------------------------|
| `/`                           | pending   | Hero + CTA to /projects and /blog    |
| `/about`                      | pending   | Timeline, skills, certs, links       |
| `/projects`                   | pending   | Project cards grid                   |
| `/projects/zrive`             | pending   | 6-module grid                        |
| `/projects/komorebi`          | pending   | Key metrics, PDF link, GitHub        |
| `/projects/ezponda-capital`   | pending   | Placeholder — asset TBD              |
| `/blog`                       | pending   | Post list                            |
| `/blog/[slug]`                | pending   | MDX renderer                         |

## Next steps (session 1)

1. Initialize the Next.js 15 app: `npx create-next-app@latest . --ts --tailwind --eslint --app --src-dir=no --import-alias="@/*"`
2. Clean the boilerplate — remove placeholder content, install lucide-react
3. Apply design tokens to `app/globals.css`
4. Build root layout (`app/layout.tsx`) — Inter font, dark background, Nav placeholder
5. Build the Nav component
6. Build the Landing page (`/`)

## Open decisions

- MDX library: `@next/mdx` (simpler) vs `next-mdx-remote` (dynamic, supports front matter) — decide at MDX task
- Custom domain: TBD
- Ezponda Capital visual asset: TBD — ask Eduardo before building that page
- Blog first post topic: TBD (candidates: Zrive Module 1 deep-dive, value investing framework)
