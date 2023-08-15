import { Language } from '@/app/languages'

export type AppSettings = {
  language: Language
  content: Record<string, string>
  mainNavData: NavData
  infoNavData: NavData
}

type NavItem = {
  label: string
  slug: string
  localeId?: string
  special?: boolean
  subitems?: NavItem[]
}

export type NavData = NavItem[]

export type PageProps = {
  children: React.ReactNode
  params: {
    language: Language
  }
}
