import localFont from 'next/font/local'
import type { Metadata } from 'next'

import './globals.css'

const openSans = localFont({ src: '../../public/assets/fonts/OpenSans-VariableFont.ttf' })

export const metadata: Metadata = {
  title: 'Lock Shop',
  description: 'Магазин замков, доступных каждому'
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={openSans.className}>{children}</body>
    </html>
  )
}
