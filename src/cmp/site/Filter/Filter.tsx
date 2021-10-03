import React from 'react'
import cn from 'classnames'
import { mergeQueryParams, useQueryParams } from '@src/utils/queryParams'

type Props = {
  className?: string
}

const filters: { id: string; label: string }[] = [
  {
    id: 'all',
    label: 'Öll verkefni',
  },
  {
    id: 'client',
    label: 'Fyrirtæki',
  },
  {
    id: 'tags',
    label: 'Tegund af vinnu',
  },
]

const Filter = ({ className = '' }: Props) => {
  const qs = useQueryParams()
  const chosenFilter = qs.filter ?? filters[0].id

  return (
    <div className={(cn(className), 'flex text-primary banner-item-width')}>
      <div>
        <p className='text-parag3'>Flokkar:</p>
      </div>
      <div className='grid pl-5'>
        {filters.map(filter => (
          <button
            onClick={() =>
              mergeQueryParams({
                filter: filter.id,
              })
            }
            className='text-left'
          >
            <p
              className={cn('text-parag3 hover:text-black', {
                'text-primary-light': filter.id === chosenFilter,
              })}
            >
              {filter.label}
            </p>
          </button>
        ))}
      </div>
    </div>
  )
}

export default Filter
