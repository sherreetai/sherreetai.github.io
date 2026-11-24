# Project structure

The short version: **`src/` is what Astro processes and turns into the website. `public/` is copied across untouched.**

```
sherreetai.github.io/
├── src/                  ← the "source": everything Astro reads, processes and builds
│   ├── pages/            ← one file = one page on the site
│   ├── layouts/          ← page shells, plus the one-off interactive case study diagrams
│   ├── components/       ← reusable building blocks (card, header, footer, media…)
│   ├── content/work/     ← the case studies, one .mdx file each
│   ├── content.config.ts ← the rules for what a case study file must contain
│   ├── styles/global.css ← colours, fonts, text styles, link underline, pop-in effect
│   └── site.ts           ← CV, email and LinkedIn links
├── public/               ← files served exactly as-is
│   ├── images/<project>/ ← images and videos for each case study (and about/)
│   ├── favicon.svg       ← the browser tab icon (the SR logo)
│   ├── apple-touch-icon.png ← the iPhone home-screen icon
│   └── sherreetai-cv.pdf ← the CV the site links to
├── brand-guidelines/     ← colours, type, voice and layout rules for the site
├── docs/                 ← notes like this one
├── dist/                 ← the finished website (generated, never edit)
├── node_modules/         ← downloaded tools like Astro and Tailwind (generated, never edit)
├── .github/workflows/    ← instructions GitHub follows to publish the site
├── astro.config.mjs      ← Astro settings (site address, plugins)
├── package.json          ← list of tools the project needs + the dev/build commands
└── README.md / CLAUDE.md ← editing guide for people and conventions for AI tools
```

## Why `src` and `public` are separate

Astro is a **build tool**. The files in this project aren't the website itself. Astro reads them and *generates* plain HTML/CSS files into `dist/`. `dist/` is what goes online.

- **`src/`** holds files that need processing. A `.astro` page gets combined with its layout, header and footer. A `.mdx` case study gets turned from Markdown into HTML. Tailwind scans everything and writes only the CSS that's actually used. None of these files would work if a browser opened them directly.
- **`public/`** holds files that need no processing. Astro copies them straight into the finished site, so `public/images/o2/hero-01.webp` ends up at `sherreetai.github.io/images/o2/hero-01.webp`. That's why the case study files refer to images as `/images/...` with no `public` in the path.

## Inside `src/`, from big to small

1. **`pages/`**: the file and folder names *are* the site's addresses. Astro calls this file-based routing.
   - `index.astro` → `/`, the homepage. The project cards sit in its Work section, so the Work link goes to `/#work`.
   - `about.astro` → `/about/`
   - `work/[slug].astro` → the square brackets mean "fill in the blank". This one file creates a page for every case study, e.g. `/work/o2-account-navigation/`. It's also where the components you can use in a case study's MDX are registered.
   - `writing/*.mdx` → the research write-ups, e.g. `/writing/tv-product-cards-test/`.
2. **`layouts/`**: the shell a page sits inside.
   - `BaseLayout` is the `<head>` (including the favicon), header, footer and pop-in script. Every page uses it.
   - `CaseStudyLayout` adds the title, hero, project details, brief and "Next project" link.
   - `PostLayout` is the narrower layout for writing posts.
   - The rest are bespoke diagrams made for one case study each: `BoltOnSteps` and `HomeComparison` (O2), `MoversHierarchy`, `MoversResearch`, `MotionComparison` and `ScrollableShot` (Home Movers) and `ThemeSwitcher` (App Library), plus `CaseItem` for small headed blocks inside a section.
3. **`components/`**: smaller pieces, each written once and used wherever needed. This is how the project cards avoid being duplicated: the grid is one `<ProjectGrid />`. `Media` handles every image and video, `CaseSection` makes the numbered sections. `Header`, `Footer` and `Logo` are shared by every page.
4. **`content/work/`**: the *words and pictures* of each case study, kept separate from the *design*. A case study can be rewritten without touching any layout code. And because the cards read from these same files, there's only one place to update a project's title, cover or card teaser (`summary`). Add `hidden: true` to a file to give it a page (e.g. `/work/dmcca/`) that's left out of the card grid and "Next project", has no "Next project" link of its own and asks search engines not to list it. You reach it only by typing the link.
5. **`content.config.ts`**: a checklist for case study files. If one is missing a `title`, or `order` isn't a number, the build stops and says exactly which file is wrong, instead of quietly showing a broken page.

## The generated folders

- **`node_modules/`** is created by `npm install` from the list in `package.json`.
- **`dist/`** is created by `npm run build`.

Both are listed in `.gitignore`, so they never go into git. They can be deleted and regenerated at any time.

## What stays out of the repo

Treat this repo as public: anyone may be able to browse every file in it on GitHub, even files that aren’t part of the website. Private and source material is kept on your Mac instead:

- **`Desktop/Work/Portfolio archive/`**: source screenshots, page exports and older files, sorted by case study.
- **`Desktop/Work/Interview prep/`**: CVs in progress, STAR notes and interview guides.

`.gitignore` blocks Word documents, a `screenshots/` folder and interview files from being added by accident. Only put a file in `public/` if the site actually shows it.

## How it all flows

```
npm run dev    →  Astro serves src/ + public/ live at localhost:4321 (reloads on save)
npm run build  →  Astro writes the finished site into dist/
git push       →  GitHub runs .github/workflows/deploy.yml, which runs the build and publishes dist/
```

This is the standard Astro layout, so AI tools and [Astro's own docs](https://docs.astro.build) will both recognise it straight away.
