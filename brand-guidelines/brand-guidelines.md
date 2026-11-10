# Sher Ree Tai — Brand guidelines

These guidelines describe the current portfolio and call out decisions that still need design review. The review notes are recommendations, not changes already made to the site.

This document lives outside `public/` and `src/`, so it is for the project team and is not published as a website page.

## Brand character

The portfolio presents Sher as a thoughtful, practical product designer who makes complex systems and journeys easier to understand.

- **Clear:** use direct language and make the point easy to find.
- **Considered:** show how decisions connect to customer needs, evidence, and system constraints.
- **Human:** keep the first-person voice and personal details.
- **Confident, not loud:** use strong hierarchy and a restrained palette rather than decoration for its own sake.

## Color

The colors below are the current site tokens in `src/styles/global.css`.

| Role | Light mode | Dark mode | Use |
|---|---|---|---|
| Page background | `#FFFFFF` | `#0F0E27` | Main canvas |
| Main text (`ink`) | `#0F0E27` | `#D8D6EA` | Headings, body copy, icons |
| Accent | `#4542D1` | `#B4B1FF` | Highlight and interactive accent |
| Muted text | `#6B6B6B` | `#C4C3D0` | Supporting labels and dates |
| Divider | `#DEDDDC` | `#4B4A67` | Section rules and borders |
| Placeholder | `#DEDDDC` | `#282741` | Unfilled media areas |
| Chip | `#E8E7E5` | `#282741` | Scope tags and subtle controls |

### Accessibility checks

Approximate WCAG contrast ratios against the relevant page background:

- Light main text: **18.88:1**
- Light accent: **7.11:1**
- Light muted text: **5.33:1**
- Dark main text: **13.24:1**
- Dark accent: **9.59:1**
- Dark muted text: **10.84:1**

These text combinations exceed WCAG AA’s 4.5:1 requirement for normal-sized text. Recheck contrast whenever a token or its background changes. Decorative divider colors are not body text; if a line is used to communicate a meaningful boundary or state, assess it as a non-text contrast requirement too.

### Color guidance

- Use the theme tokens (`text-ink`, `text-accent`, `text-muted`, `border-line`, `bg-chip`, `bg-placeholder`) instead of introducing one-off hex values.
- Reserve the blue-violet accent for emphasis and interactive feedback. Keep long passages in the main text color.
- Dark mode is driven by the visitor’s system preference until they choose a mode with the header icon. A saved manual choice takes precedence.
- Before adding colors for a new purpose, define the role, light and dark values, and contrast behavior together.

## Typography

### Typeface decision

- **Inter Variable is the typeface for every role.** No complementary headline font will be added.
- Use the named roles below instead of inventing one-off heading and body styles.
- Keep system sans-serif fallbacks so text remains available if the font cannot load.

### Named roles

| Role | Size and line height | Weight and treatment | Use |
|---|---|---|---|
| Display | 40px / 1.05; 52px from 768px | 700, tracking -0.025em | Homepage hero |
| Page title | 40px / 1.05; 56px from 768px | 700, tracking -0.025em | Case-study page title |
| Section title | 24px / 1.375 | 700, tracking -0.025em | Case-study decisions and experience names |
| Prominent section title | 30px / 1.2; 36px from 768px | 700, tracking -0.025em | About and Work section headings |
| Card title | 18px / 1.5 | 500, tracking -0.025em | Work-card title |
| Eyebrow | 12px / 1.5 | 500, uppercase, tracking 0.025em | Case-study section label |
| Body | 16px / 1.625 | 400 | Case-study copy |
| Large body | 18px / 1.625 | 400 | About-page copy |

The roles are implemented as reusable `type-*` classes in `src/styles/global.css`. Update the role there so changes stay consistent across the site.

## Header and navigation

### Current site

- Compact header with the personal logo on the left and About / Work links on the right.
- A moon/sun icon toggle sits beside the links.
- Navigation uses small, regular-weight text; the icon control has a 36px square hit area.
- The header, footer, and page templates share the same color tokens.

### Header identity and navigation decisions

- Keep the logo as the sole identity mark in the header; do not add a text name beside it.
- Keep the current active-link styling as it is.

## Layout and imagery

- The site uses a centered content width of about 1088px, with responsive padding.
- Work cards use a shared two-column grid on wider screens and stack on small screens.
- Case studies use a shared template with introductory challenge, outcome/scope details, and editorial sections.
- Thin gray dividers organize case-study sections; use spacing and alignment rather than boxed cards.
- Images belong under `public/images/<project>/` and are referenced from content by their `/images/...` path.
- Replace image placeholders using the filenames already referenced by project content so cards, heroes, and case-study sections stay connected.

## Motion and interaction

- Scroll reveals are small upward fades, grouped by section or card.
- Respect `prefers-reduced-motion`; do not add motion libraries or decorative animation without a clear purpose.
- Links and controls must remain keyboard-operable, with visible focus.
- Theme control must retain its accessible name and pressed state as its icon changes.

## Voice and content

- Write in first person, using plain English and specific evidence.
- Prefer short, informative headings over abstract slogans.
- Case-study section headings should distinguish the umbrella idea from the concrete design decision or result.
- Explain specialist terms where they are necessary; avoid making every paragraph sound like a process document.

## Confirmed decisions and ongoing practice

- **Accent use:** blue-violet remains the single accent across both themes and all project identities.
- **Header hierarchy:** keep the logo without a text identity beside it; retain active-link styling as it is.
- **Dark theme surfaces:** keep the current divider, chip, placeholder, and interactive-state tones.
- **Brand mark:** retain the current light/dark treatment and minimum visible size.
- **Accessibility maintenance:** repeat contrast and keyboard checks whenever colors, fonts, or controls change.
