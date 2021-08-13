module.exports = {
  purge: {
    mode: 'all',
    preserveHtmlElements: false,
    content: ['./public/**/*.html'],
  },
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        'rock-salt': ["Rock\\ Salt", 'serif'],
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
