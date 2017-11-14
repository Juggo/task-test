var path = require('path');

module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist')
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        query: {
          presets:["react", "es2015", "stage-0"]
        }
      }, 
      { test: /\.less$/, loader: "style-loader!css-loader!less-loader" }
    ]
<<<<<<< HEAD
<<<<<<< HEAD
  }
=======
  },
  watch: true
>>>>>>> parent of 40404d7... change
=======
  },
  watch: true
>>>>>>> parent of 40404d7... change
};