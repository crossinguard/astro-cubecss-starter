import { z, defineCollection } from 'astro:content';

const blogCollection = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    pubDate: z.date(),
    updatedDate: z.date().optional(),
    description: z.string(),
  }),
});
const tutorialsCollection = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    pubDate: z.date(),
    updatedDate: z.date().optional(),
    description: z.string(),
  }),
});

// Export a single `collections` object to register your collection(s)
export const collections = {
  blog: blogCollection,
  tutorials: tutorialsCollection,
};
