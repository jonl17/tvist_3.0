import { graphql } from 'gatsby'

export const fragment = graphql`
  fragment menuFragment on PrismicMenu {
    data {
      name
      pages {
        label
        page {
          url
        }
      }
    }
  }
`
