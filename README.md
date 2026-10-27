# CRACKWITS — portfolio website

Production front end for crackwits.com, rebuilt from the reference site
(crackwits-showreel.crackwits.chatgpt.site) with a case study for every brand.

- **Stack:** Next.js 15 (App Router) · React 19 · TypeScript · static export (`out/`)
- **Design system:** the original stylesheet, kept verbatim in `src/app/site.css`
  (URW Geometric, ink `#232122` / paper `#f7f7f5`, original reveal animations).
  Case-study additions live in `src/app/case-study.css`.

## Run locally

Requires Node.js 18.18 or newer (20 recommended, see `.nvmrc`).

```bash
npm install
npm run dev        # http://localhost:3000
npm run build      # static site in out/
npm start          # serve out/ locally
```

No environment variables are required. Optional settings are listed in
`.env.example` (copy it to `.env.local`).

`predev` / `prebuild` regenerate `src/content/case-studies/index.ts`, so new case
studies are picked up automatically.

## Structure

```
src/app/                  routes (home, work, work/[slug], services, about, insights,
                          creative-output, briefus, legal pages, 404)
src/components/           SiteHeader (+ menu overlay), SiteFooter, HeaderThemeSync
src/components/pages/     page bodies ported from the reference build
src/components/case-study CaseStudyPage + code-built media (BrandBoard, browser /
                          phone / poster mockups)
src/content/brands.ts     the /work grid: order, names, categories, thumbnails
src/content/case-studies/ one file per case study (rawbank.ts is the master)
src/content/types.ts      the CaseStudy schema
public/case-studies/<slug>/  per-brand imagery
scripts/                  index generator, image optimiser, review checklist
```

## Case studies

Every `/work/<slug>` page renders a `CaseStudy` object through the RAWBANK
template: hero → overview + services + stats → brand system → content sections
(`lead` = two images, `feature` = one wide image, `duo` = two portrait images)
→ The Outcome → More Work.

Media can be a plain image or a code-built mockup driven by the brand tokens
(`browser`, `phone`, `poster`); the brand-system board is either a supplied image
(RAWBANK) or generated from `brandBoard.tokens`.

**Add a case study:** add the brand to `src/content/brands.ts`, create
`src/content/case-studies/<slug>.ts` (copy an existing one), put images in
`public/case-studies/<slug>/`.

### Drafts and placeholders

All case studies except RAWBANK are **drafts**: copy and imagery are temporary.

- `draft: true` pages show a small "Draft" badge, mark AI images with an
  "AI placeholder" tag, and are `noindex`.
- Metrics are `value: null` (shown as "—") until verified figures are supplied.
- Each file's `review` array lists every assumption made while drafting.
  `npm run review` compiles them into **REVIEW.md**.
- To hide all markers site-wide for a preview, build with
  `NEXT_PUBLIC_HIDE_DRAFT_MARKERS=1`.

When a case study is verified: replace images, fill in stats, clear `review`,
set `draft: false`.

AI imagery was generated with Figma AI (file "Crackwits — Case Study Placeholder
Imagery (AI)") and must not be presented as photography of real client work.

## Images

`npm run images` (`scripts/optimize-images.mjs`) converts large PNG/JPGs under `public/` to
WebP (≤ 2048px), moves the originals to `assets/originals/`, and rewrites the
references in `src/`. Run it again after adding new imagery.

## Favicon

`npm run favicons` (`scripts/gen-favicons.mjs`) rebuilds `favicon.svg` (ink on light browser
themes, white on dark), the PNG fallbacks and `apple-touch-icon.png` from
`assets/originals/brand/crackwits-emblem-white.png`.

## Deploy (GitHub + Vercel)

1. Create an empty GitHub repository, then from this folder:

   ```bash
   git init
   git add .
   git commit -m "Crackwits website"
   git branch -M main
   git remote add origin https://github.com/<your-account>/<repo>.git
   git push -u origin main
   ```

2. In Vercel: **Add New → Project → Import** the repository and use:

   | Setting | Value |
   |---|---|
   | Framework Preset | **Next.js** |
   | Root Directory | `./` (repository root) |
   | Build Command | `npm run build` |
   | Output Directory | leave **empty / default** (Next.js preset; the site is a static export, `output: "export"` in `next.config.mjs`) |
   | Install Command | `npm install` |
   | Node.js Version | 20.x |
   | Environment Variables | none required (optional ones in `.env.example`) |

   `vercel.json` pins the framework, install and build commands, so the
   defaults Vercel detects already match this table.

3. Add your domain under **Project → Settings → Domains**, and set
   `NEXT_PUBLIC_SITE_URL` to it if it is not `https://crackwits.com`.

`npm run build` runs `prebuild` first (regenerates the case-study index), then
`next build`, which writes the static site to `out/`. Any other static host
works too: build, then upload `out/` and serve `404.html` for unknown paths.

The contact form (`/briefus`) has no backend: on submit it opens a prefilled
`mailto:hello@crackwits.com`. Wire it to a form service or API route when one
is available.

## Not included / needs attention

- **High-resolution masters** — `assets/originals/` (≈275 MB) holds the
  unoptimised masters the WebP files in `public/` were made from: AI image PNGs,
  the original site's PNG thumbnails, and photo masters. They are not in git or
  the ZIP; only the originals supplied by Crackwits (brand emblem, Mylk Ma'am and
  TRS photos) are. The site does not need any of them to build.
- **AI placeholder imagery** — every `ai: true` image (plus the two Raw Bank
  board photos) was generated with Figma AI. The files are ordinary WebPs in
  `public/` with no runtime link to Figma or Claude, but they are placeholders,
  not client work. See REVIEW.md.
- **Draft copy** — 24 case studies are drafts with assumptions to verify
  (REVIEW.md). They are `noindex` and show a Draft badge until `draft: false`.
- **URW Geometric font** — the `.otf` files in `public/fonts/` came from the
  original site build. URW Geometric is a commercial typeface: confirm the
  web-font licence covers this domain before going live.
- **Reference material** — the mirrored original site used for the rebuild
  (`_reference/`) and local tool settings (`.claude/`) are excluded.
