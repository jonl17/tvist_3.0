import { graphql, useStaticQuery } from 'gatsby'
import '@data/fragments/projectPage'
import { ProjectPageInterface, projectPageResolver } from '@src/data/resolvers'

const useGetProjectPages = (): ProjectPageInterface[] => {
  const result = useStaticQuery(graphql`
    {
      allPrismicProjectPage {
        nodes {
          ...projectPageFragment
        }
      }
    }
  `)

  return result.allPrismicProjectPage.nodes.map((node: any) =>
    projectPageResolver(node)
  )
}

export { useGetProjectPages }
