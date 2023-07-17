import localFont from 'next/font/local'
import type { Metadata } from 'next'

import { Header } from '@/components/Header'
import { Footer } from '@/components/Footer'
import { Layout } from '@/components/Layout'

import './globals.css'

const openSans = localFont({ src: '../../public/assets/fonts/OpenSans-VariableFont.ttf' })

export const metadata: Metadata = {
  title: 'Lock Shop',
  description: 'Магазин замков, доступных каждому'
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={openSans.className}>
        <Layout>
          <Header />
          {children}
          <Footer />
        </Layout>
      </body>
    </html>
  )
}
