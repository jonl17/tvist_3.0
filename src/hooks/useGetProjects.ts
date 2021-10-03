import { ProjectInterface, projectResolver } from '@src/data/resolvers'
import { graphql, useStaticQuery } from 'gatsby'
import '@data/fragments/project'

const useGetProjects = (): ProjectInterface[] => {
  const data = useStaticQuery(graphql`
    {
      allPrismicProject {
        nodes {
          ...projectFragment
        }
      }
    }
  `)

  const allProjects = data.allPrismicProject.nodes.map((node: any) =>
    projectResolver(node)
  )

  return allProjects
}

export { useGetProjects }
