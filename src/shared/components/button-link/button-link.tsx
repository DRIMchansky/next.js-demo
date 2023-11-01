import React, { ReactNode, forwardRef } from 'react'

import styles from './button-link.module.css'
import clsx from 'clsx'
import Link, { LinkProps } from 'next/link'

type Props = {
  children: ReactNode
  tabIndex?: number
  className?: string
} & LinkProps

export const ButtonLink = forwardRef<HTMLAnchorElement, Props>(({ children, tabIndex, className, ...props }, ref) => {
  return (
    <Link ref={ref} className={clsx(styles.buttonLink, className)} tabIndex={tabIndex} {...props}>
      {children}
    </Link>
  )
})

ButtonLink.displayName = 'ButtonLink'
