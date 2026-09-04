import { defineCollection, z } from "astro:content";

const recensioner = defineCollection({
  type: "content",
  schema: ({ image }) =>
    z.object({
      house: z.string(),
      name: z.string(),
      score: z.number().min(0).max(10),
      concentration: z.enum(["EDC", "EDT", "EDP", "Parfum"]),
      price: z.enum(["€", "€€", "€€€", "€€€€"]),
      family: z.string(),
      notesTop: z.string(),
      notesHeart: z.string(),
      notesBase: z.string(),
      longevity: z.number().min(1).max(10),
      sillage: z.number().min(1).max(10),
      verdict: z.string(),
      cover: image().optional(),
      publishDate: z.date(),
      description: z.string(),
    }),
});

const guider = defineCollection({
  type: "content",
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      excerpt: z.string(),
      cover: image().optional(),
      publishDate: z.date(),
      description: z.string(),
    }),
});

export const collections = { recensioner, guider };
