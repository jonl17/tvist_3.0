import { graphql } from 'gatsby'

export const fragment = graphql`
  fragment projectFragmentFull on PrismicProject {
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
        ... on PrismicProjectDataBodyImageGrid {
          ...imageGridProjectSliceFragment
        }
      }
    }
  }

  fragment imageGridProjectSliceFragment on PrismicProjectDataBodyImageGrid {
    id
    slice_type
    items {
      image {
        url
        alt
        gatsbyImageData
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
