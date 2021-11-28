import { ImageType } from '@src/data/resolvers'
import React from 'react'
import { GatsbyImage, getImage } from 'gatsby-plugin-image'
import cn from 'classnames'

export type ImageGridProps = {
  images: ImageType[]
}

const ImageGrid = ({ images }: ImageGridProps) => {
  return (
    <div
      className={cn('grid pad gap-5', {
        'desktop:grid-cols-2': images.length > 1,
      })}
    >
      {images.map((image, key) => {
        const gatsbyImage = getImage(image.gatsbyImageData)
        if (gatsbyImage) {
          return (
            <GatsbyImage
              key={key}
              image={gatsbyImage}
              alt={image.alt ?? 'image grid picture'}
            />
          )
        }
      })}
    </div>
  )
}

export default ImageGrid
