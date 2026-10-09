import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  site: 'https://splitsworkout.com',
  vite: {
    plugins: [tailwindcss()],
  },
  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'es', 'pt', 'de', 'fr'],
    routing: {
      prefixDefaultLocale: false,
    },
  },
});
