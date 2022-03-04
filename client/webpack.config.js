const webpack = require('webpack');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const isProd = process.env.NODE_ENV || 'development';
const Dotenv = require('dotenv-webpack');

const plugins = [
    new Dotenv({
        path: `./.env.${isProd === 'development' ? "dev" : "prod"}`,
    }),
    new HtmlWebpackPlugin({
        title: 'PerfAnalytics.JS',
        template: '!!ejs-loader!src/index.html'
    }),
    new webpack.LoaderOptionsPlugin({
        options: {
            tslint: {
                emitErrors: true,
                failOnHint: true
            }
        }
    })
];

var config = {
    devtool: isProd ? 'hidden-source-map' : 'source-map',
    context: path.resolve('./src'),
    entry: {
        app: './index.ts'
    },
    output: {
        path: path.resolve('./dist'),
        filename: 'perfanalytics.bundle.js'
    },
    module: {
        rules: [
            {
                enforce: 'pre',
                test: /\.tsx?$/,
                exclude: [/\/node_modules\//],
                use: ['awesome-typescript-loader', 'source-map-loader']
            },
            !isProd
                ? {
                    test: /\.(js|ts)$/,
                    loader: 'istanbul-instrumenter-loader',
                    exclude: [/\/node_modules\//],
                    query: {
                        esModules: true
                    }
                }
                : null,
            {test: /\.html$/, loader: 'html-loader'},
            {test: /\.css$/, loaders: ['style-loader', 'css-loader']}
        ].filter(Boolean)
    },
    resolve: {
        extensions: ['.ts', '.js']
    },
    plugins: plugins,
    devServer: {
        contentBase: path.join(__dirname, 'dist/'),
        compress: true,
        port: 5000,
        hot: true
    }
};

module.exports = config;
