import { useStaticQuery, graphql } from 'gatsby'
import '@data/fragments/menu.ts'
import { menuResolver } from '@src/data/resolvers'

const useGetMenu = () => {
  const data = useStaticQuery(graphql`
    {
      prismicMenu(tags: { in: "MAIN_MENU" }) {
        ...menuFragment
      }
    }
  `)
  if (!data) return null

  return data.prismicMenu.data.pages.map((page: any) => menuResolver(page))
}

export { useGetMenu }
