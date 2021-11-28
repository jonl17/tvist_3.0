import { ProjectGroupType } from '@src/cmp/site/ProjectGroup'
import { ProjectGroupsInterface } from '@src/cmp/slices/ProjectGroups'
import { projectResolver, ProjectInterface } from '@src/data/resolvers'
import { BannerProps } from '@cmp/slices/Banner'
import { StaffProps } from '@cmp/slices/Staff'
import { SliceProps } from '@src/cmp/slices/sliceZone'
import { RichTextProps } from '@src/cmp/slices/RichText/RichText'
import { ImageGridProps } from '@cmp/slices/ImageGrid/ImageGrid'

const propResolver = (slice: SliceProps) => {
  const type = slice.slice_type
  if (type === 'projects') {
    const props: { projects: ProjectInterface[] } = {
      projects: slice.items.map(item => projectResolver(item.project.document)),
    }
    return props
  } else if (type === 'project_groups') {
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
  } else if (type === 'banner') {
    const props: BannerProps = {
      image: slice.primary.image,
    }
    return props
  } else if (type === 'staff') {
    const props: StaffProps = {
      staff: slice.items.map(item => ({
        image: item.image,
        fullName: item.full_name,
        role: item.role,
      })),
    }
    return props
  } else if (type === 'rich_text') {
    const props: RichTextProps = {
      text: slice.primary.text,
      align: slice.primary.align,
    }
    return props
  } else if (type === 'image_grid') {
    const props: ImageGridProps = {
      images: slice.items.map(item => item.image),
    }
    return props
  } else return {}
}

export { propResolver }
