import React from 'react'
import {
  withPrismicUnpublishedPreview,
  componentResolverFromMap,
} from 'gatsby-plugin-prismic-previews'
import { linkResolver } from '@cms/utils/linkResolver'
import PageTemplate from '@src/templates/Page/Page'

const NotFoundPage = () => {
  return <div>Page not found | 404</div>
}

export default withPrismicUnpublishedPreview(NotFoundPage, [
  {
    repositoryName: process.env.GATSBY_PRISMIC_REPO_NAME || '',
    linkResolver,
    componentResolver: componentResolverFromMap({
      page: PageTemplate,
    }),
  },
])
