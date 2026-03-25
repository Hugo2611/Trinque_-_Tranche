/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      fontFamily: {
        serif: ['"Playfair Display"', 'serif'],
        sans: ['Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'],
      },
      colors: {
        brand: {
          50: '#fdf7ef',
          500: '#8b4513',
          700: '#5d2f0d',
        },
        bordeaux: {
          500: '#6d1f2a',
          700: '#4f131d',
        },
        mustard: {
          500: '#b8860b',
          700: '#8a6308',
        },
        slatewarm: {
          500: '#3f4446',
          700: '#2c3133',
        },
      },
    },
  },
  plugins: [],
};
