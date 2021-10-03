import React, { useEffect } from 'react'
import { graphql } from 'gatsby'
import '@data/fragments/page.ts'
import SliceZone from '@cmp/slices/sliceZone'
import { pageResolver } from '@src/data/resolvers'
import { useTheme } from '@src/context/theme'
import { withPrismicPreview } from 'gatsby-plugin-prismic-previews'
import { linkResolver } from '@root/cms/utils/linkResolver'

type Props = {
  data: any
}

export const PageTemplate = ({ data }: Props) => {
  if (!data) return null

  const page = pageResolver(data.prismicPage)

  const { updateTheme } = useTheme()

  useEffect(() => {
    updateTheme('ghost')
  }, [])

  return (
    <div className='page pad'>
      <div className='my-10 desktop:w-1/3'></div>
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
