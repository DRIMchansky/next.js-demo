import React, { ButtonHTMLAttributes } from 'react'
import clsx from 'clsx'

import { InlineIconMenuClose } from '@/components/InlineIcon/MenuClose'
import { InlineIconMenuOpen } from '@/components/InlineIcon/MenuOpen'

import styles from './styles.module.css'

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
      <InlineIconMenuOpen className={clsx(styles.icon, !isMobileMenuOpened && styles.visible)} />
      <InlineIconMenuClose className={clsx(styles.icon, isMobileMenuOpened && styles.visible)} />
    </button>
  )
}
