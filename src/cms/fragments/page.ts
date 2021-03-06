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
        ... on PrismicPageDataBodyProjectGroups {
          ...projectGroupsSliceFragment
        }
        ... on PrismicPageDataBodyStaff {
          ...staffSliceFragment
        }
        ... on PrismicPageDataBodyHero {
          ...heroSliceFragment
        }
      }
    }
  }

  fragment heroSliceFragment on PrismicPageDataBodyHero {
    slice_type
    id
    primary {
      introduction_text {
        html
      }
    }
    items {
      image {
        alt
        url
        gatsbyImageData
      }
      project {
        document {
          ...projectFragmentFull
        }
      }
    }
  }

  fragment projectGroupsSliceFragment on PrismicPageDataBodyProjectGroups {
    slice_type
    id
    items {
      group {
        document {
          ... on PrismicProjectGroup {
            data {
              group_name {
                text
              }
              projects {
                project {
                  document {
                    ... on PrismicProject {
                      ...projectFragmentFull
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
  }

  fragment staffSliceFragment on PrismicPageDataBodyStaff {
    id
    slice_type
    items {
      image {
        alt
        url
        gatsbyImageData
      }
      full_name
      role
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
        richText
      }
    }
  }

  fragment projectsSliceFragment on PrismicPageDataBodyProjects {
    id
    slice_type
    items {
      project {
        document {
          ... on PrismicProject {
            ...projectFragmentFull
          }
        }
      }
    }
  }
`
