import { defineCollection, z } from "astro:content";

const worksCollection = defineCollection({
  schema: () => z.object({
    title: z.string(),
	year: z.string().optional(),
	description: z.string().optional(),
	order: z.number(),
	gallery: z.array(z.string()).optional(),
	wistiaId: z.array(z.string()).optional(),
	qqVideoId: z.array(z.string()).optional(),
	vimeoId: z.array(z.string()).optional()
  }),
});

export const collections = {
  works: worksCollection,
};