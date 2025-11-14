import js from "@eslint/js";
import pluginPrettier from "eslint-plugin-prettier";
import { defineConfig } from "eslint/config";
import globals from "globals";

export default defineConfig([
  {
    files: ["**/*.{js,mjs,cjs}"],
    languageOptions: {
      globals: globals.node,
      ecmaVersion: "latest",
      sourceType: "module",
    },
    plugins: {
      prettier: pluginPrettier,
    },
    ignores: ["node_modules/**", "dist/**"],
    rules: {
      ...js.configs.recommended.rules,
      "prettier/prettier": "error",
    },
  },
]);
