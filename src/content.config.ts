import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';


const posts = defineCollection({
  loader: glob({ pattern: "**/*.{md,mdx}", base: "./src/content/posts" }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    status:  z.enum(['todo', 'doing', 'done']).default('todo'),
    date: z.coerce.date(),
    updatedAt: z.coerce.date().optional(),
    publishedAt: z.coerce.date().optional(),
    tags: z.array(z.string()).optional(),
  })
});

// const projects = defineCollection({
//   loader: glob({ pattern: "**/*.{md,mdx}", base: "./src/projects" }),
//   schema: z.object({
//     name: z.string(),
//     description: z.string(),
//     status:  z.enum(['todo', 'doing', 'done']).default('todo'),
//   })
// })

export const collections = { 
  posts, 
  // projects 
};