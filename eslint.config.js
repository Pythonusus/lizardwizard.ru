import js from "@eslint/js";
import globals from "globals";
import html from "@html-eslint/eslint-plugin";
import htmlParser from "@html-eslint/parser";
import eslintConfigPrettier from "eslint-config-prettier";

export default [
  // Ignore generated files
  {
    ignores: [
      "dist/**",
      "node_modules/**",
    ],
  },

  // Basic ESLint rules
  js.configs.recommended,

  // HTML linting
  {
    files: ["**/*.html"],
    languageOptions: {
      parser: htmlParser,
    },
    plugins: { html },
    rules: {
      ...html.configs.recommended.rules,
    },
  },

  // Global variables
  {
    languageOptions: {
      globals: {
        ...globals.browser,
        ...globals.node,
      },
    },
  },

  // Prettier config should be last
  eslintConfigPrettier,
];
