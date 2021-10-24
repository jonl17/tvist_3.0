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
      body {
        ... on PrismicProjectDataBodyBanner {
          ...projectBannerSliceFragment
        }
      }
    }
  }

  fragment projectBannerSliceFragment on PrismicProjectDataBodyBanner {
    id
    slice_type
    primary {
      image {
        alt
        url
        gatsbyImageData
      }
    }
  }
`
