import React from 'react'
import { graphql } from 'gatsby'

type Props = {
  data: any
}

export const ProjectTemplate = ({ data }: Props) => {
  if (!data) return null
  const document = data.prismicProject

  return (
    <section>
      <h1>{document.uid}</h1>
    </section>
  )
}

export const query = graphql`
  query ProjectQuery($id: String) {
    prismicProject(id: { eq: $id }) {
      uid
    }
  }
`

export default ProjectTemplate
