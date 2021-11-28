const path = require('path')
const {
  gatsbySourcePrismic,
  gatsbyPrismicPreviews,
} = require('./src/cms/prismic-config')

module.exports = {
  plugins: [
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
          '@cms': path.resolve(__dirname, 'src/cms'),
        },
        extensions: [`ts`, `tsx`],
      },
    },
    'gatsby-plugin-image',
    'gatsby-transformer-sharp',
    'gatsby-plugin-sharp',
  ],
}
