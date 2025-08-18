// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';

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
  }
});