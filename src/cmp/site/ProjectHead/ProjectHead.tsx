import { ProjectInterface } from '@src/data/resolvers'
import React, { useState, useEffect } from 'react'
import QuestionAnswer from '@src/cmp/site/QuestionAnswer'
import { Fade } from 'react-reveal'

type MetaBoxProps = {
  client: string
  tags: string[]
}

const MetaBox = ({ client, tags }: MetaBoxProps) => (
  <>
    <QuestionAnswer
      className='mb-3'
      question='Viðskiptavinur'
      answer={client}
    />
    {tags.length > 0 && (
      <QuestionAnswer
        question='Hvað var gert?'
        answer={tags.join(', ') + '.'}
      />
    )}
  </>
)

type Props = ProjectInterface

const ProjectHead = ({ title, excerpt, client, tags }: Props) => {
  const [loaded, setLoaded] = useState(false)
  useEffect(() => setLoaded(true), [])
  return (
    <div className='bg-primary pad py-6 desktop:py-12 flex justify-between'>
      <div className='desktop:w-1/3'>
        <Fade when={loaded} distance='10px' down duration={250}>
          <h1 className='text-white mb-5'>{title}</h1>
        </Fade>
        <div className='w-96 desktop:hidden mb-5'>
          <MetaBox client={client} tags={tags} />
        </div>
        <Fade when={loaded} distance='10px' down delay={250} duration={250}>
          <div
            className='text-white'
            dangerouslySetInnerHTML={{ __html: excerpt.html }}
          />
        </Fade>
      </div>
      <div className='banner-item-width hidden desktop:block'>
        <MetaBox client={client} tags={tags} />
      </div>
    </div>
  )
}

export default ProjectHead
