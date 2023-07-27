import React, { useEffect, useRef, useState } from 'react'
import Link from 'next/link'
import clsx from 'clsx'

import { SUBMENU_HIDE_DELAY } from '@/app/constants'
import { Icon } from '@/components/Icon'

import styles from './styles.module.css'

type Item = {
  label: string
  slug: string
  special?: boolean
  subitems?: Item[]
}

export type NavigationData = Item[]

type Props = {
  data: Item[]
  isMobile: boolean
  path: string
  searchParams: string
  className?: string
}

export const Navigation = ({ data, isMobile, path, searchParams, className }: Props) => {
  const [expandedLinkSlug, setExpandedLinkSlug] = useState<string | null>(null)
  const hideTimeout = useRef<number>()
  const isDesktop = !isMobile

  const toggleExpandingMenu = (slug: string | null = null) => {
    window.clearTimeout(hideTimeout.current)
    setExpandedLinkSlug(slug)
  }

  const handlePointerOver = (slug: string) => {
    if (isMobile) return
    toggleExpandingMenu(slug)
  }

  const handlePointerOut = () => {
    if (isMobile) return

    hideTimeout.current = window.setTimeout(() => {
      setExpandedLinkSlug(null)
    }, SUBMENU_HIDE_DELAY)
  }

  const handleExpandPointerDown = (e: React.PointerEvent<HTMLAnchorElement>, slug: string) => {
    if (isDesktop) return

    e.preventDefault()
    setExpandedLinkSlug(slugPrev => (slugPrev === slug ? null : slug))
  }

  const handleExpandKeyDown = (e: React.KeyboardEvent<HTMLAnchorElement>, slug: string) => {
    if (e.code !== 'Enter') return

    e.preventDefault()
    setExpandedLinkSlug(slugPrev => (slugPrev === slug ? null : slug))
  }

  useEffect(toggleExpandingMenu, [path, searchParams])

  return (
    <nav className={clsx(styles.navigation, className)}>
      <ul className={styles.list}>
        {data.map(item => {
          const hasSubitems = !!item.subitems

          return (
            <li
              key={item.slug}
              className={clsx(styles.item, hasSubitems && item.slug === expandedLinkSlug && styles.open)}
              onPointerOver={() => hasSubitems && handlePointerOver(item.slug)}
              onPointerOut={() => hasSubitems && handlePointerOut()}
            >
              <Link
                href={item.slug}
                {...(hasSubitems && { 'aria-expanded': expandedLinkSlug === item.slug })}
                className={clsx(styles.link, hasSubitems && styles.linkExpandable)}
                onPointerDown={e => hasSubitems && handleExpandPointerDown(e, item.slug)}
                onKeyDown={e => hasSubitems && handleExpandKeyDown(e, item.slug)}
              >
                {item.label}
                {hasSubitems && <Icon id="collapse" className={styles.collapseIcon} />}
              </Link>

              {hasSubitems && (
                <ul className={styles.sublist}>
                  {item.subitems?.map(item => (
                    <li key={item.slug} className={clsx(styles.item, styles.subitem)}>
                      <Link
                        href={item.slug}
                        className={clsx(styles.link, item.special && styles.linkSpecial)}
                        onClick={() => toggleExpandingMenu()}
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
