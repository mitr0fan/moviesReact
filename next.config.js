const withSass = require('@zeit/next-sass');
const withCSS = require('@zeit/next-css');

module.exports = withCSS(withSass({
    webpack: (config) => {
        config.module.rules.push({
            test: /\.(ttf|eot|svg|png|jpg|gif|ico)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
            loader: 'file-loader',
            options: {
                outputPath: './static/css',
                publicPath: './'
            }
        });

        return config;
    }
}));
