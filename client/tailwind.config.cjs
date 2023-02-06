/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        main: {
          default: '#F2F2F2',
          dark: '#121212',
        },
        secondary: {
          dark: '#1D1D1D',
        },
        border: {
          dark: 'rgb(37,37,37)',
        },
        accent: '#2F80ED',
      },
      backgroundImage: {
        login: 'linear-gradient(to right, rgba(255,255,255,0.1), rgba(224, 242, 254, 1)),url("/images/login.png")',
        loginDark: 'linear-gradient(to right, rgba(0,0,0,0.1), rgba(39, 39, 42, 1)),url("/images/login.png")',
        register: 'linear-gradient(to left, rgba(255,255,255,0.1), rgba(224, 242, 254, 1)),url("/images/register.png")',
        registerDark: 'linear-gradient(to left, rgba(0,0,0,0.1), rgba(39, 39, 42, 1)),url("/images/register.png")',
      },
    },
  },
  plugins: [require('tailwind-scrollbar')],
};
