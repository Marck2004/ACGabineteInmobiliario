// @ts-check
import { defineConfig } from "astro/config";
import { fileURLToPath } from 'url';
import { dirname } from 'path';
import tailwindcss from "@tailwindcss/vite";

const __dirname = dirname(fileURLToPath(import.meta.url));

export default defineConfig({
  vite: {
    plugins: [tailwindcss()],
    resolve: {
      alias: {
        '@': `${__dirname}/src`
      }
    }
  },
});
