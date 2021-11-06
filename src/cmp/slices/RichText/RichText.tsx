import React from 'react'

export type RichTextProps = {
  text: {
    html: string
  }
  align: 'right' | 'left'
}

const RichText = ({ text, align }: RichTextProps) => {
  return (
    <div className='rich-text py-8 desktop:py-32 pad flex justify-between'>
      {align === 'right' && <span className='hidden desktop:block' />}
      <div
        className='text-primary desktop:w-1/2'
        dangerouslySetInnerHTML={{ __html: text.html }}
      />
      {align === 'left' && <span className='hidden desktop:block' />}
    </div>
  )
}

export default RichText
