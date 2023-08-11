import React, { useEffect, useRef, useState } from 'react'
import { ReadonlyURLSearchParams } from 'next/navigation'
import Link from 'next/link'
import clsx from 'clsx'

import { InlineIconCollapse } from '@/shared/components/inline-icon/collapse'
import { SUBMENU_HIDE_DELAY } from '@/shared/constants'
import { Language } from '@/app/languages'
import { Item } from '@/shared/types'

import styles from './navigation.module.css'

type Props = {
  data: Item[]
  isMobileBehaviour: boolean
  path: string | null
  searchParams: ReadonlyURLSearchParams | null
  language: Language
  className?: string
}

export const Navigation = ({ data, isMobileBehaviour, path, searchParams, language, className }: Props) => {
  const [expandedLinkSlug, setExpandedLinkSlug] = useState<string | null>(null)
  const hideTimeout = useRef<number>()
  const isDesktopBehaviour = !isMobileBehaviour

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
                href={`/${language}${item.slug}`}
                {...(hasSubitems && { 'aria-expanded': expandedLinkSlug === item.slug })}
                className={clsx(styles.link, hasSubitems && styles.linkExpandable)}
                onPointerDown={e => hasSubitems && handleExpandPointerDown(e, item.slug)}
                onKeyDown={e => hasSubitems && handleExpandKeyDown(e, item.slug)}
                onClick={e => hasSubitems && handleExpandClick(e)}
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
