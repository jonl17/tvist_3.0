import React from 'react'
import LogoMain from './LogoMain'
import LogoSecondary from './LogoSecondary'
import Pause from './Pause'
import Play from './Play'

export type IconType = 'logo-main' | 'logo-secondary' | 'play' | 'pause'

const AllIcons: { [key in IconType]: React.ElementType } = {
  'logo-main': LogoMain,
  'logo-secondary': LogoSecondary,
  play: Play,
  pause: Pause,
}

export { AllIcons }
