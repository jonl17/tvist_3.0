import { MenuInterface } from '@src/data/resolvers'
import React from 'react'
import { Link } from 'gatsby'
import cn from 'classnames'
import Icon from '@cmp/site/Icon'
import { useLocation } from '@reach/router'

type Props = {
  menu: MenuInterface[]
}

const Submenu = ({ menu }: Props) => {
  const { pathname } = useLocation()
  const isCurrentPath = (path: string) => {
    console.log(path, pathname)
    return path === pathname || path + '/' === pathname
  }
  return (
    <div className='pad relative my-10 flex justify-end'>
      <div className='flex'>
        {menu.map((m, key) => (
          <Link
            key={key}
            to={m.url}
            className={cn('text-parag', {
              'mr-5': key !== menu.length - 1,
              'text-primary': isCurrentPath(m.url),
              'text-primary-light': !isCurrentPath(m.url),
            })}
          >
            <p className='text-parag3 flex items-center'>
              <Icon
                className={cn('mr-2 stroke-current', {
                  'text-primary fill-current': isCurrentPath(m.url),
                  'text-primary-light': !isCurrentPath(m.url),
                })}
                type='ellipse'
              />
              {m.label}
            </p>
          </Link>
        ))}
      </div>
    </div>
  )
}

export default Submenu
