import React, { useState } from 'react'
import Logo from '@cmp/site/Logo'
import cn from 'classnames'
import Burger from '@cmp/site/Burger'
import Anchor from '@cmp/site/Anchor'

type MenuProps = {
  pages: {
    url: string
    label: string
  }[]
  theme: 'ghost' | 'primary'
}

const Menu = ({ pages = [], theme = 'primary' }: MenuProps) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  const openMobileMenu = () => setMobileMenuOpen(true)
  const closeMobileMenu = () => setMobileMenuOpen(false)

  return (
    <div
      className={cn(
        'px-6 desktop:px-12 h-28 flex items-center justify-between',
        {
          'bg-primary': theme === 'primary',
        }
      )}
    >
      <Logo ghost={theme === 'primary'} />
      <div>
        <div className='block desktop:hidden'>
          <Burger
            ghost={theme === 'primary'}
            isOpen={mobileMenuOpen}
            open={openMobileMenu}
            close={closeMobileMenu}
          />
        </div>
        <div className='hidden desktop:flex banner-item-width'>
          {pages.map((page, i) => (
            <Anchor
              key={i}
              className={cn({
                'mr-6': i !== pages.length - 1,
                'text-white': theme === 'primary',
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
