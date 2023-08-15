import { Language } from '@/app/languages'

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
