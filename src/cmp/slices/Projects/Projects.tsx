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
        <Link to={p.url}>
          <div className='h-52 w-52'>
            <img src={p.featuredImage.url} />
          </div>
        </Link>
      ))}
    </div>
  )
}

export default Projects
