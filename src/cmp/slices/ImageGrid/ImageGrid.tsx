import { ImageType } from '@src/data/resolvers'
import React from 'react'
import { GatsbyImage } from 'gatsby-plugin-image'
import cn from 'classnames'
import Video from '@cmp/site/Video'

export type ImageGridProps = {
  media: {
    image: ImageType
    video?: {
      url: string
    }
  }[]
}

const ImageGrid = ({ media }: ImageGridProps) => {
  return (
    <div
      className={cn('grid pad gap-5', {
        'desktop:grid-cols-2': media.length > 1,
      })}
    >
      {media.map((item, key) => {
        if (item.video) {
          return <Video url={item.video.url} placeholder={item.image} />
        } else {
          return (
            <GatsbyImage
              key={key}
              image={item.image.gatsbyImageData}
              alt={item.image.alt ?? 'image grid picture'}
            />
          )
        }
      })}
    </div>
  )
}

export default ImageGrid
