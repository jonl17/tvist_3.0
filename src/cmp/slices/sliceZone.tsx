import React from 'react'
import Projects from '@cmp/slices/Projects'
import ProjectGroups from '@cmp/slices/ProjectGroups'
import { propResolver } from '@cms/lib/prop-resolver'

type Props = {
  slice: any
}

const SliceZone = ({ slice }: Props) => {
  const sliceComponents: { [key: string]: React.ElementType } = {
    projects: Projects,
    project_groups: ProjectGroups,
  }

  const SliceComponent = sliceComponents[slice.slice_type]
  const props = propResolver(slice)
  if (SliceComponent) {
    return <SliceComponent {...props} />
  }
  return null
}

export default SliceZone
