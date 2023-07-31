import React from 'react'

import { Container } from '@/shared/components/container'

import styles from './header-topline.module.css'

export const HeaderTopline = () => {
  return (
    <div className={styles.topline}>
      <Container className={styles.container}>
        <span className={styles.text}>Скидка 10% по промокоду “ЗАМОК” на все заказы до 10.09</span>{' '}
        <a href="#" className={styles.callBack}>
          Обратный звонок
        </a>
      </Container>
    </div>
  )
}
