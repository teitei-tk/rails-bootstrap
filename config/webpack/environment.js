const { environment } = require('@rails/webpacker')

environment.loaders.append('typescript', {
  test: /\.tsx?$/,
  use: 'awesome-typescript-loader'
})

module.exports = environment
