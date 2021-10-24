import { ProjectGroupType } from '@src/cmp/site/ProjectGroup'
import { ProjectGroupsInterface } from '@src/cmp/slices/ProjectGroups'
import { projectResolver, ProjectInterface } from '@src/data/resolvers'
import { BannerProps } from '@cmp/slices/Banner'
import { StaffProps } from '@cmp/slices/Staff'

const propResolver = (slice: {
  slice_type: string
  items: any[]
  primary: any
}) => {
  const type = slice.slice_type
  if (type === 'projects') {
    let props: { projects: ProjectInterface[] } = {
      projects: slice.items.map(item => projectResolver(item.project.document)),
    }
    return props
  } else if (type === 'project_groups') {
    let props: ProjectGroupsInterface = {
      groups: slice.items.map(
        (item: any): ProjectGroupType => ({
          name: item.group.document.data.group_name.text,
          projects: item.group.document.data.projects.map((p: any) =>
            projectResolver(p.project.document)
          ),
        })
      ),
    }
    return props
  } else if (type === 'banner') {
    let props: BannerProps = {
      image: slice.primary.image,
    }
    return props
  } else if (type === 'staff') {
    let props: StaffProps = {
      staff: slice.items.map(item => ({
        image: item.image,
        fullName: item.full_name,
        role: item.role,
      })),
    }
    return props
  } else return {}
}

export { propResolver }
