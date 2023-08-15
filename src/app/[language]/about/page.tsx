import { Metadata } from 'next'

import { $settings } from '@/app/store/settings'

export async function generateMetadata(): Promise<Metadata> {
  const { content } = $settings.get()

  return {
    title: `${content.aboutUs} – ${content.title}`
  }
}

export default function About() {
  return <div>About content</div>
}
