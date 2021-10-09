import React from 'react'
import ReactReveal from 'react-reveal'

type Props = {
  when?: boolean
}

const Fade: React.FC<Props> = ({ children, when = true }) => {
  return (
    <ReactReveal duration={250} when={when}>
      {children}
    </ReactReveal>
  )
}

export default Fade
