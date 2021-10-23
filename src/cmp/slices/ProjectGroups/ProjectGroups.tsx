import React from 'react'
import ProjectGroup, { ProjectGroupType } from '@cmp/site/ProjectGroup'
import cn from 'classnames'

export interface ProjectGroupsInterface {
  groups: ProjectGroupType[]
}

const ProjectGroups = ({ groups }: ProjectGroupsInterface) => {
  return (
    <div className='project-groups flex flex-wrap mt-16 desktop:mt-32 pad'>
      {groups.map((group, key) => (
        <ProjectGroup
          key={key}
          {...group}
          className={cn(
            'w-full',
            key % 2 === 0 ? 'desktop:-mt-16' : 'desktop:-mb-16',
            key % 3 === 0 ? 'desktop:w-7/12' : ' desktop:w-5/12'
          )}
        />
      ))}
    </div>
  )
}

export default ProjectGroups
