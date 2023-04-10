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
          100: '#F3F9FA',
          200: '#C5E4E7',
          300: '#9FE8DF',
          400: '#26C2AE',
          500: '#00474B',
          600: '#5E7A7D',
        }
      }
    },
  },
  plugins: [],
}
