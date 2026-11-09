import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

// Every case study is one .mdx file in src/content/work/.
// The fields below are the settings at the top of each file (between the --- lines).
const work = defineCollection({
  loader: glob({ pattern: '**/*.mdx', base: './src/content/work' }),
  schema: z.object({
    title: z.string(), // big heading on the case study page
    cardTitle: z.string().optional(), // shorter title for the Home/Work card (falls back to title)
    tag: z.string(), // small label on the card, e.g. "UI Design"
    order: z.number(), // position in the grid and the "Next project" sequence
    cover: z.string(), // card image
    hero: z.string(), // full-width banner under the intro (image or video)
    logo: z.string(), // small logo used in the "Next project" link
    tint: z.string(), // background colour for the intro, panels and quotes
    scope: z.string(),
    role: z.array(z.string()),
    outcome: z.string(),
    challenge: z.string(),
  }),
});

export const collections = { work };
