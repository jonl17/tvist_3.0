import React from 'react'
import { Link } from 'gatsby'

type Props = {
  url: string
  label: string
  className?: string
}

const Anchor = ({ url, label, className = '' }: Props) => {
  return (
    <Link activeClassName='anchor-active' partiallyActive to={url}>
      <h2 className={className}>{label}</h2>
    </Link>
  )
}

export default Anchor
