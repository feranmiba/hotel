/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
     "./src/**/*.{js,jsx,ts,tsx}" ,
    "./components/**/*.{js,jsx,ts,tsx}"
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: [ 'DM Serif Text', 'italic'],
        display: [ 'DM Serif Display', 'swap' ],
        readex: ['Readex Pro', 'swap'],
        din: ['Bebas Neue','swap']
      },
    },
  },
  plugins: [],
}

