import React, { useEffect, useRef, useState } from 'react'
import { ReadonlyURLSearchParams } from 'next/navigation'
import { useStore } from '@nanostores/react'
import Link from 'next/link'
import clsx from 'clsx'

import { InlineIconCollapse } from '@/shared/components/inline-icon/collapse'
import { SUBMENU_HIDE_DELAY } from '@/shared/constants'
import { $settings } from '@/app/store/settings'

import styles from './navigation.module.css'

type Props = {
  isMobileBehaviour: boolean
  path: string | null
  searchParams: ReadonlyURLSearchParams | null
  onNavigationLinkClick: (slug: string, hasSubitems: boolean) => void
  className?: string
}

export const Navigation = ({ isMobileBehaviour, path, searchParams, onNavigationLinkClick, className }: Props) => {
  const [expandedLinkSlug, setExpandedLinkSlug] = useState<string | null>(null)
  const hideTimeout = useRef<number>()
  const isDesktopBehaviour = !isMobileBehaviour

  const { mainNavData, language } = useStore($settings)

  const toggleExpandingMenu = (slug: string | null = null) => {
    window.clearTimeout(hideTimeout.current)
    setExpandedLinkSlug(slug)
  }

  const handlePointerOver = (slug: string) => {
    if (isDesktopBehaviour) {
      toggleExpandingMenu(slug)
    }
  }

  const handlePointerOut = () => {
    if (isDesktopBehaviour) {
      hideTimeout.current = window.setTimeout(() => {
        setExpandedLinkSlug(null)
      }, SUBMENU_HIDE_DELAY)
    }
  }

  const handleExpandPointerDown = (e: React.PointerEvent<HTMLAnchorElement>, slug: string) => {
    if (isMobileBehaviour) {
      e.preventDefault()
      setExpandedLinkSlug(slugPrev => (slugPrev === slug ? null : slug))
    }
  }

  const handleExpandKeyDown = (e: React.KeyboardEvent<HTMLAnchorElement>, slug: string) => {
    if (e.code !== 'Enter') return

    e.preventDefault()
    setExpandedLinkSlug(slugPrev => (slugPrev === slug ? null : slug))
  }

  const handleExpandClick = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) =>
    isMobileBehaviour && e.preventDefault()

  useEffect(toggleExpandingMenu, [path, searchParams])

  return (
    <nav className={clsx(styles.navigation, className)}>
      <ul className={styles.list}>
        {mainNavData.map(item => {
          const hasSubitems = !!item.subitems

          return (
            <li
              key={item.slug}
              className={clsx(styles.item, hasSubitems && item.slug === expandedLinkSlug && styles.open)}
              onPointerOver={() => hasSubitems && handlePointerOver(item.slug)}
              onPointerOut={() => hasSubitems && handlePointerOut()}
            >
              <Link
                href={`/${language}${item.slug}`}
                {...(hasSubitems && { 'aria-expanded': expandedLinkSlug === item.slug })}
                className={clsx(styles.link, hasSubitems && styles.linkExpandable)}
                onPointerDown={e => hasSubitems && handleExpandPointerDown(e, item.slug)}
                onKeyDown={e => hasSubitems && handleExpandKeyDown(e, item.slug)}
                onClick={e => {
                  onNavigationLinkClick(item.slug, hasSubitems)
                  hasSubitems && handleExpandClick(e)
                }}
              >
                {item.label}
                {hasSubitems && <InlineIconCollapse className={styles.collapseIcon} />}
              </Link>

              {hasSubitems && (
                <ul className={styles.sublist}>
                  {item.subitems?.map(item => (
                    <li key={item.slug} className={clsx(styles.item, styles.subitem)}>
                      <Link
                        href={`/${language}${item.slug}`}
                        className={clsx(styles.link, item.special && styles.linkSpecial)}
                        onClick={() => {
                          onNavigationLinkClick(item.slug, false)
                          toggleExpandingMenu()
                        }}
                      >
                        {item.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              )}
            </li>
          )
        })}
      </ul>
    </nav>
  )
}
