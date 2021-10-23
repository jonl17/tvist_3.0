import React from 'react'
import Menu from '@cmp/site/Menu'
import { useGetMenu } from '@src/hooks/useGetMenu'
import Footer from '@cmp/site/Footer'
import { PageTheme } from '@src/data/resolvers'

type Props = {
  pageContext: {
    data?: {
      theme: PageTheme
    }
  }
}

const MainLayout: React.FC<Props> = ({ children, pageContext }) => {
  const menu = useGetMenu()
  return (
    <main>
      <Menu
        theme={pageContext.data ? pageContext.data.theme : 'white'}
        pages={menu}
      />
      {children}
      <Footer />
    </main>
  )
}

export default MainLayout
