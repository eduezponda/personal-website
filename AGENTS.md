<!-- BEGIN:nextjs-agent-rules -->
# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` before writing any code. Heed deprecation notices.
<!-- END:nextjs-agent-rules -->

## Image convention

Choose the format based on the content type:

| Format | Best For | SEO & Performance Impact |
|--------|----------|--------------------------|
| **SVG** | Logos, icons, UI graphics, and simple illustrations | **Excellent (Best for Vectors):** Infinitely scalable, tiny file sizes, and can be embedded directly into HTML |
| **WebP** | Blog photos, background images, and screenshots | **Excellent (Best for Photos):** Striking balance between tiny file sizes and high visual quality |
| **PNG** | High-fidelity screenshots or legacy fallbacks | **Poor to Moderate:** Files are too large for standard web photos. Use only when pixel-perfect lossless text or transparency is mandatory |

The pre-commit hook in `.githooks/pre-commit` blocks `.png`, `.jpg`, `.jpeg`, `.gif`, and other raster formats under `public/` — only `.webp` and `.svg` are allowed.

- When referencing an image in MDX or TSX, always use the correct extension in the path.
- Conversion: `cwebp input.png -o output.webp` (requires `brew install webp`).
