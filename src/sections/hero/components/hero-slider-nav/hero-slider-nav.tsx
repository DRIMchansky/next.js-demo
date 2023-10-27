import { ButtonBack, ButtonNext, DotGroup } from 'pure-react-carousel'
import React from 'react'
import clsx from 'clsx'

import { InlineIconArrow } from '@/shared/components/inline-icon/arrow'

import styles from './hero-slider-nav.module.css'

type Props = {
  className?: string
}

export const HeroSliderNav = ({ className }: Props) => {
  return (
    <div className={clsx(styles.nav, className)}>
      <ButtonBack className={styles.button}>
        <InlineIconArrow className={clsx(styles.icon, styles.iconLeft)} />
      </ButtonBack>
      <DotGroup className={styles.dots} />
      <ButtonNext className={styles.button}>
        <InlineIconArrow className={clsx(styles.icon, styles.iconRight)} />
      </ButtonNext>
    </div>
  )
}
