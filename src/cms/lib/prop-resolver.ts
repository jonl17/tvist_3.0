import { ProjectGroupType } from '@src/cmp/site/ProjectGroup'
import { ProjectGroupsInterface } from '@src/cmp/slices/ProjectGroups'
import { projectResolver } from '@src/data/resolvers'

const propResolver = (slice: {
  slice_type: string
  items: any[]
  primary: any
}) => {
  switch (slice.slice_type) {
    case 'projects':
      return {
        projects: slice.items.map(item =>
          projectResolver(item.project.document)
        ),
      }
    case 'project_groups':
      const props: ProjectGroupsInterface = {
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
  }
}

export { propResolver }
