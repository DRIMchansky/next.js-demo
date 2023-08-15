import { Language } from '@/app/languages'

export type GeneralData = {
  address: string
  description: string
  promotionButtonText: string
  promotionText: string
  seeAll: string
  title: string
}

export type HeadersData = {
  aboutUs: string
  address: string
  apartmentLocks: string
  catalog: string
  contacts: string
  devivery: string
  electricLocks: string
  guarantees: string
  home: string
  info: string
  navigation: string
  officeLocks: string
  phones: string
  returns: string
  wholesale: string
}

export type AppSettings = {
  language: Language
  generalData: GeneralData | null
  headersData: HeadersData | null
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

export type NavData = NavItem[] | null

export type PageProps = {
  children: React.ReactNode
  params: {
    language: Language
  }
}
