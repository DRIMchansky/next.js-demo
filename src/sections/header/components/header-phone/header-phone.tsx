import React from 'react'
import clsx from 'clsx'

import { InlineIconPhone } from '@/shared/components/inline-icon/phone'

import styles from './header-phone.module.css'

type Props = {
  className?: string
}

export const HeaderPhone = ({ className }: Props) => {
  return (
    <div className={clsx(styles.phone, className)}>
      <InlineIconPhone className={styles.icon} />
      <a href="tel:89665588499" className={styles.number}>
        +7 (966) 55 88 499
      </a>
      <a href="tel:89665588499" className={styles.callBack}>
        Обратный звонок
      </a>
    </div>
  )
}
