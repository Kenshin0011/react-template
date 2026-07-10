/// <reference types="vitest/config" />

import { defineConfig, mergeConfig } from "vitest/config";
import viteConfig from "./vite.config";

export default mergeConfig(
  viteConfig,
  defineConfig({
    test: {
      globals: true,
      environment: "jsdom",
      css: true,

      setupFiles: "./tests/setup.ts",

      include: ["src/**/*.test.{ts,tsx}"],

      exclude: [
        "**/node_modules/**",
        "**/dist/**",
        "**/.storybook/**",
        "**/e2e/**",
        "**/tests/e2e/**",
        "**/tests/vrt/**",
      ],
    },
  }),
);
