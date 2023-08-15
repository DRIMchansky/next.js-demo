import { Metadata } from 'next'

import { $settings } from '@/app/store/settings'

export async function generateMetadata(): Promise<Metadata> {
  const { content } = $settings.get()

  return {
    title: `${content.wholesale} – ${content.title}`
  }
}

export default function Wholesale() {
  return <div>Wholesale content</div>
}
