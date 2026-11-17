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
    summary: z.string(), // short description shown beneath the Home/Work card title
    order: z.number(), // position in the grid and the "Next project" sequence
    logo: z.string().optional(), // optional logo used in the "Next project" link
    coverImage: z.string(), // image shown on the Home/Work card
    coverPosition: z.string().optional(), // focal point used when the card cover is cropped
    heroImage: z.string().optional(), // optional lead image; omitted for PDF placeholder panels
    role: z.string(), // what I did and who I partnered with, e.g. "Product design, partnering with engineering and CRO"
    timeline: z.string(),
    timelineNote: z.string().optional(), // muted detail after the timeline, e.g. "CRO testing ongoing"
    platform: z.array(z.string()),
    platformNote: z.string().optional(), // muted detail after the platform, e.g. "iOS and Android"
    outcome: z.string().optional(), // the result, shown as "Outcome" under Platform on the case study page (falls back to summary)
    brief: z.string(), // "The brief" at the top of the case study: the situation and my task, in one first-person paragraph
  }),
});

export const collections = { work };
