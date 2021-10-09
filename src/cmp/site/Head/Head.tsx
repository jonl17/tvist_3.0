import React, { useState, useEffect } from 'react'
import { Fade } from 'react-reveal'
import cn from 'classnames'

type Props = {
  title?: string
  description?: {
    html: string
  }
  className?: string
  type: 'red' | 'white'
}

const Head: React.FC<Props> = ({
  title,
  description,
  children,
  className,
  type = 'white',
}) => {
  const [loaded, setLoaded] = useState(false)
  useEffect(() => setLoaded(true), [])
  return (
    <div
      className={cn(
        'py-6 desktop:py-12 flex justify-between animate-slideIn pad',
        {
          'bg-primary': type === 'red',
          'bg-white': type === 'white',
        }
      )}
    >
      <div className='desktop:w-1/2'>
        {title && (
          <Fade when={loaded} distance='10px' delay={500} left duration={250}>
            <h1
              className={cn('mb-5', {
                'text-white': type === 'red',
                'text-primary': type === 'white',
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
                'text-white': type === 'red',
                'text-primary': type === 'white',
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
              'text-white': type === 'red',
              'text-primary': type === 'white',
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
