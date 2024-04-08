import { defineConfig } from 'astro/config';

import solidJs from '@astrojs/solid-js';
import pandacss from '@pandacss/astro';

export default defineConfig({
  integrations: [pandacss(), solidJs()],
  build: {
    inlineStylesheets: 'always',
  },
  output: 'server',
});