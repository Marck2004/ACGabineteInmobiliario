// @ts-check
import { defineConfig } from "astro/config";
import { fileURLToPath } from 'url';
import { dirname } from 'path';
import tailwindcss from "@tailwindcss/vite";
import cloudflare from '@astrojs/cloudflare';
import react from '@astrojs/react';
import sitemap from '@astrojs/sitemap';
import vercel from '@astrojs/vercel';

const __dirname = dirname(fileURLToPath(import.meta.url));

export default defineConfig({
  output: 'server',
  adapter: vercel({
    webAnalytics: {
      enabled: true
    }
  }),
  vite: {
    plugins: [tailwindcss()],
    resolve: {
      alias: {
        '@': `${__dirname}/src`
      }
    }
  },
  site: 'http://localhost:4321',
  integrations: [react(), sitemap()],
});