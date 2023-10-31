import React, { ButtonHTMLAttributes, ReactNode, forwardRef } from 'react'

import styles from './button.module.css'
import clsx from 'clsx'

type Theme = 'primary'

type Props = {
  children: ReactNode
  theme: Theme
  className?: string
} & ButtonHTMLAttributes<HTMLButtonElement>

export const Button = forwardRef<HTMLButtonElement, Props>(({ children, theme, className, ...props }, ref) => {
  return (
    <button ref={ref} className={clsx(styles.button, styles[theme], className)} {...props} type="button">
      {children}
    </button>
  )
})

Button.displayName = 'Button'
