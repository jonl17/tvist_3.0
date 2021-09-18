const path = require('path')
const {
  gatsbySourcePrismic,
  gatsbyPrismicPreviews,
} = require('./cms/prismic-config')

module.exports = {
  /* Your site config here */
  plugins: [
    'gatsby-plugin-typescript',
    gatsbySourcePrismic,
    gatsbyPrismicPreviews,
    'gatsby-plugin-postcss',
    {
      resolve: `gatsby-plugin-layout`,
      options: {
        component: require.resolve('./src/layouts/MainLayout/MainLayout.tsx'),
      },
    },
    {
      resolve: `gatsby-plugin-alias-imports`,
      options: {
        alias: {
          '@root': path.resolve(__dirname, '.'),
          '@src': path.resolve(__dirname, 'src'),
          '@cmp': path.resolve(__dirname, 'src/cmp'),
          '@templates': path.resolve(__dirname, 'src/templates'),
          '@styles': path.resolve(__dirname, 'src/styles'),
          '@data': path.resolve(__dirname, 'src/data'),
        },
        extensions: [`ts`, `tsx`],
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    'gatsby-plugin-gatsby-cloud',
  ],
}
