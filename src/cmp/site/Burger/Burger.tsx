import React from 'react'
import cn from 'classnames'

type Props = {
  isOpen: boolean
  open: () => void
  close: () => void
  ghost?: boolean
}

const Burger = ({ isOpen, open, close, ghost = false }: Props) => {
  const pathClassname = cn(
    'stroke-current',
    ghost ? 'text-white' : 'text-primary'
  )

  return (
    <button
      onClick={() => (isOpen ? close() : open())}
      className='h-8 w-8 relative'
    >
      <svg className='absolute top-0 left-0 h-full w-full' viewBox='0 0 20 24'>
        {/* ex */}
        {isOpen && (
          <g className='burger__ex'>
            <path
              className={cn('burger-path', pathClassname)}
              d='M2,2 L18,18'
            />
            <path
              className={cn('burger-path', pathClassname)}
              d='M18,2 L2,18'
            />
          </g>
        )}
        {/* burger */}
        {!isOpen && (
          <g className='burger__burger'>
            <path className={cn('burger-path', pathClassname)} d='M0,4 24,4' />
            <path
              className={cn('burger-path', pathClassname)}
              d='M0,10 24,10'
            />
            <path
              className={cn('burger-path', pathClassname)}
              d='M0,16 24,16'
            />
          </g>
        )}
      </svg>
    </button>
  )
}

export default Burger
