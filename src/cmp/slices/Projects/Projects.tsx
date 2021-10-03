import React from 'react'
import { ProjectInterface } from '@src/data/resolvers'
import { Link } from 'gatsby'
import Img from 'gatsby-image'
import cn from 'classnames'
import Filter from '@cmp/site/Filter'
import Head from '@cmp/site/Head'
import { useGetProjects } from '@src/hooks/useGetProjects'

export type ProjectsProps = {
  text: {
    html: string
  }
  projects: ProjectInterface[]
}

type BoxProps = { tall?: boolean; wide?: boolean; className?: string }

const ProjectBox = ({
  featuredImage,
  title,
  client,
  url,
  wide,
  className = '',
}: ProjectInterface & BoxProps) => {
  return (
    <Link
      to={url}
      className={cn(
        className,
        // {
        //   'w-full desktop:w-7/12': wide,
        //   'w-full desktop:w-5/12': !wide,
        // },
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

const Projects = ({ text }: ProjectsProps) => {
  const projects = useGetProjects()

  return (
    <div className='relative'>
      <Head description={text} className='bg-white'>
        <Filter className='desktop::w-1/2' />
      </Head>
      <div className='flex flex-wrap -mr-5 mt-16 desktop:mt-32'>
        {projects.map((project, i) => {
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
        })}
      </div>
    </div>
  )
}

export default Projects
