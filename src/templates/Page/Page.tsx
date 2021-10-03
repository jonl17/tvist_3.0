import React, { useEffect } from 'react'
import { graphql } from 'gatsby'
import '@data/fragments/page.ts'
import SliceZone from '@cmp/slices/sliceZone'
import { pageResolver } from '@src/data/resolvers'
import { useTheme } from '@src/context/theme'
import Img from 'gatsby-image'

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
      <div className='my-10 desktop:w-1/3'>
        {page.title && <h1>{page.title}</h1>}
        {page.text.html && (
          <div
            className='text-primary'
            dangerouslySetInnerHTML={{ __html: page.text.html }}
          />
        )}
      </div>
      {page.featuredImage.url && (
        <div className='h-screen w-full relative'>
          <div className='absolute h-full w-full'>
            <Img {...page.featuredImage} />
          </div>
        </div>
      )}
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

export default PageTemplate
