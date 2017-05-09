import gulp from 'gulp';
import path from 'path';
var WebpackDevServer = require("webpack-dev-server");
var webpack = require("webpack");
var config = require("./webpack.config.babel.js");
// config.entry.unshift("webpack-dev-server/client?http://localhost:8080/");
// config.entry = config.entry.join('');
console.log(config.entry);
const PORT = 8089;
gulp.task('start', () => {
    return new WebpackDevServer(webpack(config), {
        compress: true,
        contentBase: [path.resolve(__dirname, 'build'), path.resolve(__dirname, 'public')],
        port: PORT,
        hot: true,
        publicPath: '/assets/',
    })
        .listen(PORT, '0.0.0.0', (err) => {
            if (err) throw ('webpack-dev-server', err);

            console.log(`[serve]`, `Listening at 0.0.0.0:${PORT}`);
        });
});