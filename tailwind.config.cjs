/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          lightness: '#C5E4E7',
          light: '#A0E8DF',
          default: '#22C2AB',
          dark: '#00474B',
        }
      }
    },
  },
  plugins: [],
}
