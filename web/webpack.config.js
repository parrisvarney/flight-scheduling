module.exports = {
    context: __dirname + "/src",
    entry: "./admin/module.js",
    output: {
        path: __dirname + "/src",
        filename: "module.packed.js"
    },
    module: {
        loaders: [
            {
                test: /\.js$/,
                exclude: /(node_modules|bower_components)/,
                loader: 'babel-loader', // 'babel-loader' is also a valid name to reference
                query: {
                    presets: ['es2015']
                }
            }
        ]
    }
};
