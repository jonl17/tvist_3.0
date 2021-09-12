import React from 'react'
import { graphql } from 'gatsby'

type Props = {
  data: any
}

export const PageTemplate = ({ data }: Props) => {
  if (!data) return null
  const document = data.prismicPage

  return (
    <section>
      <h1>{document.uid}</h1>
    </section>
  )
}

export const query = graphql`
  query PageQuery($id: String) {
    prismicPage(id: { eq: $id }) {
      uid
    }
  }
`

export default PageTemplate
