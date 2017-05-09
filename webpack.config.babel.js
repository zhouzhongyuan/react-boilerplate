import path from 'path';
const config = {
    entry: path.resolve(__dirname, 'src/index.js'),
    output: {
        path: path.resolve(__dirname, 'build'),
        publicPath: "assets",
        filename: 'bundle.js',
    },
    devtool: 'eval-source-map',
    devServer: { inline: true },
    module: {
        loaders: [
            {
                test: /\.js$/,
                loader: 'babel-loader',
            },
            {
                test: /\.css$/,
                loader: 'style-loader!css-loader',
            },
            {
                test: /\.svg/,
                use: {
                    loader: 'svg-url-loader',
                    options: {}
                }
            }
        ],
    },
    watch: true,
};
module.exports = config;
