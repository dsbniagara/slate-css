module.exports = {
  plugins: [
    require('./src/postcss/index.js')({
      replaceCSSVars: false
    }),
    require('postcss-nested'),
    require('postcss-color-function'),
    require('postcss-for')
  ]
}