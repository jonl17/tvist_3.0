import { ContactInterface, contactResolver } from '@src/data/resolvers'
import { graphql, useStaticQuery } from 'gatsby'
import '@data/fragments/contact'

const useGetContact = (): ContactInterface => {
  const data = useStaticQuery(graphql`
    {
      prismicContact {
        ...contactFragment
      }
    }
  `)

  return contactResolver(data.prismicContact)
}

export { useGetContact }
