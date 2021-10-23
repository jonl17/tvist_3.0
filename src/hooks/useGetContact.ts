import { ContactInterface, contactResolver } from '@src/data/resolvers'
import { graphql, useStaticQuery } from 'gatsby'
import '@cms/fragments/contact'

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
