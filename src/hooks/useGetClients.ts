import { ProjectInterface, projectResolver } from '@src/data/resolvers'
import { graphql, useStaticQuery } from 'gatsby'
import '@data/fragments/project'

const useGetClients = (): string[] => {
  const data = useStaticQuery(graphql`
    {
      allPrismicProject(sort: { fields: data___client }) {
        nodes {
          ...projectFragment
        }
      }
    }
  `)

  const allProjects: ProjectInterface[] = data.allPrismicProject.nodes.map(
    (node: any) => projectResolver(node)
  )

  let clients: string[] = []

  allProjects.forEach(project => {
    if (!clients.includes(project.client)) {
      clients.push(project.client)
    }
  })

  return clients
}

export { useGetClients }
