import React from 'react'
import Icon from '@cmp/site/Icon'
import cn from 'classnames'
import { Link } from 'gatsby'

type Props = {
  ghost?: boolean
}

const Logo = ({ ghost }: Props) => {
  return (
    <Link to='/'>
      <Icon
        className={cn('hidden desktop:block', {
          'svg-ghost': ghost,
        })}
        type='logo-main'
      />
      <Icon
        className={cn('desktop:hidden', {
          'svg-ghost': ghost,
        })}
        type='logo-secondary'
      />
    </Link>
  )
}

export default Logo
