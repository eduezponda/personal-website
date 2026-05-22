<!-- BEGIN:nextjs-agent-rules -->
# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` before writing any code. Heed deprecation notices.
<!-- END:nextjs-agent-rules -->

## Image convention

All images committed to `public/` **must be `.webp`**. This is enforced by the pre-commit hook in `.githooks/pre-commit`.

- Never commit `.png`, `.jpg`, `.jpeg`, `.gif`, or any other raster format under `public/`.
- When referencing an image in MDX or TSX, use the `.webp` extension in the path.
- Conversion: `cwebp input.png -o output.webp` (requires `brew install webp`).
