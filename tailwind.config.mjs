import forms from '@tailwindcss/forms';

/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,ts,md}'],
  theme: {
    extend: {
      colors: {
        brand: {
          blue: '#1443cb',
          'blue-dark': '#005eb8',
          green: '#00a551',
          yellow: '#ffc400',
        },
        surface: '#f3efe6',
        ink: '#3a3f4b',
      },
      fontFamily: {
        sans: ['"Plus Jakarta Sans"', 'ui-sans-serif', 'system-ui', 'sans-serif'],
      },
      letterSpacing: {
        eyebrow: '.18em',
      },
    },
  },
  plugins: [forms],
};
