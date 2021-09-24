import { ProjectInterface } from '@src/data/resolvers'
import React from 'react'
import QuestionAnswer from '@src/cmp/site/QuestionAnswer'

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

const ProjectHead = ({
  title,
  excerpt,
  client,
  featuredImage,
  tags,
}: Props) => {
  return (
    <div className='bg-primary pad py-10 flex justify-between'>
      <div className='desktop:w-1/3'>
        <h1 className='text-white mb-5'>{title}</h1>
        <div className='w-96 desktop:hidden mb-5'>
          <MetaBox client={client} tags={tags} />
        </div>
        <div
          className='text-white'
          dangerouslySetInnerHTML={{ __html: excerpt.html }}
        />
      </div>
      <div className='banner-item-width hidden desktop:block'>
        <MetaBox client={client} tags={tags} />
      </div>
    </div>
  )
}

export default ProjectHead
