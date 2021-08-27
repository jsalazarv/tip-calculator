module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      cyan: {
        lightest: '#F4FAFA',
        light: '#C5E4E7',
        DEFAULT: '#26C0AB',
        dark: '#00494D',
        darker: '#5E7A7D',
        darkest: '#7F9C9F',
      },
    },
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
