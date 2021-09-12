import React from 'react'
import Anchor from '@src/cmp/site/Anchor'
import { ProjectInterface } from '@src/data/resolvers'

export type ProjectsProps = {
  projects: ProjectInterface[]
}

const Projects = ({ projects }: ProjectsProps) => {
  return (
    <div>
      {projects.map((p, i) => (
        <Anchor key={i} url={p.url} label={p.title}></Anchor>
      ))}
    </div>
  )
}

export default Projects
