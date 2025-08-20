// @ts-check
import { defineConfig } from "astro/config";
import { fileURLToPath } from 'url';
import { dirname } from 'path';
import tailwindcss from "@tailwindcss/vite";

import react from '@astrojs/react';

import sitemap from '@astrojs/sitemap';

const __dirname = dirname(fileURLToPath(import.meta.url));

export default defineConfig({
  output: 'server',

  vite: {
    plugins: [tailwindcss()],
    resolve: {
      alias: {
        '@': `${__dirname}/src`
      }
    }
  },
  site: 'https://www.acgabineteinmobiliario.es',
  integrations: [react(), sitemap()],
});