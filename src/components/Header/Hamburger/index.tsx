import React, { ButtonHTMLAttributes } from 'react'

import { Icon } from '@/components/Icon'

import styles from './styles.module.css'

type Props = {
  isMobileMenuOpened: boolean
  onClick: (value: boolean) => void
} & ButtonHTMLAttributes<HTMLButtonElement>

export const Hamburger = ({ isMobileMenuOpened, onClick, ...props }: Props) => {
  const iconId = isMobileMenuOpened ? 'menu-close' : 'menu-open'

  return (
    <button
      onClick={() => onClick(!isMobileMenuOpened)}
      className={styles.hamburger}
      type="button"
      aria-controls="menu"
      aria-label="Toggle menu"
      aria-expanded={isMobileMenuOpened}
      {...props}
    >
      <Icon id={iconId} />
    </button>
  )
}
