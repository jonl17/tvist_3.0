import { ImageType, ProjectInterface } from '@src/data/resolvers'
import React, { useState } from 'react'
import { GatsbyImage, getImage } from 'gatsby-plugin-image'
import { Link } from 'gatsby'
import Icon from '@cmp/site/Icon'
import { useGetScroll } from '@src/hooks/useGetScroll'
import cn from 'classnames'

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
  const [currentSlide, setCurrentSlide] = useState(0)

  const toggleNext = () =>
    setCurrentSlide(prev => (prev <= slides.length - 2 ? prev + 1 : 0))
  const togglePrevious = () =>
    setCurrentSlide(prev => (prev === 0 ? slides.length - 1 : prev - 1))

  const { image, project } = slides[currentSlide]
  const gatsbyImage = getImage(image.gatsbyImageData)

  const perc = useGetScroll()

  return (
    <div>
      <div
        className='fixed z-10 top-0 w-full flex justify-between pad'
        style={{ opacity: `${1 - perc * 0.03}` }}
      >
        <button
          className='-ml-3 flex place-items-center justify-center z-10 w-10 h-96 desktop:h-screen transform rotate-180'
          onClick={togglePrevious}
        >
          <Icon className='h-10' type='arrow' />
        </button>
        <button
          className='-mr-3 w-10 flex place-items-center justify-center z-10 h-96 float-right desktop:h-screen '
          onClick={toggleNext}
        >
          <Icon type='arrow' />
        </button>
      </div>
      <Link to={project.url}>
        <div className='desktop:h-screen h-96 -mt-28 z-0 relative'>
          {gatsbyImage && (
            <div className='fixed top-0 h-96 desktop:h-full'>
              <span className='h-full w-full absolute top 0 bg-primary' />
              <div style={{ opacity: `${1 - perc * 0.015}` }}>
                <GatsbyImage
                  className='h-full'
                  image={gatsbyImage}
                  alt={image.alt ?? 'hero image'}
                />
              </div>
            </div>
          )}
          <div className='absolute bottom-0 z-30 desktop:h-56 h-20 pad w-full m-0 flex'></div>
        </div>
      </Link>
      <div className='h-72 -mt-72 relative w-full bg-primary bg-gradient pad'>
        <div
          className='h-full'
          style={{
            opacity: `${1 - perc * 0.02}`,
            transform: `translate3d(0, ${perc * 4}px, 0)`,
          }}
        >
          <h1 className='text-white absolute bottom-10 z-10'>
            {project.title}
          </h1>
          <p className='absolute bottom-10 right-0 pad text-white'>{`${
            currentSlide + 1
          } / ${slides.length}`}</p>
        </div>
      </div>
      <div className='desktop:h-96 z-0 h-52 pad bg-primary text-white flex align-middle relative'>
        <div
          className={cn('desktop:w-8/12 m-auto opacity-0 transition-opacity', {
            'animate-slowfade': perc > 40,
            'animate-slowfadereverse': perc <= 40,
          })}
          dangerouslySetInnerHTML={{ __html: introductionText.html }}
        />
      </div>
    </div>
  )
}

export default Hero
