import { useStore } from '@nanostores/react'
import React from 'react'
import clsx from 'clsx'

import { formatCurrency } from '@/shared/functions/format-currency'
import { ButtonLink } from '@/shared/components/button-link'
import { Button } from '@/shared/components/button'
import { $settings } from '@/app/store/settings'

import styles from './hero-content.module.css'

type Props = {
  title: string
  description: string
  price: number
  priceSale?: number
  isCurrent: boolean
  className?: string
}

export const HeroContent = ({ title, description, price, priceSale, isCurrent, className }: Props) => {
  const settings = useStore($settings)

  return (
    <div className={clsx(styles.content, className)}>
      <h2 className={styles.header}>{title}</h2>

      <p className={styles.description}>{description}</p>

      <div className={styles.priceTitle}>{settings.content.price}</div>

      <div className={styles.priceBox}>
        <span className={styles.price}>{formatCurrency(price, settings.language)}</span>
        {priceSale && <span className={styles.priceSale}>{formatCurrency(priceSale, settings.language)}</span>}
      </div>

      <div className={styles.buttonBox}>
        <Button className={styles.button} tabIndex={isCurrent ? 0 : -1} theme="primary">
          {settings.content.addToBasket}
        </Button>

        <ButtonLink href="#" className={styles.link} tabIndex={isCurrent ? 0 : -1}>
          {settings.content.learnMore}
        </ButtonLink>
      </div>
    </div>
  )
}
