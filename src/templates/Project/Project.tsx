import React, { useEffect, useState } from 'react'
import { graphql } from 'gatsby'
import '@data/fragments/project.ts'
import { projectResolver } from '@src/data/resolvers'
import ProjectHead from '@src/cmp/site/ProjectHead'
import { useTheme } from '@src/context/theme'
import Img from 'gatsby-image'
import { Fade } from 'react-reveal'
import SliceZone from '@cmp/slices/sliceZone'
import { linkResolver } from '@root/cms/utils/linkResolver'
import { withPrismicPreview } from 'gatsby-plugin-prismic-previews'

type Props = {
  data: any
}

export const ProjectTemplate = ({ data }: Props) => {
  const [loaded, setLoaded] = useState(false)
  if (!data) return null
  const project = projectResolver(data.prismicProject)

  const { updateTheme } = useTheme()

  useEffect(() => {
    updateTheme('primary')
    setLoaded(true)
  }, [])

  return (
    <div className='project'>
      <ProjectHead {...project} />
      <Fade down duration={500} distance='10px' when={loaded}>
        <div>
          <Img fluid={project.featuredImage.fluid} />
        </div>
      </Fade>
      {project.body &&
        project.body.map((slice, key) => <SliceZone key={key} slice={slice} />)}
    </div>
  )
}

export const query = graphql`
  query ProjectQuery($id: String) {
    prismicProject(id: { eq: $id }) {
      _previewable
      ...projectFragment
    }
  }
`

export default withPrismicPreview(ProjectTemplate, [
  {
    repositoryName: process.env.GATSBY_PRISMIC_REPO_NAME || '',
    linkResolver,
  },
])
