import React from 'react'
import { propResolver } from '@cms/lib/prop-resolver'
import Projects from '@cmp/slices/Projects'
import ProjectGroups from '@cmp/slices/ProjectGroups'
import Banner from '@cmp/slices/Banner'
import Staff from '@cmp/slices/Staff'
import RichText from '@cmp/slices/RichText'
import ImageGrid from '@cmp/slices/ImageGrid'

export type SliceType =
  | 'projects'
  | 'project_groups'
  | 'banner'
  | 'rich_text'
  | 'staff'
  | 'image_grid'

export type SliceProps = {
  slice_type: SliceType
  primary: any
  items: any[]
}

const SliceZone = ({ slice }: { slice: SliceProps }) => {
  const sliceComponents: { [key in SliceType]: React.ElementType } = {
    projects: Projects,
    project_groups: ProjectGroups,
    banner: Banner,
    staff: Staff,
    rich_text: RichText,
    image_grid: ImageGrid,
  }

  const SliceComponent = sliceComponents[slice.slice_type]
  const props = propResolver(slice)

  if (SliceComponent) {
    return <SliceComponent {...props} />
  }
  return null
}

export default SliceZone
