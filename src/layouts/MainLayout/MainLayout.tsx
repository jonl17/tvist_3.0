import React from 'react'
import Menu from '@cmp/site/Menu'
import { useGetMenu } from '@src/hooks/useGetMenu'
import { useTheme } from '@src/context/theme'
import Footer from '@cmp/site/Footer'

const MainLayout: React.FC = ({ children }) => {
  const menu = useGetMenu()

  const { theme } = useTheme()

  return (
    <main>
      <Menu theme={theme} pages={menu} />
      {children}
      <Footer />
    </main>
  )
}

export default MainLayout
