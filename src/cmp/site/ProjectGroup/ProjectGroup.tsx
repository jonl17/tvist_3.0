import { ProjectInterface } from '@src/data/resolvers'
import React from 'react'
import ProjectBox from '@cmp/site/ProjectBox'

export type ProjectGroupType = {
  name: string
  projects: ProjectInterface[]
  className?: string
}

const ProjectGroup = ({ name, projects, className }: ProjectGroupType) => {
  return (
    <ProjectBox className={className} url='/' image={projects[0].featuredImage}>
      <h2>{`${name} (${projects.length})`}</h2>
    </ProjectBox>
  )
}

export default ProjectGroup
