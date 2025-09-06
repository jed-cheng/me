import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const posts = defineCollection({
  loader: glob({ pattern: "**/*.{md,mdx}", base: "./src/posts" }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
  })
});

const projects = defineCollection({
  loader: glob({ pattern: "**/*.{md,mdx}", base: "./src/projects" }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
  })
})

export const collections = { 
  posts, 
  projects 
};