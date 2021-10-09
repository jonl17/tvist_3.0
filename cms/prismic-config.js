require('dotenv').config({
  path: `.env.${process.env.NODE_ENV}`,
})

const { GATSBY_PRISMIC_REPO_NAME, PRISMIC_ACCESS_TOKEN } = process.env

const gatsbySourcePrismic = {
  resolve: 'gatsby-source-prismic',
  options: {
    repositoryName: GATSBY_PRISMIC_REPO_NAME,
    accessToken: PRISMIC_ACCESS_TOKEN,
    schemas: {
      page: require('./schemas/page.json'),
      project: require('./schemas/project.json'),
      menu: require('./schemas/menu.json'),
      contact: require('./schemas/contact.json'),
      project_page: require('./schemas/project_page.json'),
    },
    linkResolver: require('./utils/linkResolver').linkResolver,
  },
}

const gatsbyPrismicPreviews = {
  resolve: 'gatsby-plugin-prismic-previews',
  options: {
    repositoryName: GATSBY_PRISMIC_REPO_NAME,
  },
}

module.exports = {
  gatsbySourcePrismic,
  gatsbyPrismicPreviews,
}
