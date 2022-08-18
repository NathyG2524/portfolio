/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{jsx,js}',
  ],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        robot:['Roboto', "sans-serif"]
      } 
    },

    minWidth: {
      '1/2': '50%',
    }
  },
  plugins: [],
}
