import React from 'react'
import cn from 'classnames'
import { useGetProjectPages } from '@src/hooks/useGetProjectPages'
import { Link } from 'gatsby'

type Props = {
  className?: string
}

const Filter = ({ className = '' }: Props) => {
  const projectPages = useGetProjectPages()

  return (
    <div className={(cn(className), 'flex text-primary banner-item-width')}>
      <div>
        <p className='text-parag3'>Flokkar:</p>
      </div>
      <div className='grid pl-3'>
        {projectPages.map((page, key) => (
          <Link key={key} to={page.url} activeClassName='text-primary-light'>
            <p className={cn('text-parag3 hover:text-black')}>{page.title}</p>
          </Link>
        ))}
      </div>
    </div>
  )
}

export default Filter
