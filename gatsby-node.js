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
  const projectPages = await graphql(`
    {
      allPrismicProjectPage {
        nodes {
          id
          url
          uid
          tags
          data {
            title
          }
        }
      }
    }
  `)

  const pageTemplate = path.resolve(__dirname, `src/templates/Page/Page.tsx`)
  const projectTemplate = path.resolve(
    __dirname,
    `src/templates/Project/Project.tsx`
  )
  const projectPageTemplate = path.resolve(
    __dirname,
    'src/templates/ProjectPage/ProjectPage.tsx'
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
  // project pages
  projectPages.data.allPrismicProjectPage.nodes.forEach(node => {
    createPage({
      path: node.url,
      component: projectPageTemplate,
      context: {
        layout: 'project-page',
        ...node,
      },
    })
  })
}
