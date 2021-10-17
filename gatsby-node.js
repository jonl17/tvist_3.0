const path = require('path')
const slugify = require('slugify')

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions

  const pages = await graphql(`
    {
      allPrismicPage {
        nodes {
          id
          url
          uid
          tags
          data {
            theme
          }
        }
      }
    }
  `)
  const projects = await graphql(`
    {
      allPrismicProject {
        nodes {
          id
          url
          uid
          tags
        }
      }
    }
  `)

  const pageTemplate = path.resolve(__dirname, `src/templates/Page/Page.tsx`)
  const projectTemplate = path.resolve(
    __dirname,
    `src/templates/Project/Project.tsx`
  )

  // pages
  pages.data.allPrismicPage.nodes.forEach(node => {
    createPage({
      path: node.url,
      component: pageTemplate,
      context: {
        ...node,
      },
    })
  })
  // projects
  projects.data.allPrismicProject.nodes.forEach(node => {
    createPage({
      path: node.url,
      component: projectTemplate,
      context: {
        ...node,
      },
    })
  })
}
