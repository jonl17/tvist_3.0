import React from 'react'
import Menu from '@cmp/site/Menu'
import { useGetMenu } from '@src/hooks/useGetMenu'

const MainLayout: React.FC = ({ children }) => {
  const menu = useGetMenu()
  return (
    <main>
      <Menu pages={menu} />
      {children}
    </main>
  )
}

export default MainLayout
