# Project notes for AI assistants

A static portfolio site: Astro 7 + Tailwind CSS v4 + MDX, deployed to GitHub Pages (`sherreetai.github.io`, served at the root, no `base` path). The person editing is a designer with little coding experience, so keep changes small, readable and in the existing patterns. Explain what you changed in plain language.

For the look and voice of the site, see `brand-guidelines/brand-guidelines.md`. For a plain-language tour of the folders, see `docs/project-structure.md`. Keep both in step with the code when you change something they describe.

## Structure
- `src/content/work/*.mdx`: one file per case study. Frontmatter is validated by `src/content.config.ts`. These files are the single source of truth for both the project cards and the case study pages. `summary` is the card teaser, `outcome` is the Outcome line on the case study page. `hidden: true` (e.g. `dmcca.mdx`) keeps a case study out of the grid and "Next project", drops its own "Next project" link and adds `noindex`. It's only reached by typing `/work/<file name>/`.
- `src/components/ProjectGrid.astro` + `ProjectCard.astro`: the card grid, shown in the Work section of Home (`src/pages/index.astro`). There is no separate Work page: the Work link goes to `/#work`. Never duplicate card markup in a page; change the component.
- `src/pages/work/[slug].astro` → `src/layouts/CaseStudyLayout.astro`: the case study template. "Next project" follows `order` and wraps around.
- `src/pages/writing/*.mdx` → `src/layouts/PostLayout.astro`: research write-ups linked from the case studies.
- `src/layouts/BaseLayout.astro`: `<head>` (fonts, favicon), header, footer and the scroll pop-in script.
- `src/components/Header.astro`: sticky bar with the logo, About and Work links and the eclipse light/dark toggle. Below 640px the links move into a full-screen menu with Get in touch links.
- `src/components/Footer.astro`: dark contact band (View CV, Email, LinkedIn) and copyright.
- Bespoke interactive diagrams live in `src/layouts/`, one per case study use: `BoltOnSteps`, `HomeComparison` (O2), `MoversHierarchy`, `MoversResearch`, `MotionComparison`, `ScrollableShot` (Home Movers), `ThemeSwitcher` (App Library).
- `src/site.ts`: CV, email and LinkedIn URLs.
- `src/styles/global.css`: Tailwind import, `@theme` design tokens, dark mode values (`html.dark`), `type-*` text styles, `.post-body`, `link-underline`, `media-panel`, `hairline-outline`, text-wrap rules and the pop-in CSS.
- `public/`: `images/<project>/`, `favicon.svg`, `apple-touch-icon.png` and `sherreetai-cv.pdf` (the CV the site links to).

## Conventions
- Style with Tailwind classes in markup. Use the theme tokens (`text-ink`, `text-accent`, `text-muted`, `border-line`, `bg-chip`, `bg-placeholder`, `bg-media`) rather than hard-coded hex values.
- Fonts: Inter is the default. Space Grotesk (`font-accent`) is only for complementary content: numbered case study section titles, dash headings, callouts and big research figures.
- Use the existing `type-*` classes (`type-page-title`, `type-section-title`, `type-label`, `type-case-body`…) instead of one-off text sizes.
- Put `media-panel` on the grey box behind a case study visual (not a `bg-` class). It keeps light-mode colours inside, even in dark mode.
- Screens and cards inside a panel get a 1px hairline in `border-line` instead of a drop shadow: `border border-line` on square images, `hairline-outline` on images with transparent rounded corners.
- Text links use `link-underline`. Buttons use `action-primary` / `action-secondary`.
- Headings get `text-wrap: balance` and case study / post paragraphs get `text-wrap: pretty` from `global.css`. Don't add these per element.
- Case study Markdown stays class-free. Its look comes from the case study components and `.case-body` / `.post-body`.
- In MDX, `<Media>`, `<CaseSection>`, `<CaseItem>` and the other case-study components are available without imports (they're passed in via `components` in `[slug].astro`). If you add a new MDX component, register it there too.
- In a two-column `CaseSection` with copy on the left and one image on the right, wrap the image in `<div slot="aside">` so it sits level with the title and the copy starts right under the title.
- `Media` picks a looping muted video with a play/pause button (`VideoPlayer`) for `.mp4/.webm/.mov`, otherwise `<img>`. Layouts: `plain` (default), `panel`, `band`, `bleed`, `card` (with `ratio`).
- Pop-in: put `data-reveal` on the *wrapper* of a block (a section, a card, an intro) so the whole block rises in as one group. Don't put it on individual paragraphs. In `.case-body`, grouping is automatic (script in `BaseLayout.astro`): a heading plus the text under it is one group. Each image, video or quote is its own group. It's turned off under `prefers-reduced-motion`. Don't add animation libraries for this.
- Assets live in `public/images/<project>/` and are referenced as `/images/...`. Only put a file in `public/` if the site shows it.
- No client-side framework (React etc.) is used. Don't add one without being asked.

## Copy
- House style: no comma before "and", in lists or between clauses. This covers visible copy, frontmatter and alt text.
- Card teasers (`summary`) lead with the problem and invite the click. Keep figures out of them; numbers go in `outcome` and the case study.
- Only claim what the case study supports.

## Keep out of the repo
Treat the repo as public. Source screenshots and archived exports live in `~/Desktop/Work/Portfolio archive/`, interview material in `~/Desktop/Work/Interview prep/`. `.gitignore` blocks `*.docx`, `/screenshots/` and interview files. Don't add internal or private documents.

## Commands
- `npm run dev`: local server at http://localhost:4321
- `npm run build`: production build into `dist/` (also checks the frontmatter schema)
