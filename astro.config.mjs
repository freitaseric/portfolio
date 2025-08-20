// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';
import vercel from '@astrojs/vercel';
``

// https://astro.build/config
export default defineConfig({
  i18n: {
      locales: ['pt-br', 'en-us'],
      defaultLocale: 'en-us',
      routing: {
        prefixDefaultLocale: false
    },
  },

  vite: {
    plugins: [tailwindcss()]
  },

  adapter: vercel(),
});