import React from 'react'
import { graphql } from 'gatsby'
import '@data/fragments/project.ts'
import { projectResolver } from '@src/data/resolvers'
import ProjectHead from '@src/cmp/site/ProjectHead'

type Props = {
  data: any
}

export const ProjectTemplate = ({ data }: Props) => {
  if (!data) return null
  const project = projectResolver(data.prismicProject)

  return (
    <div className='project'>
      <ProjectHead {...project} />
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

export default ProjectTemplate
