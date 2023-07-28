'use client'

import React, { useEffect, useRef, useState } from 'react'
import { FocusTrap, createFocusTrap } from 'focus-trap'
import { useSearchParams } from 'next/navigation'
import { usePathname } from 'next/navigation'
import Link from 'next/link'
import clsx from 'clsx'

import { InlineIconHeart } from '../shared/inline-icon/heart'
import { InlineIconCart } from '../shared/inline-icon/cart'
import { useWindowSize } from '@/app/hooks/use-window-size'
import { Navigation, NavigationData } from './navigation'
import { HEADER_CHANGE_WIDTH } from '@/app/constants'
import { Hamburger } from './hamburger'
import { Topline } from './topline'
import { Phone } from './phone'

import styles from './styles.module.css'

const navigationData: NavigationData = [
  { label: 'Главная', slug: '/' },
  {
    label: 'Каталог',
    slug: '/catalog',
    subitems: [
      { label: 'Накладные электронные замки', slug: '/catalog?filter=filter-query1' },
      { label: 'Врезные электронные замки', slug: '/catalog?filter=filter-query2' },
      { label: 'Замки для квартиры', slug: '/catalog?filter=filter-query3' },
      { label: 'Замки для дома', slug: '/catalog?filter=filter-query4' },
      { label: 'Замки для отелей', slug: '/catalog?filter=filter-query5' },
      { label: 'Замки для офиса', slug: '/catalog?filter=filter-query6' },
      { label: 'Замки для шкафчиков', slug: '/catalog?filter=filter-query7' },
      { label: 'Замки для раздевалок', slug: '/catalog?filter=filter-query8' },
      { label: 'Смотреть все', slug: '/catalog', special: true }
    ]
  },
  { label: 'Оптовая продажа', slug: '/wholesale' },
  { label: 'О нас', slug: '/about' }
]

export const Header = () => {
  const [isMobileMenuOpened, setMobileMenuOpened] = useState(false)
  const [addClosedClass, setClosedClass] = useState(true)
  const [isAnimationInProgress, setAnimationInProgress] = useState(false)

  const isMobile = useWindowSize().width < HEADER_CHANGE_WIDTH
  const path = usePathname()
  const searchParams = useSearchParams().toString()
  const headerElement = useRef<HTMLElement | null>(null)
  const htmlElement = useRef<HTMLElement | null>(null)
  const focusTrap = useRef<FocusTrap | null>(null)

  // set property for mobile menu top inset
  const updadeHeaderHeightProperty = () => {
    headerElement.current?.style.setProperty('--header-height', `${headerElement.current?.offsetHeight}px`)
  }

  const handleTransitionEnd = () => {
    setAnimationInProgress(false)
    setClosedClass(!isMobileMenuOpened)
  }

  const toggleMobileMenu = () => {
    if (isAnimationInProgress) return

    setAnimationInProgress(true)
    setClosedClass(false)

    setTimeout(
      () =>
        setMobileMenuOpened(prev => {
          const next = !prev
          next ? focusTrap.current?.activate() : focusTrap.current?.deactivate()
          return next
        }),
      20
    )
  }

  // on mount
  useEffect(() => {
    updadeHeaderHeightProperty()
    window.addEventListener('resize', updadeHeaderHeightProperty)

    htmlElement.current = document.querySelector('html')

    focusTrap.current = createFocusTrap(headerElement.current as HTMLElement)
  }, [])

  // close mobile menu if path or params changed
  useEffect(() => {
    setClosedClass(true)
    setMobileMenuOpened(false)
    focusTrap.current?.deactivate()
  }, [path, searchParams])

  // toggle class for prevent scroll when mobile modal is open
  useEffect(() => {
    htmlElement.current?.classList.toggle('mobile-menu-open', !addClosedClass)
  }, [addClosedClass])

  return (
    <header className={styles.header} ref={headerElement}>
      <Topline />

      <div className={styles.wrapper}>
        <Hamburger
          isMobileMenuOpened={isMobileMenuOpened}
          onClick={() => toggleMobileMenu()}
          disabled={isAnimationInProgress}
        />

        <div
          className={clsx(styles.contentWrapper, isMobileMenuOpened && styles.open, addClosedClass && styles.closed)}
          onTransitionEnd={handleTransitionEnd}
        >
          <Navigation
            data={navigationData}
            isMobile={isMobile}
            path={path}
            searchParams={searchParams}
            className={styles.navigation}
          />
          <Phone className={styles.phone} />
        </div>

        <Link href="/" className={styles.icon} aria-label="Favorite goods">
          <InlineIconHeart />
        </Link>
        <Link href="/" className={styles.icon} aria-label="Shopping cart">
          <InlineIconCart />
        </Link>
      </div>
    </header>
  )
}
