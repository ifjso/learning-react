const path = require('path')

module.exports = {
    mode: "development",
    entry: "./src/index.js",
    output: {
        path: path.join(__dirname, "dist", "assets"),
        filename: "bundle.js",
        sourceMapFilename: "bundle.map",
    },
    devtool: "#source-map",
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /(node_moudles)/,
                loader: "babel-loader",
                query: {
                    presets: ["env", "react", "stage-2"]
                }
            },
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader', {
                    loader: 'postcss-loader',
                    options: {
                        plugins: () => [require('autoprefixer')]
                    }
                }]
            },
            {
                test: /\.scss/,
                use: ['style-loader','css-loader', {
                    loader: 'postcss-loader',
                    options: {
                        plugins: () => [require('autoprefixer')]
                    }
                }, 'sass-loader']
            }
        ]
    },
    optimization: {
        minimize: true
    }
}
