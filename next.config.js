const rehypePrism = require('@mapbox/rehype-prism');
const withMDX = require('@next/mdx')({
    extension: /\.mdx?$/u,
    options: {
        rehypePlugins: [rehypePrism]
    }
});

module.exports = withMDX({
    env: {
        MAILCHIMP_API_KEY: process.env.MAILCHIMP_API_KEY,
        MAILCHIMP_LIST_ID: process.env.MAILCHIMP_LIST_ID
    },
    pageExtensions: ['js', 'mdx']
});
