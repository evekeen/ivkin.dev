import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import tailwind from '@astrojs/tailwind';
import mermaid from 'astro-mermaid';

export default defineConfig({
  site: 'https://ivkin.dev',
  outDir: './docs',
  integrations: [
    mdx(),
    sitemap(),
    tailwind(),
    mermaid(),
  ],
  markdown: {
    shikiConfig: {
      theme: 'github-dark',
      wrap: true
    }
  }
});
