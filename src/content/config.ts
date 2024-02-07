import { z, defineCollection } from 'astro:content';

const eventsCollection = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    pubDate: z.date(),
    eventDate: z.date(),
    description: z.string(),
  }),
});
const meetingsCollection = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    pubDate: z.date(),
    meetingDate: z.date(),
    description: z.string(),
  }),
});

// Export a single `collections` object to register your collection(s)
export const collections = {
  events: eventsCollection,
  meetings: meetingsCollection,
};
