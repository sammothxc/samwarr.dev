import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://samwarr.dev',
  integrations: [sitemap()],
  build: {
    inlineStylesheets: 'auto',
  },
});
