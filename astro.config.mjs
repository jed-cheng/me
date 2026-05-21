// @ts-check
import { defineConfig } from "astro/config";

import cloudflare from "@astrojs/cloudflare";

import mdx from "@astrojs/mdx";

import react from "@astrojs/react";

import tailwindcss from "@tailwindcss/vite";

import sitemap from "@astrojs/sitemap";

import { remarkReadingTime } from "./src/lib/remark-reading-time.mjs";
import { remarkModifiedTime } from "./src/lib/remark-modified-time.mjs";

// https://astro.build/config
export default defineConfig({
  adapter: cloudflare(),
  integrations: [mdx(), react(), sitemap()],
  markdown: {
    remarkPlugins: [remarkReadingTime, remarkModifiedTime],
  },
  i18n: {
    locales: ["en"],
    defaultLocale: "en",
  },
  vite: {
    plugins: [tailwindcss()],
  },
});
