const path = require('path')

module.exports = {
    mode: "production",
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
            }
        ]
    },
    optimization: {
        minimize: true
    }
}
