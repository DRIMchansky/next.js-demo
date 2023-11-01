import Link from 'next/link'
import React from 'react'
import clsx from 'clsx'

import { ExternalIcon } from '@/shared/components/external-icon'
import { Container } from '@/shared/components/container'
import { $settings } from '@/app/store/settings'

import styles from './footer.module.css'

export const Footer = () => {
  const { content, mainNavData, infoNavData, language } = $settings.get()

  return (
    <footer className={styles.footer}>
      <Container className={styles.container}>
        <div className={styles.icons}>
          <ul className={styles.list}>
            <li className={styles.item}>
              <a href="https://vk.com/" className={styles.link} aria-label="Our VK" rel="noopener noreferrer me">
                <ExternalIcon id="vk" className={styles.icon} />
              </a>
            </li>
            <li>
              <a
                href="https://twitter.com/"
                className={styles.link}
                aria-label="Our Twitter"
                rel="noopener noreferrer me"
              >
                <ExternalIcon id="twitter" className={styles.icon} />
              </a>
            </li>
            <li>
              <a
                href="https://www.facebook.com/"
                className={styles.link}
                aria-label="Our Facebook"
                rel="noopener noreferrer me"
              >
                <ExternalIcon id="facebook" className={styles.icon} />
              </a>
            </li>
          </ul>
        </div>

        <div className={styles.infoWrapper}>
          <div>
            <p className={styles.title}>{content.navigation}</p>
            <ul className={styles.list}>
              {mainNavData.map(({ label, slug }) => {
                return (
                  <li className={styles.item} key={label}>
                    <Link href={`/${language}${slug}`} className={clsx(styles.link, styles.navLink)}>
                      {label}
                    </Link>
                  </li>
                )
              })}
            </ul>
          </div>

          <div>
            <p className={styles.title}>{content.contacts}</p>

            <p className={styles.subtitle}>{content.phones}</p>
            <a href="tel:89665588499" className={clsx(styles.link, styles.contactLink)}>
              +7 (966) 55 88 499
            </a>
            <a href="tel:89662222499" className={clsx(styles.link, styles.contactLink)}>
              +7 (966) 22 22 499
            </a>

            <p className={styles.subtitle}>Email</p>
            <a href="mailto:testmail@mail.ru" className={clsx(styles.link, styles.contactLink)}>
              testmail@mail.ru
            </a>
            <a href="mailto:testmail@gmail.com" className={clsx(styles.link, styles.contactLink)}>
              testmail@gmail.com
            </a>
          </div>

          <div>
            <p className={styles.title}>{content.addressHeader}</p>
            <p className={styles.text}>{content.address}</p>
          </div>

          <div>
            <p className={styles.title}>{content.info}</p>
            <ul className={styles.list}>
              {infoNavData.map(({ label, slug }) => {
                return (
                  <li className={styles.item} key={label}>
                    <Link href={`/${language}${slug}`} className={clsx(styles.link, styles.navLink)}>
                      {label}
                    </Link>
                  </li>
                )
              })}
            </ul>
          </div>
        </div>

        <div className={styles.disclaimer}>© {new Date().getFullYear()} All rights reserved.</div>
      </Container>
    </footer>
  )
}
