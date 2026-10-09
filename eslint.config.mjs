import { defineConfig, globalIgnores } from "eslint/config";
import globals from "globals";
import pluginReact from "@eslint-react/eslint-plugin";
import js from "@eslint/js";
import nextPlugin from "@next/eslint-plugin-next"

export default defineConfig([
  {
    files: ["**/*.{js,jsx}"],
    extends: [
      js.configs.recommended,
      pluginReact.configs.recommended,
      nextPlugin.configs.recommended
    ],
    languageOptions: {
      globals: {
        ...globals.browser,
        ...globals.node,
      },
      parserOptions: {
        ecmaFeatures: {
          jsx: true, // Enable JSX syntax support
        },
      },
    },
    rules: {
      '@next/next/no-img-element': 'off'
    }
  },
  // Override default ignores of eslint-config-next.
  globalIgnores([
    // Default ignores of eslint-config-next:
    '.next/**',
    'out/**',
    'build/**',
    'next-env.d.ts',
  ]),
]);
