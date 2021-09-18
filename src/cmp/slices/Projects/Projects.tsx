import React from 'react'
import Anchor from '@src/cmp/site/Anchor'
import { ProjectInterface } from '@src/data/resolvers'
import { Link } from 'gatsby'

export type ProjectsProps = {
  projects: ProjectInterface[]
}

const Projects = ({ projects }: ProjectsProps) => {
  return (
    <div>
      {projects.map((p, i) => (
        <Link className='h-52 w-52' to={p.url}>
          <img
            className='w-full h-full object-cover'
            src={p.featuredImage.url}
          />
        </Link>
      ))}
    </div>
  )
}

export default Projects
