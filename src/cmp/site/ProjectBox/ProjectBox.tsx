import React, { useState, useEffect } from 'react'
import { Link } from 'gatsby'
import cn from 'classnames'
import { Fade } from 'react-reveal'
import Img, { FluidObject } from 'gatsby-image'

type Props = {
  image: { url: string; alt: string; fluid: FluidObject }
  url: string
  className?: string
}

const ProjectBox: React.FC<Props> = ({
  image,
  url,
  children,
  className = '',
}) => {
  const [loaded, setLoaded] = useState(false)
  const [active, setActive] = useState(false)
  useEffect(() => setLoaded(true), [])

  return (
    <Link
      to={url}
      className={cn(className, 'mb-16 desktop:mb-32')}
      onMouseEnter={() => setActive(true)}
      onMouseLeave={() => setActive(false)}
    >
      <Fade when={loaded}>
        <div className={cn('pr-5 pb-5 image-short')}>
          <Img style={{ height: '100%', width: '100%' }} {...image} />
        </div>
        <div>{children}</div>
      </Fade>
    </Link>
  )
}

export default ProjectBox
