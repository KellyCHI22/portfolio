/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        'red-hat-display-variable': ['Red Hat Display Variable', 'sans-serif'],
        righteous: ['Righteous', 'sans-serif'],
      },
      colors: {
        alabaster: {
          50: '#FDFDFC',
          100: '#F9F8F6',
          200: '#F5F4F0',
          300: '#EFEEE6',
          400: '#E9E7DD',
          500: '#E4E2D6',
          600: '#C0BBA0',
          700: '#9E966B',
          800: '#6C6647',
          900: '#343222',
          950: '#1C1A12',
        },
        vermilion: {
          50: '#FCEFEE',
          100: '#F8DBD8',
          200: '#F2B7B1',
          300: '#EB9389',
          400: '#E57367',
          500: '#DE4D3E',
          600: '#C43222',
          700: '#902419',
          800: '#601810',
          900: '#300C08',
          950: '#1A0704',
        },
        jet: {
          50: '#EBEBEB',
          100: '#D6D6D6',
          200: '#ADADAD',
          300: '#858585',
          400: '#5C5C5C',
          500: '#343434',
          600: '#292929',
          700: '#1F1F1F',
          800: '#141414',
          900: '#0A0A0A',
          950: '#050505',
        },
      },
    },
  },
  plugins: [],
};

// font-family: 'Red Hat Display Variable', sans-serif;
