import React, { useState, useEffect } from 'react'
import { ProjectInterface } from '@src/data/resolvers'
import { Link } from 'gatsby'
import Img from 'gatsby-image'
import cn from 'classnames'
import Fade from '@src/cmp/site/Fade'
import Filter from '@cmp/site/Filter'

type BoxProps = { tall?: boolean; wide?: boolean; className?: string }

const ProjectBox = ({
  featuredImage,
  title,
  client,
  url,
  className = '',
}: ProjectInterface & BoxProps) => {
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
          <Img style={{ height: '100%', width: '100%' }} {...featuredImage} />
        </div>
        <h2>{title}</h2>
        <p className='text-parag3 text-primary-light'>{client}</p>
      </Fade>
    </Link>
  )
}

const Projects = () => {
  return (
    <div className='flex flex-wrap -mr-5 mt-16 desktop:mt-32'>
      {/* {projects.map((project, i) => {
        return (
          <ProjectBox
            key={i}
            className={cn(
              'w-full',
              i % 2 === 0 ? 'desktop:-mt-16' : 'desktop:-mb-16',
              i % 3 === 0 ? 'desktop:w-7/12' : ' desktop:w-5/12'
            )}
            {...project}
          />
        )
      })} */}
    </div>
  )
}

export default Projects
