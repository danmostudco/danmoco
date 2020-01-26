const rehypePrism = require('@mapbox/rehype-prism');
const withCSS = require('@zeit/next-css');
const withMDX = require('@next/mdx')({
    extension: /\.mdx?$/u,
    options: {
        hastPlugins: [rehypePrism]
    }
});

module.exports = withCSS(
    withMDX({
        env: {
            MAILCHIMP_API_KEY: process.env.MAILCHIMP_API_KEY,
            MAILCHIMP_LIST_ID: process.env.MAILCHIMP_LIST_ID
        },
        pageExtensions: ['js', 'mdx']
    })
);
