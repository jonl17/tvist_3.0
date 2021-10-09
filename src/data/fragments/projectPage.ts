import { graphql } from 'gatsby'
import './project'

export const fragment = graphql`
  fragment projectPageFragment on PrismicProjectPage {
    url
    uid
    tags
    data {
      title
      filter
      text {
        html
      }
    }
  }
`
