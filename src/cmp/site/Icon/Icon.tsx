import React from 'react'
import { AllIcons, IconType } from './types'

export type IconProps = {
  type: IconType
  className?: string
}

const Icon = ({ type, className = '' }: IconProps) => {
  const Cmp = AllIcons[type]

  if (!Cmp) return null

  return <Cmp className={className} />
}

export default Icon
