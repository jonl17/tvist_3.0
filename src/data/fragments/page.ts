import { graphql } from 'gatsby'
import './project'

export const fragment = graphql`
  fragment pageFragment on PrismicPage {
    url
    uid
    tags
    data {
      title
      body {
        ... on PrismicPageDataBodyProjects {
          ...projectsSliceFragment
        }
      }
    }
  }

  fragment projectsSliceFragment on PrismicPageDataBodyProjects {
    id
    slice_type
    items {
      project {
        document {
          ...projectFragment
        }
      }
    }
  }
`
