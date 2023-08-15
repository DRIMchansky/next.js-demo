import React from 'react'

import { Container } from '@/shared/components/container'
import { $settings } from '@/app/store/settings'

import styles from './header-topline.module.css'

export const HeaderTopline = () => {
  const text = $settings.get().generalData?.promotionText
  const buttonText = $settings.get().generalData?.promotionButtonText

  return text && buttonText ? (
    <div className={styles.topline}>
      <Container className={styles.container}>
        <span className={styles.text}>{text}</span>{' '}
        <a href="#" className={styles.callBack}>
          {buttonText}
        </a>
      </Container>
    </div>
  ) : null
}
