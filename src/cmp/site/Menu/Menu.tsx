import React, { useState } from 'react'
import Logo from '@cmp/site/Logo'
import cn from 'classnames'
import Burger from '@cmp/site/Burger'
import Anchor from '@cmp/site/Anchor'
import { PageTheme } from '@src/data/resolvers'

type MenuProps = {
  pages: {
    url: string
    label: string
  }[]
  theme: PageTheme
}

const Menu = ({ pages = [], theme = 'white' }: MenuProps) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  const openMobileMenu = () => setMobileMenuOpen(true)
  const closeMobileMenu = () => setMobileMenuOpen(false)

  return (
    <div
      className={cn(
        'pad h-28 flex items-center justify-between z-10 relative',
        {
          'bg-primary': theme === 'red',
          'bg-white': theme === 'white',
          'bg-primary-lightest': theme === 'pink',
          'bg-transparent': theme === 'transparent',
        }
      )}
    >
      <Logo ghost={theme === 'red' || theme === 'transparent'} />
      <div>
        <div className='block desktop:hidden'>
          <Burger
            ghost={theme === 'red' || theme === 'transparent'}
            isOpen={mobileMenuOpen}
            open={openMobileMenu}
            close={closeMobileMenu}
          />
        </div>
        <div className='hidden desktop:flex'>
          {pages.map((page, i) => (
            <Anchor
              key={i}
              className={cn({
                'mr-6': i !== pages.length - 1,
                'text-white': theme === 'red' || theme === 'transparent',
              })}
              {...page}
            />
          ))}
        </div>
      </div>
    </div>
  )
}

export default Menu
