import { deepMap } from 'nanostores'

import { AppSettings } from '@/shared/types'
import { i18n } from '../languages'

export const $settings = deepMap<AppSettings>({
  language: i18n.base,
  generalData: null,
  headersData: null,
  mainNavData: null,
  infoNavData: null
})
