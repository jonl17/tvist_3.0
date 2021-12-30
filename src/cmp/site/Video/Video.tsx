import React, { useState, useRef, useEffect } from 'react'
import { GatsbyImage } from 'gatsby-plugin-image'
import { ImageType } from '@src/data/resolvers'
import Icon from '@cmp/site/Icon'

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
      <button className='w-full h-full' onClick={togglePlay}>
        <video
          className='h-full w-full object-cover'
          ref={videoRef}
          src={url}
        ></video>
      </button>
      {placeholder && !play && (
        <button
          onClick={togglePlay}
          className='absolute w-full h-full top-0 left-0 grid place-items-center'
        >
          <GatsbyImage
            className='w-full absolute h-full'
            image={placeholder.gatsbyImageData}
            alt={placeholder.alt ?? 'video placeholder picture'}
          />
          <Icon className='w-32 desktop:w-52 z-10' type='play' />
        </button>
      )}
    </div>
  )
}

export default Video
