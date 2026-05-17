import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://samwarr.dev',
  trailingSlash: 'never',
  integrations: [sitemap()],
  build: {
    format: 'file',
    inlineStylesheets: 'auto',
  },
});
