import React from 'react'

import { Icon } from '@/components/Icon'

import styles from './styles.module.css'

export const Phone = () => {
  return (
    <div className={styles.phone}>
      <Icon id="phone" className={styles.icon} />
      <a href="tel:89665588499" className={styles.number}>
        +7 (966) 55 88 499
      </a>
      <a href="tel:89665588499" className={styles.callBack}>
        Обратный звонок
      </a>
    </div>
  )
}
