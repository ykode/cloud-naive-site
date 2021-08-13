const cssnano = require('cssnano');

module.exports = {
  plugins : [
    require('tailwindcss'),
    cssnano({
      present: 'default',
    }),
    require('autoprefixer'),
  ],
};
