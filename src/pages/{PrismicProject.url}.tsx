import React from 'react'
import { graphql } from 'gatsby'
import '@data/fragments/project.ts'
import { projectResolver } from '@src/data/resolvers'

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
      ...projectFragment
    }
  }
`

export default ProjectTemplate
