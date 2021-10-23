import React from 'react'
import { ProjectInterface } from '@src/data/resolvers'
import cn from 'classnames'
import ProjectBox from '@cmp/site/ProjectBox'

type ProjectsProps = {
  projects: ProjectInterface[]
}

const Projects = ({ projects }: ProjectsProps) => {
  return (
    <div className='flex flex-wrap mt-16 desktop:mt-32 pad'>
      {projects.map((project, i) => {
        return (
          <ProjectBox
            key={i}
            className={cn(
              'w-full',
              i % 2 === 0 ? 'desktop:-mt-16' : 'desktop:-mb-16',
              i % 3 === 0 ? 'desktop:w-7/12' : ' desktop:w-5/12'
            )}
            image={project.featuredImage}
            url={project.url}
          >
            <h2>{project.title}</h2>
            <p className='text-parag3 text-primary-light'>{project.client}</p>
          </ProjectBox>
        )
      })}
    </div>
  )
}

export default Projects
