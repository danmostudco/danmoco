const rehypePrism = require('@mapbox/rehype-prism');
const withCSS = require('@zeit/next-css');
const withMDX = require('@next/mdx')({
  extension: /\.mdx?$/,
  options: {
    hastPlugins: [rehypePrism]
  }
});

module.exports = withCSS(
  withMDX({
    pageExtensions: ['js', 'mdx'],
  })
);