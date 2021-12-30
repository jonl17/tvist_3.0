import React from 'react'
import Logo from '@cmp/site/Logo'
import { useGetContact } from '@src/hooks/useGetContact'
import Icon from '@cmp/site/Icon'
import cn from 'classnames'

const Footer = () => {
  const contact = useGetContact()

  return (
    <div className='pb-10 pt-10 desktop:pt-20 pad h-full bg-black relative text-white'>
      <div className='flex flex-wrap flex-col desktop:flex-row'>
        {contact.waysToContact.map((item, key) => (
          <div className='mb-10 desktop:mb-20 mt-10 w-1/2' key={key}>
            <div
              className={cn('pt-10 border-primary border-t-2', {
                'desktop:w-7/12': key === 0,
                'desktop:w-6/12': key === 1,
                'desktop:w-8/12': key === 2,
              })}
            >
              <h2 className='text-white'>{item.text}</h2>
              <a className='text-parag3' target='_blank' href={item.email.url}>
                {item.email.label}
              </a>
            </div>
          </div>
        ))}
        <div className='mb-20 mt-10 w-1/2'>
          <a target='_blank' href='https://goo.gl/maps/Wj3qmEs2mYAgiLAUA'>
            <h2 className='text-white mb-8'>Hér erum við (kort)</h2>
          </a>
          <p className='text-parag3'>{contact.address}</p>
          <p className='text-parag3 mb-8'>{contact.city}</p>
          <p className='text-parag3'>{'S. ' + contact.telephone}</p>
        </div>
      </div>
      {/* bottom row */}
      <div className='flex justify-between align-middle h-full mt-10 desktop:mt-20'>
        <Logo ghost />
        <div className='flex gap-5 place-items-center'>
          {contact.socialMedia.map((item, key) => (
            <a key={key} href={item.url} target='_blank'>
              <Icon type={item.platform} />
            </a>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Footer
