import { graphql } from 'gatsby'
import './project'

export const fragment = graphql`
  fragment pageFragment on PrismicPage {
    url
    uid
    tags
    data {
      title
      text {
        html
      }
      featured_image {
        url
        alt
        fluid {
          ...GatsbyImgixFluid
        }
      }
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
      tall
      wide
      project {
        document {
          ...projectFragment
        }
      }
    }
  }
`
