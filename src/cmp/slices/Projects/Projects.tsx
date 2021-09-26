import React from 'react'
import { ProjectInterface } from '@src/data/resolvers'
import { Link } from 'gatsby'
import Img from 'gatsby-image'
import cn from 'classnames'

export type ProjectsProps = {
  projects: ProjectInterface[]
}

type BoxProps = { tall?: boolean; wide?: boolean; className?: string }

const ProjectBox = ({
  featuredImage,
  title,
  client,
  url,
  tall,
  wide,
  className = '',
}: ProjectInterface & BoxProps) => {
  return (
    <Link
      to={url}
      className={cn(
        className,
        {
          'w-full desktop:w-7/12': wide,
          'w-full desktop:w-5/12': !wide,
        },
        'mb-16 desktop:mb-32'
      )}
    >
      <div
        className={cn('pr-5 pb-5', {
          'image-tall': false,
          'image-short': true,
        })}
      >
        <Img
          imgStyle={{ objectPosition: 'top left' }}
          style={{ height: '100%', width: '100%' }}
          {...featuredImage}
        />
      </div>
      <h2>{title}</h2>
      <p className='text-parag3 text-primary-light'>{client}</p>
    </Link>
  )
}

const Projects = ({ projects }: ProjectsProps) => {
  return (
    <div>
      <div className='flex flex-wrap -mr-5 mt-32'>
        {projects.map((project, i) => {
          return (
            <ProjectBox
              className={i % 2 === 0 ? 'desktop:-mt-16' : 'desktop:-mb-16'}
              key={i}
              {...project}
            />
          )
        })}
      </div>
    </div>
  )
}

export default Projects
