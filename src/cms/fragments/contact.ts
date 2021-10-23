import { graphql } from 'gatsby'

export const fragment = graphql`
  fragment contactFragment on PrismicContact {
    data {
      address
      city
      telephone
      social_media {
        platform
        url {
          url
        }
      }
      ways_to_contact {
        text
        email {
          url
        }
      }
    }
  }
`
