import localFont from 'next/font/local'
import type { Metadata } from 'next'
import clsx from 'clsx'

import { Layout } from '@/shared/components/layout'
import { client } from '../../sanity/lib/client'
import { Header } from '@/sections/header'
import { Footer } from '@/sections/footer'

import styles from './styles/global.module.css'
import './styles/globals.css'

export const openSans = localFont({
  src: '../../public/assets/fonts/OpenSans-VariableFont.ttf',
  fallback: ['sans-serif']
})

export async function generateMetadata(): Promise<Metadata> {
  const generalData = await client.fetch(`*[_type == "general"]`)
  const { title, description } = generalData[0]

  return {
    title,
    description
  }
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={clsx(openSans.className, styles.body)}>
        <Layout>
          <Header />
          {children}
          <Footer />
        </Layout>
      </body>
    </html>
  )
}
