import { ImageType } from '@src/data/resolvers'
import React from 'react'
import { GatsbyImage, getImage } from 'gatsby-plugin-image'

type Employee = {
  image: ImageType
  fullName: string
  role: string
}

export type StaffProps = {
  staff: Employee[]
}

const Employee = ({ image, fullName, role }: Employee) => {
  const gImage = getImage(image.gatsbyImageData)
  if (!gImage) return null

  return (
    <div className='mb-6'>
      <GatsbyImage image={gImage} alt={image.alt} />
      <h2 className='mt-6'>{fullName}</h2>
      <p className='text-primary-light'>{role}</p>
    </div>
  )
}

const Staff = ({ staff }: StaffProps) => {
  return (
    <div className='staff pad my-32'>
      <h1 className='mb-32'>Tvistarar</h1>
      <div className='grid grid-cols-3 gap-6 max-w-6xl mx-auto place-items-center'>
        {staff.map((employee, key) => (
          <Employee key={key} {...employee} />
        ))}
      </div>
    </div>
  )
}

export default Staff
