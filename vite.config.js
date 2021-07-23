import { createVuePlugin } from "vite-plugin-vue2";
import { defineConfig } from "vite";

import legacy from "@vitejs/plugin-legacy";
export default defineConfig({
  plugins: [
    legacy({
      targets: ["ie >= 11"],
      additionalLegacyPolyfills: ["regenerator-runtime/runtime"],
    }),
    createVuePlugin(),
  ],
});
