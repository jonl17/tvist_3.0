import React from 'react'
import { graphql } from 'gatsby'
import '@data/fragments/project.ts'
import { projectResolver } from '@src/data/resolvers'
import { linkResolver } from '@root/cms/utils/linkResolver'
import { withPrismicPreview } from 'gatsby-plugin-prismic-previews'

type Props = {
  data: any
}

export const ProjectTemplate = ({ data }: Props) => {
  if (!data) return null
  const project = projectResolver(data.prismicProject)

  return (
    <div className='project'>
      <div className='p-6 desktop:p-12 max-w-4xl'>
        <h1 className='mb-6'>{project.title}</h1>
        <div dangerouslySetInnerHTML={{ __html: project.excerpt.html }} />
      </div>
    </div>
  )
}

export const query = graphql`
  query ProjectQuery($id: String) {
    prismicProject(id: { eq: $id }) {
      _previewable
      ...projectFragment
    }
  }
`

export default withPrismicPreview(ProjectTemplate, [
  {
    repositoryName: process.env.GATSBY_PRISMIC_REPO_NAME ?? '',
    linkResolver,
  },
])
