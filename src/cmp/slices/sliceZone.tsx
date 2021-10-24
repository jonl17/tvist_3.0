import React from 'react'
import { propResolver } from '@cms/lib/prop-resolver'
import Projects from '@cmp/slices/Projects'
import ProjectGroups from '@cmp/slices/ProjectGroups'
import Banner from '@cmp/slices/Banner'
import Staff from '@cmp/slices/Staff'

type Props = {
  slice: any
}

const SliceZone = ({ slice }: Props) => {
  const sliceComponents: { [key: string]: React.ElementType } = {
    projects: Projects,
    project_groups: ProjectGroups,
    banner: Banner,
    staff: Staff,
  }

  const SliceComponent = sliceComponents[slice.slice_type]
  const props = propResolver(slice)
  console.log(slice)
  if (SliceComponent) {
    return <SliceComponent {...props} />
  }
  return null
}

export default SliceZone
