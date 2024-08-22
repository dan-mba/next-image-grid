import globals from "globals";
import path from "node:path";
import { fileURLToPath } from "node:url";
import js from "@eslint/js";
import { FlatCompat } from "@eslint/eslintrc";
import { fixupConfigRules } from "@eslint/compat";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const compat = new FlatCompat({
  baseDirectory: __dirname,
  recommendedConfig: js.configs.recommended,
  allConfig: js.configs.all
});

const patchedConfig = fixupConfigRules([...compat.extends("next")]);

const config = [
  ...patchedConfig,
  {
    rules: {
      "@next/next/no-img-element": "off"
    }
  },
  {
    ignores: [".next/*"],
  },
];

export default config;
