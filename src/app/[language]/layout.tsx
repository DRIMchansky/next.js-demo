import localFont from 'next/font/local'
import type { Metadata } from 'next'
import clsx from 'clsx'

import { SettingsPreloader } from '@/shared/components/settings-preloader'
import { fetchGeneralData, fetchHeadersData } from '../sanity/lib/api'
import { localizeNavData } from '@/shared/functions/localization'
import { HeaderTopline } from '@/sections/header/topline'
import { Layout } from '@/shared/components/layout'
import { mainNavData } from '../data/main-nav'
import { infoNavData } from '../data/info-nav'
import { $settings } from '../store/settings'
import { Header } from '@/sections/header'
import { Footer } from '@/sections/footer'
import { PageProps } from '@/shared/types'

import styles from '../styles/global.module.css'
import '../styles/globals.css'

export const openSans = localFont({
  src: '../../../public/assets/fonts/OpenSans-VariableFont.ttf',
  fallback: ['sans-serif']
})

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { title, description } = await fetchGeneralData(params.language)

  return {
    title,
    description
  }
}

export default async function RootLayout(props: PageProps) {
  const { children, params } = props

  const [headers, general] = await Promise.all([fetchHeadersData(params.language), fetchGeneralData(params.language)])

  $settings.set({
    ...$settings.get(),
    language: params.language,
    generalData: general,
    headersData: headers,
    mainNavData: localizeNavData(mainNavData, headers),
    infoNavData: localizeNavData(infoNavData, headers)
  })

  return (
    <html lang={params.language}>
      <body className={clsx(openSans.className, styles.body)}>
        <SettingsPreloader settings={$settings.get()} />
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
