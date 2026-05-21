import { defineConfig } from "oxfmt";

export default defineConfig({
  printWidth: 80,

  // Sort import statements into groups: builtin → external → internal (@/) → relative
  sortImports: true,

  // Sort Tailwind classes (v4 stylesheet, and inside cn() / cva() calls)
  sortTailwindcss: {
    stylesheet: "src/styles/globals.css",
    functions: ["cn", "cva"],
  },
});
