---
title: "Why I Chose Astro for My Portfolio"
description: "A quick look at why Astro is a great fit for content-focused personal sites."
pubDate: 2024-03-10
---

# Why I Chose Astro for My Portfolio

When rebuilding my personal site I evaluated several frameworks. Here's why **Astro** won out.

## Zero JS by default

Astro ships zero JavaScript to the browser unless you explicitly opt in with `client:load` or `client:idle`. For a portfolio where most content is static, that means blazing-fast page loads.

## Islands architecture

You get the best of both worlds: static HTML for most of the page and interactive React/Vue/Svelte components only where needed. The bento cards on my homepage are React components hydrated on the client while the rest of the HTML is plain, fast markup.

## Content collections

Astro's built-in content layer gives you:

- Type-safe frontmatter
- Automatic routing from markdown files
- A clean `getCollection` / `getEntry` API

Writing blog posts is as simple as dropping a `.md` file into `src/data/blog/`.

## Great DX

Hot-module reloading, TypeScript everywhere, and a thriving ecosystem of integrations (React, Tailwind, MDX, sitemaps) made the setup feel effortless.

If you're building a portfolio, blog, or marketing site, give Astro a try!
