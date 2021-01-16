module.exports = {
  purge: ['./pages/**/*.js', './components/**/*.js'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        violet: '#5964E0',
        'light-violet': '#939BF4',
        'very-dark-blue': '#19202D',
        midnight: '#121721',
        'light-grey': '#F4F6F8',
        gray: '#9DAEC2',
        'dark-grey': '#6E8098',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
