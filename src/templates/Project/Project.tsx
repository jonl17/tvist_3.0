import React, { useEffect } from 'react'
import { graphql } from 'gatsby'
import '@cms/fragments/project.ts'
import { projectResolver } from '@src/data/resolvers'
import { useTheme } from '@src/context/theme'
import SliceZone from '@cmp/slices/sliceZone'
import { withPrismicPreview } from 'gatsby-plugin-prismic-previews'
import Head from '@src/cmp/site/Head'

type Props = {
  data: any
}

export const ProjectTemplate = ({ data }: Props) => {
  if (!data) return null

  console.log(data)

  const project = projectResolver(data.prismicProject)

  const { updateTheme } = useTheme()

  useEffect(() => {
    updateTheme('primary')
  }, [])

  return (
    <div className='project bg-primary-lightest mb-10'>
      <Head title={project.title} description={project.excerpt} theme='red'>
        <div className='flex text-white banner-item-width'>
          <div>
            <p className='text-parag3'>Fyrirtæki:</p>
          </div>
          <div className='grid pl-3'>
            <p className='text-parag3 text-primary-light'>{project.client}</p>
          </div>
        </div>
        <>
          {project.tags.length ? (
            <div className='flex text-white banner-item-width'>
              <p className='text-parag3'>Hvað var gert?</p>

              <div className='grid pl-3'>
                {project.tags.map((tag, key) => (
                  <p key={key} className='text-parag3 text-primary-light'>
                    {tag}
                  </p>
                ))}
              </div>
            </div>
          ) : null}
        </>
      </Head>
      {project.body &&
        project.body.map((slice, key) => <SliceZone key={key} slice={slice} />)}
    </div>
  )
}

export const query = graphql`
  query ProjectQuery($id: String) {
    prismicProject(id: { eq: $id }) {
      _previewable
      ...projectFragmentFull
    }
  }
`

export default withPrismicPreview(ProjectTemplate)
