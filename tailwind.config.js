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
        grey: '#F2F2F2',
      },
      height: {
        'header-mobile': '136px',
        'header-tablet': '160px',
        'header-desktop': '160px',
      },
      minHeight: {
        'applycard-mobile': '372px',
      },
      backgroundImage: (theme) => ({
        'header-mobile': "url('/images/bg-header-mobile.svg')",
        'header-tablet': "url('/images/bg-header-tablet.svg')",
        'header-desktop': "url('/images/bg-header-desktop.svg')",
        'applycard-mobile': "url('/images/bg-applycard-mobile.svg')",
      }),
    },
    fontFamily: {
      sans: 'Kumbh Sans, sans-serif',
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
