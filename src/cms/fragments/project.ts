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
        ... on PrismicProjectDataBodyRichText {
          ...richTextProjectSliceFragment
        }
      }
    }
  }

  fragment richTextProjectSliceFragment on PrismicProjectDataBodyRichText {
    id
    slice_type
    primary {
      text {
        html
      }
      align
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
