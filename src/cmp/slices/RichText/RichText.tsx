import React from 'react'
import cn from 'classnames'

export type RichTextProps = {
  text: {
    html: string
  }
  align: 'right' | 'left'
}

const RichText = ({ text, align }: RichTextProps) => {
  return (
    <div className='rich-text py-8 desktop:py-32 pad grid desktop:grid-cols-2 gap-5'>
      {align === 'right' && <span className='hidden desktop:block' />}
      <div
        className='text-primary'
        dangerouslySetInnerHTML={{ __html: text.html }}
      />
      {align === 'left' && <span className='hidden desktop:block' />}
    </div>
  )
}

export default RichText
