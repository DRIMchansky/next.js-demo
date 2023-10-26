import React from 'react'
import clsx from 'clsx'

import styles from './hero-content.module.css'

type Props = {
  title: string
  isCurrent: boolean
  className?: string
}

export const HeroContent = ({ title, isCurrent, className }: Props) => {
  return (
    <div className={clsx(styles.content, className)}>
      {title}{' '}
      <a href={title} tabIndex={isCurrent ? 0 : -1}>
        Link
      </a>
    </div>
  )
}
