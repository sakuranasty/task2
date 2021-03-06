const path= require('path');

module.exports = {
  mode: 'production',
  entry: './src/index.js',
  output: {
    path:path.resolve(__dirname,'build'),
    filename: 'index.js'
  },
  module: {
    rules: [
      {test: /\.js$/, exclude: /node_modules/, loader: 'babel-loader'}
    ]
  }
}