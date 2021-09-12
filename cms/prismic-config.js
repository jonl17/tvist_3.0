require('dotenv').config({
  path: `.env.${process.env.NODE_ENV}`,
})

const { PRISMIC_REPO_NAME, PRISMIC_ACCESS_TOKEN } = process.env

const gatsbySourcePrismic = {
  resolve: 'gatsby-source-prismic',
  options: {
    repositoryName: PRISMIC_REPO_NAME,
    accessToken: PRISMIC_ACCESS_TOKEN,
    schemas: {
      page: require('./schemas/page.json'),
      project: require('./schemas/project.json'),
      menu: require('./schemas/menu.json'),
    },
    linkResolver: require('./utils/linkResolver').linkResolver,
  },
}

module.exports = {
  gatsbySourcePrismic,
}
