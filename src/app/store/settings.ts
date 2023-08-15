import { deepMap } from 'nanostores'

import { settingsStatic } from '../data/settings-static-data'
import { AppSettings } from '@/shared/types'

export const $settings = deepMap<AppSettings>(settingsStatic)
