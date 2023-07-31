import React from 'react'
import clsx from 'clsx'

import styles from './container.module.css'

type Props = {
  children: React.ReactNode
  className?: string
}

export const Container = ({ children, className }: Props) => {
  return <div className={clsx(styles.container, className)}>{children}</div>
}
