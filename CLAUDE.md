# Project notes for AI assistants

A static portfolio site: Astro 7 + Tailwind CSS v4 + MDX, deployed to GitHub Pages (`sherreetai.github.io`, served at the root, no `base` path). The person editing is a designer with little coding experience, so keep changes small, readable and in the existing patterns. Explain what you changed in plain language.

## Structure
- `src/content/work/*.mdx`: one file per case study. Frontmatter is validated by `src/content.config.ts`. These files are the single source of truth for both the project cards and the case study pages.
- `src/components/ProjectGrid.astro` + `ProjectCard.astro`: the card grid used on both Home (`src/pages/index.astro`) and Work (`src/pages/work.astro`). Never duplicate card markup in a page; change the component.
- `src/pages/work/[slug].astro` → `src/layouts/CaseStudyLayout.astro`: the case study template. "Next project" follows `order` and wraps around.
- `src/layouts/BaseLayout.astro`: `<head>`, header, footer (`fullFooter` prop), and the scroll pop-in script.
- `src/site.ts`: email and LinkedIn URLs.
- `src/styles/global.css`: Tailwind import, `@theme` design tokens (`ink`, `accent`, `muted`, `line`, Inter), case study body styles (`.case-body`), and the pop-in CSS.

## Conventions
- Style with Tailwind classes in markup. Use the theme tokens (`text-accent`, `border-line`, `text-muted`) rather than hard-coded hex values. The case study tint is the CSS variable `--tint`, so use `bg-(--tint)`.
- Case study Markdown stays class-free. Its look comes from `.case-body` in `global.css`.
- In MDX, `<Media>` and `<PullQuote>` are available without imports (they're passed in via `components` in `[slug].astro`). If you add a new MDX component, register it there too.
- `Media` picks `<video autoplay muted loop playsinline>` for `.mp4/.webm/.mov`, otherwise `<img>`. Layouts: `plain` (default), `panel`, `band`, `bleed`.
- Pop-in: put `data-reveal` on the *wrapper* of a block (a section, a card, an intro) so the whole block rises in as one group. Don't put it on individual paragraphs. In `.case-body`, grouping is automatic (script in `BaseLayout.astro`): a heading plus the text under it is one group, and each image, video or quote is its own group. It's turned off under `prefers-reduced-motion`. Don't add animation libraries for this.
- Assets live in `public/images/<project>/` and are referenced as `/images/...`.
- No client-side framework (React etc.) is used. Don't add one without being asked.

## Commands
- `npm run dev`: local server at http://localhost:4321
- `npm run build`: production build into `dist/` (also checks the frontmatter schema)
