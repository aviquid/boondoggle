const path = require('path');

module.exports = {
  entry: {
    background: './src/background.js',
    content: './src/content.js'
  },
  output: {
    filename: 'bundle.[name].js',
    path: path.resolve(__dirname, 'src/build')
  },
  mode: 'production'
};
