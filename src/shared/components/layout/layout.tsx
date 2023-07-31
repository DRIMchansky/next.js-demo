import React, { ReactNode } from 'react'

import styles from './layout.module.css'

type Props = {
  children: ReactNode
}

export const Layout = ({ children }: Props) => {
  return <div className={styles.layout}>{children}</div>
}
