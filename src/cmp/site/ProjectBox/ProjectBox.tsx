import React, { useState, useEffect } from 'react'
import { Link } from 'gatsby'
import cn from 'classnames'
import { Fade } from 'react-reveal'
import { GatsbyImage, getImage } from 'gatsby-plugin-image'
import { ImageType } from '@src/data/resolvers'

type Props = {
  image: ImageType
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

  const gImage = getImage(image.gatsbyImageData)

  return (
    <Link
      to={url}
      className={cn(className, 'mb-16 desktop:mb-32')}
      onMouseEnter={() => setActive(true)}
      onMouseLeave={() => setActive(false)}
    >
      <Fade when={loaded}>
        <div className={cn('pr-5 pb-5 image-short')}>
          {gImage && (
            <GatsbyImage
              className='w-full h-full'
              image={gImage}
              alt={image.alt}
            />
          )}
        </div>
        <div>{children}</div>
      </Fade>
    </Link>
  )
}

export default ProjectBox
