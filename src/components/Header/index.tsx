'use client'

import React, { useEffect, useRef, useState } from 'react'
import Link from 'next/link'
import clsx from 'clsx'

import { Navigation } from './Navigation'
import { Hamburger } from './Hamburger'
import { Topline } from './Topline'
import { Phone } from './Phone'
import { Icon } from '../Icon'

import styles from './styles.module.css'

export const Header = () => {
  const [isMobileMenuOpened, setMobileMenuOpened] = useState(false)
  const [addClosedClass, setClosedClass] = useState(true)
  const [isAnimationInProgress, setAnimationInProgress] = useState(false)

  const headerElement = useRef<HTMLElement>(null)

  // set property for mobile menu top inset
  const updadeHeaderHeightProperty = () => {
    headerElement.current?.style.setProperty('--header-height', `${headerElement.current?.offsetHeight}px`)
  }
  useEffect(() => {
    updadeHeaderHeightProperty()
    window.addEventListener('resize', updadeHeaderHeightProperty)
  }, [])

  const handleTransitionEnd = () => {
    setAnimationInProgress(false)
    setClosedClass(!isMobileMenuOpened)
  }

  const handleHamburgerClick = () => {
    if (isAnimationInProgress) return

    setAnimationInProgress(true)
    setClosedClass(false)

    setTimeout(() => setMobileMenuOpened(prev => !prev), 20)
  }

  return (
    <header className={styles.header} ref={headerElement}>
      <Topline />

      <div className={styles.wrapper}>
        <Hamburger
          isMobileMenuOpened={isMobileMenuOpened}
          onClick={handleHamburgerClick}
          disabled={isAnimationInProgress}
        />

        <div
          className={clsx(styles.contentWrapper, isMobileMenuOpened && styles.open, addClosedClass && styles.closed)}
          onTransitionEnd={handleTransitionEnd}
        >
          <Navigation />
          <Phone />
        </div>

        <Link href="/" className={styles.icon} aria-label="Favorite goods">
          <Icon id="heart" />
        </Link>
        <Link href="/" className={styles.icon} aria-label="Shopping cart">
          <Icon id="cart" />
        </Link>
      </div>
    </header>
  )
}
