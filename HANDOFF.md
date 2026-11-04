# Developer handoff — Crackwits website

Everything a developer needs to take over the site. Read this first, then
`README.md` (setup, structure, deploy settings) and `REVIEW.md` (open content
questions).

## At a glance

| | |
|---|---|
| Live site | https://crackwits.vercel.app (Vercel project `crackwits`, account `iqramoin-4640`) |
| Source | https://github.com/iqramoin-web/crackwits (branch `main`) |
| Deploys | Automatic: every push to `main` is built and published by Vercel (≈1–2 min) |
| Stack | Next.js 15 (App Router) · React 19 · TypeScript · static export to `out/` |
| Node | 20 (see `.nvmrc`; ≥ 18.18 works) |
| Env vars | None required. Optional: `NEXT_PUBLIC_SITE_URL`, `NEXT_PUBLIC_HIDE_DRAFT_MARKERS` (see `.env.example`) |
| Backend | None. The site is fully static; the contact form opens a `mailto:` |

Access to GitHub and Vercel has to be granted by the owner (GitHub account
`iqramoin-web`): add the developer as a collaborator on the repository and as
a member of the Vercel project.

## Getting started

```bash
git clone https://github.com/iqramoin-web/crackwits.git
cd crackwits
npm install
npm run dev          # http://localhost:3000
npm run build        # static site in out/  (run before every push)
npm run typecheck
```

To publish: commit to `main` and push. Vercel settings are pinned in
`vercel.json` (framework Next.js, `npm install`, `npm run build`).

## How the code is organised

```
src/app/                    routes — one folder per page; work/[slug] renders case studies
src/app/site.css            ORIGINAL stylesheet, minified, kept verbatim — do not edit
src/app/case-study.css      case-study additions (brand board, mockups, banner)
src/app/motion.css          all later refinements and animations (sections 1–16,
                            listed at the top of the file)
src/components/pages/       page bodies (Home, Work, Services, About, Insights, …)
src/components/case-study/  case-study template, brand board, code-built mockups
src/components/             header/menu, footer, page transition, reveal helpers
src/content/                all copy and data (brands, case studies, legal text)
src/lib/                    small helpers (scroll/theme triggers, card-open transition)
scripts/                    content index, image optimiser, favicon and review generators
public/                     every image, video and font served by the site
assets/originals/           full-size masters of supplied images (most are not in git)
```

**Rule of thumb for styling:** never edit `site.css`. Override it in
`motion.css` (or `case-study.css` for case-study pages) with a selector at
least as specific, and add a short comment saying why. Several original
rules use `!important`; where they block an animation, the workaround is to
animate `translate`, `scale` or `clip-path`, which those rules don't touch
(see motion.css §11 and §12).

## Content

- **Work grid:** `src/content/brands.ts` — order, name, category, thumbnail
  and the hover image for each card.
- **Case studies:** one file per brand in `src/content/case-studies/<slug>.ts`,
  typed by `src/content/types.ts`. Every page uses the RAWBANK layout
  (`rawbank.ts` is the master and the only verified one). Add a file and its
  images under `public/case-studies/<slug>/`; the index regenerates on
  `npm run dev` / `npm run build`.
- **Drafts:** 24 case studies are `draft: true`. They show a small "Draft"
  badge, mark AI images with an "AI placeholder" tag and are `noindex`.
  19 of them were rewritten from the agency's published case studies on
  crackwits.com (scraped text is in `_reference/case-studies-live/`, not in
  git). The other 5 — TRS Polymers, Mainstage Signature, KidZania, Toby's
  Estate and The Cheesecake Factory — have no published case study and are
  still based on assumptions. Each file's `review` list
  says what is sourced and what is assumed; `npm run review` compiles them
  into `REVIEW.md`.
- **To finish a case study:** replace AI images with real ones, fill in the
  `stats` (currently `null`, shown as "—"), clear `review`, set
  `draft: false`.
- **Images:** run `npm run images` after adding large PNG/JPGs — it converts
  them to WebP (≤ 2048px) and rewrites references.

## Motion and interaction (where to find each effect)

| Effect | Where |
|---|---|
| Hello loader (first visit only) | `HomePage.tsx`, `lib/siteSession.ts` |
| Page-change curtain | `components/PageTransition.tsx`, motion.css §4 |
| Word-by-word heading reveal (sitewide) | `components/HeadingWordReveal.tsx`, motion.css §5 |
| Section fade-ups | `components/RevealOnScroll.tsx`, motion.css §3 |
| Dark ↔ light colour change (Home, About) | `lib/themeLine.ts`, motion.css §15 |
| Work card hover image | `WorkPage.tsx`, motion.css §16 |
| Opening a case study from a card | `lib/viewTransitionNav.ts`, motion.css §16 |
| About approach circles | `AboutPage.tsx` (`CIRCLE_PATHS`), motion.css §9 |
| Partner logo marquee | `HomePage.tsx` (`PARTNER_LOGOS`), motion.css §10 |

Every effect respects `prefers-reduced-motion`.

## Open items

1. **Card-open animation (latest change).** Clicking a case-study card now
   follows plastic.design: the card glides to the top while the page fades,
   then the case study fades in and its banner rises. It builds and
   type-checks, but has not yet been watched in a real browser — please test
   on desktop and mobile Safari/Chrome before shipping
   (`lib/viewTransitionNav.ts`, motion.css §16).
2. **Draft content** — see `REVIEW.md`. Notably: several domains and social
   handles are placeholders; Lillajar is filed under Retail but is an event
   rental business; KCAMP's logo says "25 years" while the old site says
   "over 20"; all results figures are blank until real numbers exist.
3. **AI placeholder images** — generated with Figma AI (Crackwits team file
   `uCyDJja7CGZS1ENdrfda9T`). They are not client work and must be replaced
   with real imagery before the drafts go live.
4. **Contact form** (`/briefus`) has no backend — it opens a prefilled email
   to hello@crackwits.com. Connect a form service or API route if needed.
5. **Social links** in the menu (`SiteHeader.tsx`) point to `#facebook`,
   `#instagram`, etc. — add the real profile URLs.
6. **Font licence** — URW Geometric (`public/fonts/`) is commercial; confirm
   the web licence covers the production domain.
7. **Custom domain** — the site runs on `crackwits.vercel.app`. To move to
   crackwits.com, add the domain in Vercel → Settings → Domains and set
   `NEXT_PUBLIC_SITE_URL`.

## Before every release

- `npm run build` passes (also regenerates the case-study index).
- Check Home, Work, one case study, Services and About at 375px, 768px,
  1280px and 1920px.
- Click through a Work card, a homepage Selected Work card and a More Work
  card to check the case-study opening.
- Hard-refresh the live site after Vercel reports the deployment complete.
