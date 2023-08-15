import { Metadata } from 'next'

import { $settings } from '@/app/store/settings'

export async function generateMetadata(): Promise<Metadata> {
  const { content } = $settings.get()

  return {
    title: `${content.catalog} – ${content.title}`
  }
}

export default function Catalog() {
  return <div>Catalog content</div>
}
