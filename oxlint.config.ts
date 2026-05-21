import { defineConfig } from "oxlint";

export default defineConfig({
  plugins: ["react", "jsx-a11y"],
  categories: {
    correctness: "warn",
  },
  rules: {
    "eslint/no-unused-vars": "error",

    // React
    "react/exhaustive-deps": "warn", // missing hook deps (1 real finding in Globe.tsx)
    "react/jsx-key": "error", // keys required in .map() renders
    "react/button-has-type": "warn", // explicit type on <button> elements

    // TypeScript (plugin on by default)
    "typescript/prefer-as-const": "warn", // prefer `as const` over literal types
    "typescript/no-wrapper-object-types": "error", // ban String/Number/Boolean etc.
    "typescript/ban-ts-comment": "warn", // discourage @ts-ignore / @ts-expect-error without description
    "typescript/no-extra-non-null-assertion": "error", // catches !!foo

    // Accessibility
    "jsx-a11y/alt-text": "error", // <img> must have alt
    "jsx-a11y/anchor-has-content": "warn", // <a> must not be empty
  },
});
