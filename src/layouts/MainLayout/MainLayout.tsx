import React from 'react'
import Menu from '@cmp/site/Menu'
import { useGetMenu } from '@src/hooks/useGetMenu'
import { useTheme } from '@src/context/theme'
import Footer from '@cmp/site/Footer'
import Filter from '@cmp/site/Filter'
import Head from '@cmp/site/Head'

type PageContext = {
  layout?: 'project-page'
  data?: {
    title: string
  }
}

const MainLayout: React.FC<{ pageContext: PageContext }> = ({
  children,
  pageContext,
}) => {
  const menu = useGetMenu()

  const { theme } = useTheme()

  console.log(pageContext)

  if (pageContext.layout === 'project-page') {
    return (
      <main>
        <Menu theme={theme} pages={menu} />
        <Head
          title={pageContext.data?.title}
          className='bg-white text-primary'
          type='white'
        >
          <Filter className='desktop::w-1/2' />
        </Head>
        {children}
        <Footer />
      </main>
    )
  }
  // the default layout
  return (
    <main>
      <Menu theme={theme} pages={menu} />
      {children}
      <Footer />
    </main>
  )
}

export default MainLayout
