import React from 'react'
import clsx from 'clsx'

import { Icon } from '@/components/Icon'

import styles from './styles.module.css'

type Props = {
  className?: string
}

export const Phone = ({ className }: Props) => {
  return (
    <div className={clsx(styles.phone, className)}>
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
