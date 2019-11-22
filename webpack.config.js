module.exports = {
    entry: __dirname + "/src/index",
    target: "web",
    output: {
        filename: "bundle.js",
        publicPath: "/"
    },
    devServer: {
        contentBase: __dirname + "/src"
    },
    module: {
        loaders: [
            {
                enforce: "pre",
                test: /\.js$/,
                exclude: /node_modules/,
                loader: "eslint-loader"
            },
            
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loaders: ["babel-loader"]
            },
            {
                test: /(\.css)$/,
<<<<<<< HEAD
                loaders: []
=======
                loaders: ["style", "css"]
>>>>>>> 7ce68255b56c4e290e40f203479dedb01933a4f0
            }
        ]
    }
};
