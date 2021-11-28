import { ImageType, ProjectInterface } from '@src/data/resolvers'
import React from 'react'

export type HeroTypeProps = {
  slides: {
    image: ImageType
    project: ProjectInterface
  }[]
}

const Hero = ({ slides }: HeroTypeProps) => {
  console.log(slides)
  return <div>frontpager</div>
}

export default Hero
