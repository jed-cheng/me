// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';

import mdx from '@astrojs/mdx';

import sitemap from '@astrojs/sitemap';

import expressiveCode from 'astro-expressive-code';

import { rehypeAccessibleEmojis } from 'rehype-accessible-emojis';

// https://astro.build/config
export default defineConfig({
  vite: {
    plugins: [tailwindcss()]
  },
  integrations: [
    sitemap(), 
    expressiveCode(),
    mdx({
      rehypePlugins: [rehypeAccessibleEmojis],
    }), 
  ],
  site: 'https://jed-cheng.github.io',
});