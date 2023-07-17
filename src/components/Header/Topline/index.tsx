import React from 'react'

import styles from './styles.module.css'

export const Topline = () => {
  return (
    <div className={styles.topline}>
      <div className={styles.wrapper}>
        <span className={styles.text}>Скидка 10% по промокоду “ЗАМОК” на все заказы до 10.09</span>{' '}
        <a href="#" className={styles.callBack}>
          Обратный звонок
        </a>
      </div>
    </div>
  )
}
