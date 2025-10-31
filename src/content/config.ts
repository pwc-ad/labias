import { defineCollection, z } from 'astro:content';

const es = defineCollection({
	type: 'content',
	schema: z.object({
		title: z.string(),
		author: z.string(),
		description: z.string(),
		image: z.string(),
	}),
});

const en = defineCollection({
	type: 'content',
	schema: z.object({
		title: z.string(),
		author: z.string(),
		description: z.string(),
		image: z.string(),
	}),
});

export const collections = {
	es,
	en,
};
