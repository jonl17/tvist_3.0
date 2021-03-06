import React from 'react'
import LogoMain from './LogoMain'
import LogoSecondary from './LogoSecondary'
import Pause from './Pause'
import Play from './Play'
import Facebook from './Facebook'
import Instagram from './Instagram'
import Spotify from './Spotify'
import Ellipse from './Ellipse'
import Arrow from './Arrow'

export type IconType =
  | 'logo-main'
  | 'logo-secondary'
  | 'play'
  | 'pause'
  | 'facebook'
  | 'instagram'
  | 'spotify'
  | 'ellipse'
  | 'arrow'

const AllIcons: { [key in IconType]: React.ElementType } = {
  'logo-main': LogoMain,
  'logo-secondary': LogoSecondary,
  play: Play,
  pause: Pause,
  facebook: Facebook,
  instagram: Instagram,
  spotify: Spotify,
  ellipse: Ellipse,
  arrow: Arrow,
}

export { AllIcons }
