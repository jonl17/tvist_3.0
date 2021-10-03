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
import Head from '@src/cmp/site/Head'

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
      <Head
        className='pad bg-primary'
        title={project.title}
        description={project.excerpt}
      >
        <div className='flex text-white banner-item-width'>
          <div>
            <p className='text-parag3'>Fyrirtæki:</p>
          </div>
          <div className='grid pl-3'>
            <p className='text-parag3'>{project.client}</p>
          </div>
        </div>
        <>
          {project.tags.length ? (
            <div className='flex text-white banner-item-width'>
              <p className='text-parag3'>Hvað var gert?</p>

              <div className='grid pl-3'>
                {project.tags.map((tag, key) => (
                  <p key={key} className='text-parag3'>
                    {tag}
                  </p>
                ))}
              </div>
            </div>
          ) : null}
        </>
      </Head>

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
