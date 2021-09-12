import React from 'react'
import { graphql } from 'gatsby'
import '@data/fragments/page.ts'
import SliceZone from '@cmp/slices/sliceZone'
import { pageResolver } from '@src/data/resolvers'

type Props = {
  data: any
}

export const PageTemplate = ({ data }: Props) => {
  if (!data) return null

  const page = pageResolver(data.prismicPage)

  return (
    <section>
      <h1>{page.uid}</h1>
      {page.body.map(slice => (
        <SliceZone slice={slice} />
      ))}
    </section>
  )
}

export const query = graphql`
  query PageQuery($id: String) {
    prismicPage(id: { eq: $id }) {
      ...pageFragment
    }
  }
`

export default PageTemplate
