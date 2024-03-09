import { defineCollection, z } from "astro:content";
const work = defineCollection({
  schema: z.object({
    client: z.string().optional(),
    description: z.string().optional(),
    website: z.string().optional(),
    thumbnail: z.object({
      url: z.string(),
      alt: z.string(),
    }),
  }),
});
const infopages = defineCollection({
  schema: z.object({
    page: z.string(),
  }),
});
const postsCollection = defineCollection({
  schema: z.object({
    title: z.string(),
    pubDate: z.date(),
    description: z.string(),
    author: z.string(),
    image: z.object({
      url: z.string(),
      alt: z.string(),
    }),
    tags: z.array(z.string()),
  }),
});
export const collections = {
  work: work,
  infopages: infopages,
  posts: postsCollection,
};
