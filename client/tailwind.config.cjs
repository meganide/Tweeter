/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        main: {
          default: '#F2F2F2',
          dark: '#18181b',
        },
      },
    },
  },
  plugins: [],
};
