import React, { ButtonHTMLAttributes } from 'react'
import clsx from 'clsx'

import { InlineIconMenuClose } from '@/shared/components/inline-icon/menu-close'
import { InlineIconMenuOpen } from '@/shared/components/inline-icon/menu-open'

import styles from './hamburger.module.css'

type Props = {
  isMobileMenuOpened: boolean
  onClick: (value: boolean) => void
} & ButtonHTMLAttributes<HTMLButtonElement>

export const Hamburger = ({ isMobileMenuOpened, onClick, ...props }: Props) => {
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
      {isMobileMenuOpened ? (
        <InlineIconMenuClose className={clsx(styles.icon, styles.visible)} />
      ) : (
        <InlineIconMenuOpen className={clsx(styles.icon, styles.visible)} />
      )}
    </button>
  )
}
