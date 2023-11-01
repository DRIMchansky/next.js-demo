import React from 'react'

import { Container } from '@/shared/components/container'
import { $settings } from '@/app/store/settings'

import styles from './header-topline.module.css'

export const HeaderTopline = () => {
  const { content } = $settings.get()

  return content.promotionText && content.promotionButtonText ? (
    <div className={styles.topline}>
      <Container className={styles.container}>
        <span className={styles.text}>{content.promotionText}</span>{' '}
        <a href="#" className={styles.callBack}>
          {content.promotionButtonText}
        </a>
      </Container>
    </div>
  ) : null
}
