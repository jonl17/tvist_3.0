import * as React from 'react'
import { withPrismicPreviewResolver } from 'gatsby-plugin-prismic-previews'

// Update the path to your Link Resolver
import { linkResolver } from '@root/cms/utils/linkResolver'

import { config } from 'dotenv'

config({
  path: `.env.${process.env.NODE_ENV}`,
})

const PreviewPage = props => {
  console.log(props)
  return (
    <div>
      <h1>Loading preview…</h1>
    </div>
  )
}

console.log('REEEEEEPOOOO NAME: ', process.env.GATSBY_PRISMIC_REPO_NAME)

export default withPrismicPreviewResolver(PreviewPage, [
  {
    repositoryName: process.env.GATSBY_PRISMIC_REPO_NAME ?? '',
    linkResolver,
  },
])
