import React from 'react'

import styles from './styles.module.css'
import { Topline } from './Topline'

export const Header = () => {
  return (
    <header className={styles.header}>
      <Topline />
      Some header text
    </header>
  )
}
