import { graphql } from 'gatsby'

export const fragment = graphql`
  fragment projectFragment on PrismicProject {
    uid
    url
    tags
    data {
      title {
        text
      }
      client
      excerpt {
        html
      }
      featured_image {
        alt
        url
        gatsbyImageData
      }
    }
  }
`
