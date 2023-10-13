/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        poppins: ['Poppins'],
      },
      colors:{
        'myblue': {
          '100': '#5597BC',
          '200': '#152950',
          '300': '#0E1E3F'
        },
        'myorange': '#F1A223',
        'mywhite': '#F8F8F8',
        'mygray': '#D9D9D9',
      }
    },
  },
  plugins: [],
}