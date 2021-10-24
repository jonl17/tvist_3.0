import { ImageType } from '@src/data/resolvers'
import React from 'react'
import { getImage, GatsbyImage } from 'gatsby-plugin-image'

export type BannerProps = {
  image: ImageType
}

const Banner = ({ image }: BannerProps) => {
  const gatsbyImage = getImage(image.gatsbyImageData)

  if (!gatsbyImage) return null

  return (
    <div className='banner desktop:h-screen w-full'>
      <GatsbyImage image={gatsbyImage} alt={image.alt} />
    </div>
  )
}

export default Banner
