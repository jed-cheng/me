---
title: "Building a Bento Grid Layout with Tailwind CSS"
description: "How to create a responsive bento-style grid using CSS Grid and Tailwind CSS v4."
pubDate: 2024-05-20
---

# Building a Bento Grid Layout with Tailwind CSS

Bento-style UIs — grids of rounded cards with varying sizes — are trendy for a reason: they look great and communicate a lot of information at a glance.

## The grid

```html
<div class="grid grid-cols-4 grid-rows-8 gap-3 h-screen max-h-[800px]">
  <!-- cards go here -->
</div>
```

By setting a fixed `max-h` you get the classic "everything fits the viewport" bento look on desktop while gracefully stacking on mobile.

### Card sizing

Each card gets `col-span-*` and `row-span-*` utilities:

```html
<!-- Large intro card -->
<div class="col-span-3 row-span-4">...</div>

<!-- Narrow sidebar card -->
<div class="col-span-1 row-span-6">...</div>
```

## Responsive collapse

On small screens the multi-column layout doesn't make sense. Use responsive prefixes to fall back to a single column:

```html
<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4">...</div>
```

## Tips

1. **Overflow hidden** on cards ensures content stays within rounded corners.
2. Use `transition-all` for hover animations.
3. Keep card content simple — the grid structure does the visual heavy lifting.

Happy building!

## Why I Chose Astro for My Portfolio

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

Writing blog posts is as simple as dropping a `.md` (or `.mdx`) file into `src/content/blog/`.

## Great DX

Hot-module reloading, TypeScript everywhere, and a thriving ecosystem of integrations (React, Tailwind, MDX, sitemaps) made the setup feel effortless.

If you're building a portfolio, blog, or marketing site, give Astro a try!
