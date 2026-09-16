import forms from '@tailwindcss/forms';

/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,ts,md}'],
  theme: {
    extend: {
      colors: {
        brand: {
          blue: '#205DC7',
          'blue-dark': '#174BA6',
          navy: '#001B4A',
          yellow: '#FBCC0D',
        },
        surface: '#F3F4F8',
        ink: '#3A3F4B',
      },
      fontFamily: {
        sans: ['Barlow', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        display: ['"Barlow Condensed"', 'Barlow', 'ui-sans-serif', 'system-ui', 'sans-serif'],
      },
      letterSpacing: {
        eyebrow: '.18em',
      },
    },
  },
  plugins: [forms],
};
