import React from 'react'
import { Link } from 'gatsby'
import cn from 'classnames'

type Props = {
  url: string
  label: string
  className?: string
}

const Anchor = ({ url, label, className = '' }: Props) => {
  return (
    <Link
      to={url}
      activeClassName={cn('underline text-primary')}
      partiallyActive
    >
      <h2 className={className}>{label} </h2>
    </Link>
  )
}

export default Anchor
