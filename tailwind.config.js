// tailwind.config.js
import { fontFamily as _fontFamily } from 'tailwindcss/defaultTheme';

/** @type {import('tailwindcss').Config} */ // VERY IMPORTANT - add this line
export default { // Change 'const theme' to 'export default'
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        primary: '#2C73DE',
        secondary: '#6b7280',
        muted: '#6b7280',
        highlight: '#5B2AF7',
        'accent-dark': '#E12AF7',
        background: '#f7fafc',
        foreground: '#1f2d3d',
        text: '#1f2d3d',
        hover: '#1e40af',
      },
      fontFamily: {
        sans: ['Inter', ..._fontFamily.sans],
        serif: ['Merriweather', ..._fontFamily.serif],
      },
    },
  },
  plugins: [
    require('@tailwindcss/aspect-ratio'),
    require('@tailwindcss/typography'), // Add this line!
  ],
}