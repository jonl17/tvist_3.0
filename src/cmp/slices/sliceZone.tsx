import React from 'react'
import Projects, { ProjectsProps } from '@cmp/slices/Projects'
import { projectResolver } from '@src/data/resolvers'

type Props = {
  slice: any
}

const SliceZone = ({ slice }: Props) => {
  const sliceComponents: { [key: string]: React.ElementType } = {
    projects: Projects,
  }

  const sliceProps = (sliceType: string) => {
    switch (sliceType) {
      case 'projects':
        const props = {}
        return props
    }
  }

  const SliceComponent = sliceComponents[slice.slice_type]
  const props = sliceProps(slice.slice_type)
  if (SliceComponent) {
    return <SliceComponent {...props} />
  }
  return null
}

export default SliceZone
