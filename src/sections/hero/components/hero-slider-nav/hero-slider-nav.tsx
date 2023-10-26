import { ButtonBack, ButtonNext, DotGroup } from 'pure-react-carousel'
import React from 'react'
import clsx from 'clsx'

import styles from './hero-slider-nav.module.css'

type Props = {
  className?: string
}

export const HeroSliderNav = ({ className }: Props) => {
  return (
    <div className={clsx(styles.nav, className)}>
      <ButtonBack>prev</ButtonBack>
      <DotGroup />
      <ButtonNext>next</ButtonNext>
    </div>
  )
}
