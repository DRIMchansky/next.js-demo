import 'pure-react-carousel/dist/react-carousel.es.css'
import localFont from 'next/font/local'
import type { Metadata } from 'next'
import clsx from 'clsx'

import { ClientDataPreloader } from '@/shared/components/client-data-preloader'
import { HeaderTopline } from '@/sections/header/components/header-topline'
import { updateNavLabels } from '@/shared/functions/localization'
import { fetchContent, fetchLocks } from '../sanity/lib/api'
import { Layout } from '@/shared/components/layout'
import { mainNavData } from '../data/main-nav'
import { infoNavData } from '../data/info-nav'
import { $settings } from '../store/settings'
import { Header } from '@/sections/header'
import { Footer } from '@/sections/footer'
import { PageProps } from '@/shared/types'
import { $locks } from '../store/locks'

import styles from '../styles/global.module.css'
import '../styles/globals.css'

export const openSans = localFont({
  src: '../../../public/assets/fonts/OpenSans-VariableFont.ttf',
  fallback: ['sans-serif']
})

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { title, description } = await fetchContent(params.language)

  return {
    title,
    description
  }
}

export default async function RootLayout(props: PageProps) {
  const { children, params } = props

  const [content, locks] = await Promise.all([fetchContent(params.language), fetchLocks(params.language)])

  $settings.set({
    ...$settings.get(),
    language: params.language,
    content,
    mainNavData: updateNavLabels(mainNavData, content),
    infoNavData: updateNavLabels(infoNavData, content)
  })

  $locks.set(locks)

  return (
    <html lang={params.language}>
      <body className={clsx(openSans.className, styles.body)}>
        <ClientDataPreloader settings={$settings.get()} locks={$locks.get()} />
        <Layout>
          <Header>
            <HeaderTopline />
          </Header>
          {children}
          <Footer />
        </Layout>
      </body>
    </html>
  )
}
