import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import react from '@astrojs/react';
import sharp from 'sharp';

import sanity from '@sanity/astro';

// https://astro.build/config
export default defineConfig({
  integrations: [tailwind(), react(), 
    sanity({
    projectId: 'u3xeuigh',
    dataset: 'production',
    // Set useCdn to false if you're building statically.
    useCdn: false,
    studioBasePath: '/studio' // If you want to access the Studio on a route
  })],
  assets: {
    addSharpInstructions: true,
    services: [
      {
        name: 'sharp',
        constructor: sharp,
      },
    ],
  },
});