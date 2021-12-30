import React, { useState, useRef, useEffect } from 'react'
import { GatsbyImage } from 'gatsby-plugin-image'
import { ImageType } from '@src/data/resolvers'
import Icon from '@cmp/site/Icon'
import cn from 'classnames'

type Props = {
  url: string
  placeholder?: ImageType
}

const Video = ({ url, placeholder }: Props) => {
  const [play, setPlay] = useState(false)
  const videoRef = useRef<HTMLVideoElement>(null)

  const togglePlay = () => setPlay(!play)

  useEffect(() => {
    if (videoRef.current) {
      if (play) {
        videoRef.current.play()
      } else {
        videoRef.current.pause()
      }
    }
  }, [play])

  return (
    <div className='relative'>
      <button
        className={cn('w-full h-full transition-opacity', {
          'opacity-0': !play,
          'opacity-100': play,
        })}
        onClick={togglePlay}
      >
        <video
          className='h-full w-full object-cover'
          ref={videoRef}
          src={url}
        ></video>
      </button>
      {placeholder && !play && (
        <button
          onClick={togglePlay}
          className={cn(
            'absolute w-full h-full top-0 left-0 grid place-items-center transition-opacity',
            {
              'opacity-0': play,
              'opacity-100': !play,
            }
          )}
        >
          <div className='h-full w-full absolute top-0 bottom-0'>
            <GatsbyImage
              className='w-full h-full rounded'
              image={placeholder.gatsbyImageData}
              alt={placeholder.alt ?? 'video placeholder picture'}
            />
          </div>
          <Icon className='w-32 desktop:w-52 z-10' type='play' />
        </button>
      )}
    </div>
  )
}

export default Video
