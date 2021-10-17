import { graphql } from 'gatsby'
import './project'
import './menu'

export const fragment = graphql`
  fragment pageFragment on PrismicPage {
    url
    uid
    tags
    data {
      title
      theme
      description {
        html
      }
      sub_menu {
        document {
          ... on PrismicMenu {
            ...menuFragment
          }
        }
      }

      body {
        ... on PrismicPageDataBodyProjects {
          ...projectsSliceFragment
        }
        ... on PrismicPageDataBodyRichText {
          ...richTextSliceFragment
        }
        ... on PrismicPageDataBodyBanner {
          ...bannerSliceFragment
        }
      }
    }
  }

  fragment bannerSliceFragment on PrismicPageDataBodyBanner {
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

  fragment richTextSliceFragment on PrismicPageDataBodyRichText {
    id
    slice_type
    primary {
      text {
        html
        text
        raw
      }
    }
  }

  fragment projectsSliceFragment on PrismicPageDataBodyProjects {
    id
    slice_type
  }
`
