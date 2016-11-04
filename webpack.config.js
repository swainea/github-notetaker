// this config file takes the entry, runs that code through react and es6 transformations, and spits it out in bundle.js

module.exports = {
  //this is where we tell webpack where our root component is
  entry: "./app/App.js",
  // this is where we tell webpack to put our compiled code
  output: {
    filename: "public/bundle.js"
  },
  module: {
    // this is where we tell webpack what to actually do with the compiled code
    loaders: [
      {
        test: /\.jsx?$/,
        exclude: /(node_modules|bower_components)/,
        loader: 'babel',
        // these are our babel transformations - we can now write es6 and react
        query: {
          presets: ['react', 'es2015']
        }
      }
    ]
  }
}
