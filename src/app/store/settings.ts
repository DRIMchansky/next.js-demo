import { deepMap } from 'nanostores'

import { settingsStatic } from '../data/settings-static-data'
import { NavData } from '@/shared/types'
import { Language } from '../languages'

export type AppSettings = {
  language: Language
  content: Record<string, string>
  mainNavData: NavData
  infoNavData: NavData
}

export const $settings = deepMap<AppSettings>(settingsStatic)
