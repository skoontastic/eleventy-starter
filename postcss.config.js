const purgecss = require('@fullhuman/postcss-purgecss')({
  content: [
    './src/assets/js/**/*.js',
    './src/site/**/*.liquid',
    './src/site/**/*.md',
  ],
  defaultExtractor: content => content.match(/[\w-/:]+(?<!:)/g) || [],
})

module.exports = {
  plugins: [
    require('tailwindcss'),
    require('postcss-nested'),
    ...(process.env.NODE_ENV === 'production' ? [purgecss] : []),
  ],
}
