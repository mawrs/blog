import { defineCollection, z } from "astro:content";

const workCollection = defineCollection({
  schema: z.object({
    order: z.number().optional(),
    client: z.string(),
    description: z.string(),
    website: z.string().url(),
    thumbnail: z.object({
      url: z.string(),
      alt: z.string(),
    }),
  }),
});

const postsCollection = defineCollection({
  schema: z.object({
    title: z.string(),
    pubDate: z.date(),
    description: z.string(),
    author: z.string().optional(),
    tags: z.array(z.string()).optional(),
    image: z.object({
      url: z.string(),
      alt: z.string(),
    }),
  }),
});

const about = defineCollection({
  schema: z.object({
    page: z.string(),
  }),
});

export const collections = {
  work: workCollection,
  posts: postsCollection,
  about: about,
};
