# Sher Ree Tai — Brand guidelines

These guidelines describe the portfolio as it is built today. The values come from `src/styles/global.css` and the components in `src/`, so if the code changes, update this page to match.

This document lives outside `public/` and `src/`, so it is for the project team and is not published as a website page.

## Brand character

The portfolio presents Sher as a thoughtful, practical product designer who makes complex systems and journeys easier to understand.

- **Clear:** use direct language and make the point easy to find.
- **Considered:** show how decisions connect to customer needs, evidence and system constraints.
- **Human:** keep the first-person voice and personal details.
- **Confident, not loud:** use strong hierarchy and a restrained palette rather than decoration for its own sake.

## Colour

The site tokens live in the `@theme` block of `src/styles/global.css`. Dark mode values are set under `html.dark` in the same file.

| Role | Light mode | Dark mode | Use |
|---|---|---|---|
| Page background | `#FFFFFF` | `#0F0E27` | Main canvas |
| Main text (`ink`) | `#1F1D36` | `#D8D6EA` | Headings, body copy, icons |
| Accent | `#4542D1` | `#B4B1FF` | Highlights, numbers, labels and interactive accents |
| Muted text | `#646464` | `#C4C3D0` | Supporting copy, card descriptions, dates |
| Divider (`line`) | `#DEDDDC` | `#4B4A67` | Section rules and borders |
| Placeholder | `#DEDDDC` | `#282741` | Unfilled media areas |
| Chip | `#E8E7E5` | `#282741` | Tags, subtle controls and diagram backgrounds |
| Media panel | `#F0F0F0` | `#F0F0F0` | Grey box behind case study visuals (stays light in both modes) |
| Dark panel | `#0F0E27` | `#282741` | Behind dark-only images, such as the Priority theme |
| Footer band | `#1F1D36` | `#1F1D36` | Contact footer (stays dark in both modes) |

### Accessibility checks

WCAG contrast ratios against the background each colour sits on:

| Combination | Ratio |
|---|---|
| Light main text on white | **16.31:1** |
| Light accent on white | **7.11:1** |
| Light muted text on white | **5.92:1** |
| Dark main text on dark background | **13.24:1** |
| Dark accent on dark background | **9.59:1** |
| Dark muted text on dark background | **10.84:1** |
| White text on the footer band | **16.31:1** |
| Accent on the media panel | **6.24:1** |
| Muted text on the media panel | **5.19:1** |
| Muted text on a chip box | **4.79:1** |

All of these pass WCAG AA's 4.5:1 for normal-sized text. Muted text on a chip box (`#E8E7E5`) is the closest to the limit, so don't lighten either colour. The media panel grey is also painted into some case study images, so if it changes, recolour their backgrounds to match. Recheck contrast whenever a token or its background changes. Dividers are decorative. If a line ever shows a meaningful boundary or state, check it against the 3:1 non-text contrast requirement too.

### Colour guidance

- Use the theme tokens (`text-ink`, `text-accent`, `text-muted`, `border-line`, `bg-chip`, `bg-placeholder`) instead of one-off hex values.
- Keep the blue-violet accent for emphasis and interactive feedback. Long passages stay in the main text colour.
- **Media panels stay light in dark mode.** Put the `media-panel` class on the box behind a case study visual. It switches everything inside back to light-mode colours so it matches the grey baked into the case study images.
- Dark mode follows the visitor's system setting until they choose a mode with the header toggle. A saved manual choice wins.
- Before adding a colour for a new purpose, define its role, its light and dark values and its contrast together.

## Typography

### Typefaces

- **Inter Variable** is the main typeface for headings, body copy and interface text.
- **Space Grotesk** is the secondary typeface (the `font-accent` class). Use it only for complementary content: the numbered case study section titles, the dash headings (Work, Background, Experience, Out of office), callouts, highlights and the large figures in research diagrams.
- Both are self-hosted through Fontsource and keep system sans-serif fallbacks so text stays readable if a font can't load.

### Named roles

| Role | Class | Size and line height | Weight and treatment | Use |
|---|---|---|---|---|
| Display | (in `index.astro`) | 44px / 1; 80px from 768px | Inter 700, tracking -0.035em, accent colour | Homepage hero |
| Page title | `type-page-title` | 48px / 1.05; 64px from 768px | Inter 700, tracking -0.025em | Case study title |
| Prominent section title | `type-section-title-prominent` | 30px / 1.2; 36px from 768px | Space Grotesk 700, tracking -0.025em, with a dash before it | Work, Background, Experience, Out of office |
| Case section title | `type-section-title case-section-title` | 28px / 1.3 | Space Grotesk 700, accent number before it | 01 The brief, 02 Finding the friction… |
| Section title | `type-section-title` | 24px / 1.375 | Inter 700, tracking -0.025em | Other section headings |
| Card title | `type-card-title` | 19px / 1.5 | Inter 700, tracking -0.025em | Project card title |
| Label | `type-label` | 13px / 1.4 | Inter 600, uppercase, tracking 0.08em, usually accent | Project details, small headings, callout labels |
| Case item title | `type-label case-item-title` | 17px | As Label, tracking 0.06em | Small headings inside case study sections |
| Case body | `type-case-body` | 18px / 1.65 | Inter 400 | Case study copy |
| Body / large body | `type-body`, `type-body-large` | 18px / 1.625 | Inter 400 | About page and intro copy |
| Card description | (in `ProjectCard.astro`) | 16px; 18px from 768px, relaxed line height | Inter 400, muted | Project card teaser |
| Post body | `post-body` | 16px / 1.7 | Inter 400 | Writing posts |

Change a role in `global.css` rather than restyling one heading, so the change stays consistent across the site.

### Line breaks

- Every heading uses `text-wrap: balance`, so its lines come out roughly even.
- Case study and post paragraphs, list items and card descriptions use `text-wrap: pretty`, so a paragraph never ends on one stranded word.
- Both are set once in `global.css` (and with `text-pretty` on the card description). Add `text-wrap` or `text-nowrap` to an element to override them.

## Logo and favicon

- The SR logo is drawn inline (`src/components/Logo.astro`) so it takes the accent colour and follows dark mode automatically.
- It is the only identity mark in the header. Don't add a text name beside it.
- The favicon (`public/favicon.svg`) is the same logo. It uses the light accent and switches to the dark-mode accent when the browser is in dark mode. `public/apple-touch-icon.png` is the home-screen version for iPhone: the accent logo on white.

## Header and navigation

- A sticky header with the logo on the left. From 640px up: About and Work links plus the light/dark toggle on the right.
- **Light/dark toggle:** an eclipse. Light mode shows a full sun and in dark mode a shadow slides across it to leave a crescent. It keeps a 36px hit area, an accessible name and a pressed state.
- **Phones (below 640px):** a menu button (three lines that turn into an X) opens a full-screen menu with large Work and About links and a Get in touch list (View CV, Email, LinkedIn).
- **Links:** every text link uses `link-underline`, which draws an underline in from left to right on hover or focus and keeps it on the current page.
- **Footer:** a dark ink band with Get in touch (View CV, Email, LinkedIn) and the copyright. The links come from `src/site.ts`.

## Layout and imagery

- Content sits in a centred column up to 1088px wide with responsive padding. Writing posts use a narrower 640px column.
- **Project cards** use one shared grid (`ProjectGrid.astro`): two columns from 768px, stacked on phones. Each card has a cover, title, a short teaser and a View case study link.
- **Case studies** share one template: title, hero, project details (Role, Timeline, Platform, Outcome), the brief, then numbered sections (01, 02…) and a Next project link.
- Sections are either single column or two column (copy left, visual right). Use spacing and alignment to organise them rather than boxing everything in cards.
- **Visuals** sit in light-grey media panels with a thin border. Interactive diagrams (before and after comparisons, the theme switcher, research summaries) share the same panel, labels and badge style.
- **Annotations** on screens use numbered accent badges with a tinted outline for taps and small arrow chips for scrolls and swipes, with a key underneath.
- Images live in `public/images/<project>/` and are referenced as `/images/...`. Source screenshots and archived exports are kept outside the repo, not in `public/`.

## Motion and interaction

- **Pop-in:** blocks rise 16px and fade in over 0.6s as they scroll into view, grouped by section, card or intro.
- **Small hover details:** card images zoom slightly, arrows slide right, the eclipse shadow nudges in.
- **Videos** autoplay muted on a loop with a play/pause button and start paused for visitors who prefer reduced motion.
- **Respect `prefers-reduced-motion`:** all transitions turn off. Don't add animation libraries or decoration without a clear purpose.
- Links and controls must stay keyboard operable with a visible focus outline.

## Voice and content

- Write in the first person, in plain English, with specific evidence.
- **No comma before "and":** no serial comma in lists and no comma joining two clauses with "and". This applies to visible copy, project details and alt text.
- Prefer short, informative headings over slogans.
- **Project card teasers** lead with the problem and invite the click. Keep figures out of them: the numbers belong in the Outcome line and the case study itself.
- Only claim what the case study supports. If a result isn't measured yet, say what's being tested next.
- Explain specialist terms (CRO, XSUS, IA) the first time they appear. Don't let every paragraph read like a process document.
- Every image has alt text that describes what it shows, unless it's purely decorative.

## Confirmed decisions

- **Accent:** blue-violet stays the single accent across both themes and all projects.
- **Typefaces:** Inter for most text, with Space Grotesk kept to the complementary roles listed above.
- **Header:** logo only, no text identity beside it. Keep the current active-link underline.
- **Dark theme surfaces:** keep the current divider, chip, placeholder and panel tones. Media panels stay light in both modes.
- **Brand mark:** keep the current light and dark treatment in the header and the favicon.
- **Accessibility:** repeat contrast and keyboard checks whenever colours, fonts or controls change.
