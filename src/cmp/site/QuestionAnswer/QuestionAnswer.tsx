import React from 'react'
import cn from 'classnames'

type Props = {
  question: string
  answer: string
  className?: string
}

const QuestionAnswer = ({ question, answer, className = '' }: Props) => {
  return (
    <div className={cn('flex', className)}>
      <p className='text-white text-parag3 mr-2 whitespace-nowrap'>
        {question + ':'}
      </p>
      <p className='text-white text-opacity-75 text-parag3'>{answer}</p>
    </div>
  )
}

export default QuestionAnswer
