import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const projects = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/projects' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    category: z.enum(['category1', 'category2', 'category3', 'category4']),
    tags: z.array(z.string()),
    year: z.string(),
    yearLabel: z.string(),
    live: z.string().url().optional(),
    repo: z.string().url().optional(),
    lastUpdated: z.string().optional(),
    draft: z.boolean().default(false),
  }),
});

export const collections = { projects };
