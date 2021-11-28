import { ImageType, ProjectInterface } from '@src/data/resolvers'
import React from 'react'
import { GatsbyImage, getImage } from 'gatsby-plugin-image'
import { Link } from 'gatsby'

export type HeroTypeProps = {
  introductionText: {
    html: string
  }
  slides: {
    image: ImageType
    project: ProjectInterface
  }[]
}

const Hero = ({ slides, introductionText }: HeroTypeProps) => {
  const { image, project } = slides[0]
  const gatsbyImage = getImage(image.gatsbyImageData)
  return (
    <>
      <div>
        {/* slides */}
        <Link to={project.url}>
          <div className='desktop:h-screen h-96 -mt-28 z-0 relative'>
            {gatsbyImage && (
              <GatsbyImage
                className='fixed top-0 h-96 desktop:h-full'
                image={gatsbyImage}
                alt={image.alt ?? 'hero image'}
              />
            )}
            <div className='relative h-full '>
              <h1 className='text-white absolute bottom-0 desktop:h-56 h-20 bg-gradient pad w-full m-0'>
                {project.title}
              </h1>
            </div>
          </div>
        </Link>
        <div className='desktop:h-96 h-52 pad bg-primary text-white flex align-middle relative'>
          <div
            className='desktop:w-8/12 m-auto'
            dangerouslySetInnerHTML={{ __html: introductionText.html }}
          />
        </div>
      </div>
    </>
  )
}

export default Hero
