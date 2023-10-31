import React, { ReactNode, forwardRef } from 'react'

import styles from './button-link.module.css'
import clsx from 'clsx'
import Link, { LinkProps } from 'next/link'

type Props = {
  children: ReactNode
  className?: string
} & LinkProps

export const ButtonLink = forwardRef<HTMLAnchorElement, Props>(({ children, className, ...props }, ref) => {
  return (
    <Link ref={ref} className={clsx(styles.buttonLink, className)} {...props}>
      {children}
    </Link>
  )
})

ButtonLink.displayName = 'ButtonLink'
