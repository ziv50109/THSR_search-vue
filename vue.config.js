module.exports = {
  'publicPath': process.env.NODE_ENV === 'production' ? '' : '/',
  'devServer': {},
  'transpileDependencies': [
    'vuetify'
  ]
}
