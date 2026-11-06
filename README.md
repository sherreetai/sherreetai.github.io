# Sher Ree Tai, portfolio

Built with [Astro](https://astro.build) and [Tailwind CSS](https://tailwindcss.com). It goes live at **https://sherreetai.github.io** whenever changes are pushed to `main`.

## Running it on your computer

You need [Node.js](https://nodejs.org) version 22.19 or newer. The first time:

```
npm install
```

After that:

```
npm run dev
```

Open http://localhost:4321. The page reloads by itself when you save a file.

## Where things live

For an overview of how the folders fit together, see [docs/project-structure.md](docs/project-structure.md).

| I want to change… | Edit this |
| --- | --- |
| A case study's text, images or settings | `src/content/work/<name>.mdx` |
| The home page intro | `src/pages/index.astro` |
| The About page (text, experience list, snippet photos) | `src/pages/about.astro` |
| The "Featured projects" heading on Work | `src/pages/work.astro` |
| Email / LinkedIn links | `src/site.ts` |
| Colours and font | the `@theme` block at the top of `src/styles/global.css` |
| How case study text looks (sizes, spacing) | the "Case study body text" section of `src/styles/global.css` |
| The scroll pop-in effect | the "Pop-in on scroll" section of `src/styles/global.css` |
| Header / footer | `src/components/Header.astro`, `src/components/Footer.astro` |
| How a project card looks | `src/components/ProjectCard.astro` (the card is defined once and used on Home and Work) |

Images and videos go in `public/images/`. A file at `public/images/mercer/hero.jpg` is referred to as `/images/mercer/hero.jpg`.

## Adding a new case study

1. Copy one of the files in `src/content/work/` and rename it. The file name becomes the page address: `my-project.mdx` → `/work/my-project/`.
2. Edit the settings between the `---` lines at the top:
   - `title`: big heading on the page. `cardTitle` (optional) is a shorter version for the card.
   - `tag`: the small label on the card.
   - `order`: where it sits in the grid. 1 comes first. It also decides which project the "Next project" link goes to.
   - `cover`, `hero`, `logo`: image paths.
   - `tint`: background colour for the intro, panels and quote bands.
   - `role`, `project`, `year`, `intro`, `challenge`: the intro section. In `intro`, leave a blank line between paragraphs.
3. Write the rest of the page underneath in Markdown.

The card appears on Home and Work automatically.

## Writing a case study

Normal Markdown works: `## Big heading`, `### Small heading`, `**bold**`, blank lines between paragraphs.

There are two building blocks for images and quotes:

```mdx
<Media src="/images/my-project/screens.png" alt="What it shows" />
<Media src="/images/my-project/screens.png" layout="panel" />
<Media src="/images/my-project/phone.png" layout="band" />
<Media src="/images/my-project/demo.mp4" layout="panel" />

<PullQuote>A big centred quote in a tinted band.</PullQuote>
```

- `layout="panel"`: sits on a rounded box in the tint colour.
- `layout="band"`: a full-width strip in the tint colour, good for big device mockups.
- Leave `layout` off for a plain image.
- **Videos:** use `.mp4` instead of GIFs where possible. They're much smaller and play automatically, muted and on a loop. GIFs work too: just use the `.gif` path.

## Placeholders

Every image is currently a grey or brand-coloured placeholder `.svg`. To replace one, put the real file in the same folder and update its path (e.g. `cover.svg` → `cover.jpg`). The logo in the header is a placeholder too (see `Header.astro`).

## Publishing

Push to `main` and GitHub builds and publishes the site, which takes about a minute. First-time setup: in the GitHub repo go to **Settings → Pages → Source** and pick **GitHub Actions**.
