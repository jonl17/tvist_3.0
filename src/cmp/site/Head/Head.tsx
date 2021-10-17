import React, { useState, useEffect } from 'react'
import { Fade } from 'react-reveal'
import cn from 'classnames'
import { PageTheme } from '@src/data/resolvers'

type Props = {
  title?: string
  description?: {
    html: string
  }
  className?: string
  theme: PageTheme
}

const Head: React.FC<Props> = ({
  title,
  description,
  children,
  className,
  theme = 'white',
}) => {
  const [loaded, setLoaded] = useState(false)
  useEffect(() => setLoaded(true), [])
  return (
    <div
      className={cn(
        'py-6 desktop:py-12 flex justify-between animate-slideIn pad',
        {
          'bg-primary': theme === 'red',
          'bg-white': theme === 'white',
          'bg-primary-lightest': theme === 'pink',
        }
      )}
    >
      <div className='desktop:w-1/2'>
        {title && (
          <Fade when={loaded} distance='10px' delay={500} left duration={250}>
            <h1
              className={cn('mb-5', {
                'text-white': theme === 'red',
                'text-primary': theme === 'white' || theme === 'pink',
              })}
            >
              {title}
            </h1>
          </Fade>
        )}
        <div className='w-96 desktop:hidden mb-5'>{children}</div>
        {description && (
          <Fade when={loaded} distance='10px' left delay={750} duration={250}>
            <div
              className={cn({
                'text-white': theme === 'red',
                'text-primary': theme === 'white' || theme === 'pink',
              })}
              dangerouslySetInnerHTML={{ __html: description.html }}
            />
          </Fade>
        )}
      </div>
      <div className='banner-item-width hidden desktop:block'>
        <Fade when={loaded} right distance='10px' delay={500}>
          <div
            className={cn({
              'text-white': theme === 'red',
              'text-primary': theme === 'white' || theme === 'pink',
            })}
          >
            {children}
          </div>
        </Fade>
      </div>
    </div>
  )
}

export default Head
