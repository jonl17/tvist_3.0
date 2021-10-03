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
        const props: ProjectsProps = {
          text: slice.primary.text,
          projects: slice.items.map((item: any) => ({
            tall: item.tall,
            wide: item.wide,
            ...projectResolver(item.project.document),
          })),
        }
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
