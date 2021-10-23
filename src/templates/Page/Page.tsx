import React from 'react'
import { graphql } from 'gatsby'
import '@data/fragments/page.ts'
import SliceZone from '@cmp/slices/sliceZone'
import { pageResolver } from '@src/data/resolvers'
import { withPrismicPreview } from 'gatsby-plugin-prismic-previews'
import { linkResolver } from '@root/cms/utils/linkResolver'
import Head from '@cmp/site/Head'
import Submenu from '@cmp/site/Submenu'

type Props = {
  data: any
}

export const PageTemplate = ({ data }: Props) => {
  if (!data) return null

  const page = pageResolver(data.prismicPage)
  return (
    <div className='page'>
      <Head {...page}></Head>
      {page.submenu.length > 0 && <Submenu menu={page.submenu} />}
      {page.body.map((slice, key) => (
        <SliceZone key={key} slice={slice} />
      ))}
    </div>
  )
}

export const query = graphql`
  query PageQuery($id: String) {
    prismicPage(id: { eq: $id }) {
      _previewable
      ...pageFragment
    }
  }
`

export default withPrismicPreview(PageTemplate, [
  {
    repositoryName: process.env.GATSBY_PRISMIC_REPO_NAME || '',
    linkResolver,
  },
])
