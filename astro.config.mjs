import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://srcchang.github.io',
  base: '/uss-waiting-time',
  output: 'static',
  integrations: [
    sitemap({
      i18n: {
        defaultLocale: 'en',
        locales: { en: 'en', id: 'id', ja: 'ja', ko: 'ko', 'zh-Hant': 'zh-Hant', 'zh-Hans': 'zh-Hans' },
      },
    }),
  ],
  vite: {
    plugins: [tailwindcss()],
    server: { allowedHosts: true },
    preview: { allowedHosts: true },
  },
  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'id', 'ja', 'ko', 'zh-Hant', 'zh-Hans'],
    routing: { prefixDefaultLocale: true },
  },
});
