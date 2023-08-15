import { Metadata } from 'next'

import { settingsStaticData } from '@/app/data/settings-static-data'
import { $settings } from '@/app/store/settings'

export async function generateMetadata(): Promise<Metadata> {
  const settings = $settings.get()
  const generalData = settings.generalData || settingsStaticData.generalData!
  const headersData = settings.headersData || settingsStaticData.headersData!

  return {
    title: `${headersData.catalog} – ${generalData.title}`
  }
}

export default function Catalog() {
  return <div>Catalog content</div>
}
