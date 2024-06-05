const path = require('path');
const TerserPlugin = require('terser-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
    entry: './src/index.js',
    output: {
        // filename: 'bundle.js',
        filename: 'bundle.[contenthash].js', // browser caching
        path: path.resolve(__dirname, './dist'),
        publicPath: 'dist/',
        // clean: {
        //     dry: true,
        //     keep: /\.css/,
        // }
    },
    mode: 'none',
    module: {
        rules: [
            // {
            //     test: /\.(ttf)$/,
            //     type: 'asset/resource',
            // },
            {
                test: /\.(png|jpg)$/,
                // type: 'asset/inline', // images and svgs are embeded in the bundle.js file as base64 representation, reduces http requests, increase file size
                // type: 'asset/resource', // images and svgs need separate http requests, reduces file size on bundle.js
                type: 'asset', // webpack will automatically choose between inline and resource types based on the file size(default 8Kb), file size < 8Kb then inline and if > 8Kb then resource
                parser: {
                    dataUrlCondition: {
                        maxSize: 1 * 1024 * 1024 // 3Mb
                    }
                }
            },
            {
                test: /\.txt/,
                type: 'asset/source',
            },
            // importing css files
            {
                test: /\.css$/,
                use: [
                    // 'style-loader',
                    MiniCssExtractPlugin.loader,
                    'css-loader'
                ]
            },
            // importing sass files
            {
                test: /\.scss$/,
                use: [
                    // 'style-loader',
                    MiniCssExtractPlugin.loader,
                    'css-loader',
                    'sass-loader'
                ]
            },
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: [
                            '@babel/env'
                        ],
                        plugins: [
                            '@babel/plugin-proposal-class-properties'
                        ]
                    }
                }
            }

        ]
    },
    plugins: [
        new TerserPlugin(), // Minification of Javascript code
        new MiniCssExtractPlugin({ // Minification and extraction of CSS
            filename: 'style.[contenthash].css',
        }),
        new CleanWebpackPlugin(),
        // new CleanWebpackPlugin(
        //     {
        //         cleanOnceBeforeBuildPatterns: [
        //             '**/*',
        //             path.join(process.cwd(), 'build/**/*'),
        //         ]
        //     }
        // ),
    ]
}; 