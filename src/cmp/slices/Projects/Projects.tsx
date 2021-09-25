import React from 'react'
import { ProjectInterface } from '@src/data/resolvers'
import { Link } from 'gatsby'
import Img from 'gatsby-image'
import cn from 'classnames'

export type ProjectsProps = {
  projects: ProjectInterface[]
}

type BoxProps = { tall?: boolean; wide?: boolean }

const ProjectBox = ({
  featuredImage,
  title,
  client,
  url,
  tall,
  wide,
}: ProjectInterface & BoxProps) => {
  return (
    <Link
      to={url}
      className={cn(
        {
          'w-full desktop:w-7/12': wide,
          'w-full desktop:w-5/12': !wide,
        },
        'mb-10 desktop:mb-32'
      )}
    >
      <div
        className={cn('pr-5 pb-5', {
          'image-tall': tall,
          'image-short': !tall,
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
      <h1 className='my-10'>Það nýjasta</h1>
      <div className='flex flex-wrap -mr-5'>
        {projects.map((project, i) => {
          return <ProjectBox key={i} {...project} />
        })}
      </div>
    </div>
  )
}

export default Projects
