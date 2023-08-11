import localFont from 'next/font/local'
import type { Metadata } from 'next'
import clsx from 'clsx'

import { Layout } from '@/shared/components/layout'
import { fetchGeneralData } from '../sanity/lib/api'
import { Header } from '@/sections/header'
import { Footer } from '@/sections/footer'
import { Language } from '../languages'

import styles from '../styles/global.module.css'
import '../styles/globals.css'

type Props = {
  children: React.ReactNode
  params: {
    language: Language
  }
}

export const openSans = localFont({
  src: '../../../public/assets/fonts/OpenSans-VariableFont.ttf',
  fallback: ['sans-serif']
})

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { title, description } = await fetchGeneralData(params.language)

  return {
    title,
    description
  }
}

export default function RootLayout(props: Props) {
  const { children, params } = props

  return (
    <html lang={params.language}>
      <body className={clsx(openSans.className, styles.body)}>
        <Layout>
          <Header language={params.language} />
          {children}
          <Footer language={params.language} />
        </Layout>
      </body>
    </html>
  )
}
