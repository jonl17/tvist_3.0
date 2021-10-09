import React, { useEffect } from 'react'
import { graphql } from 'gatsby'
import '@data/fragments/page.ts'
import { projectPageResolver } from '@src/data/resolvers'
import { useTheme } from '@src/context/theme'
import { withPrismicPreview } from 'gatsby-plugin-prismic-previews'
import { linkResolver } from '@root/cms/utils/linkResolver'
import Projects from '@cmp/slices/Projects'
import { useGetProjects } from '@src/hooks/useGetProjects'

type Props = {
  data: any
}

export const ProjectPageTemplate = ({ data }: Props) => {
  if (!data) return null

  const projectPage = projectPageResolver(data.prismicProjectPage)

  const { updateTheme } = useTheme()

  const projects = useGetProjects()

  useEffect(() => {
    updateTheme('ghost')
  }, [])
  return (
    <div className='page pad'>
      <Projects projects={projects} />
    </div>
  )
}

export const query = graphql`
  query ProjectPageQuery($id: String) {
    prismicProjectPage(id: { eq: $id }) {
      _previewable
      ...projectPageFragment
    }
  }
`

export default withPrismicPreview(ProjectPageTemplate, [
  {
    repositoryName: process.env.GATSBY_PRISMIC_REPO_NAME || '',
    linkResolver,
  },
])
