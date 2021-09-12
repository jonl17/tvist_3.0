import React from 'react'

type Props = {
  isOpen: boolean
  open: () => void
  close: () => void
}

const Burger = ({ isOpen, open, close }: Props) => {
  return (
    <button
      onClick={() => (isOpen ? close() : open())}
      className='h-8 w-8 relative'
    >
      <svg
        className='absolute top-0 left-0 h-full w-full'
        viewBox='0 0 20 24'
        fill='none'
      >
        {/* ex */}
        {isOpen && (
          <g className='burger__ex'>
            <path className='burger-path' d='M2,2 L18,18' />
            <path className='burger-path' d='M18,2 L2,18' />
          </g>
        )}
        {/* burger */}
        {!isOpen && (
          <g className='burger__burger'>
            <path className='burger-path' d='M0,4 24,4' />
            <path className='burger-path' d='M0,10 24,10' />
            <path className='burger-path' d='M0,16 24,16' />
          </g>
        )}
      </svg>
    </button>
  )
}

export default Burger
