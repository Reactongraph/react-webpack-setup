var path = require('path');

module.exports = {
    // entry: name of the top level file or set of files that we want to include in our build, can be a single file or an array of files.
    // For many entry points use arrays as a value of entry property
    entry: path.resolve(__dirname, 'src') + '/app/index.js',
    // output: an object containing your output configuration. In our build, we only specify the filename key (bundle.js) for the name of the file we want Webpack to build.
    output: {
        path: path.resolve(__dirname, 'dist') + '/app',
        filename: 'bundle.js',
        publicPath: '/app/'
    },
    module: {
        rules: [
            {
                // test — a regular expression that tests what kind of files to run through this loader,
                // exclude — which files the loader should exclude /ignore,
                // loader — the name of the loader we are going to use,
                // query — You can pass options to the loader by writing them as a query string
                test: /\.jsx?$/,
                exclude: /node_modules/,
                include: path.resolve(__dirname, 'src'),
                loader: 'babel-loader',
                query: {
                    presets: ['react', 'es2015']
                }
            },
            {
                test: /\.css$/,
                loader: 'style-loader!css-loader'
            },
            {
                test: /\.scss$/,
                exclude: [/node_modules/],
                use: [{
                  loader: 'style-loader'
                }, {
                  loader: 'css-loader'
                }, {
                  loader: 'sass-loader'
                }]
              },
              {
                test: /\.(png|jpg|gif)$/,
                loader: 'url-loader?limit=8192'
              }
        ]
    }
};