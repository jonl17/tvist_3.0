import './src/styles/global.css'
import React from 'react'
import {
  PrismicPreviewProvider,
  componentResolverFromMap,
} from 'gatsby-plugin-prismic-previews'
import { linkResolver } from './src/cms/utils/linkResolver'

import PageTemplate from './src/templates/Page/Page.tsx'
import ProjectTemplate from './src/templates/Project/Project.tsx'

export const wrapRootElement = ({ element }) => (
  <PrismicPreviewProvider
    repositoryConfigs={[
      {
        repositoryName: process.env.GATSBY_PRISMIC_REPO_NAME,
        linkResolver,
        componentResolver: componentResolverFromMap({
          page: PageTemplate,
          project: ProjectTemplate,
        }),
      },
    ]}
  >
    {element}
  </PrismicPreviewProvider>
)
