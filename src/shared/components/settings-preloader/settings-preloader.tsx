'use client'

import { useRef } from 'react'

import { $settings } from '@/app/store/settings'
import { AppSettings } from '@/shared/types'

type Props = {
  settings: AppSettings
}

/**
 * Pass SSR state to client
 */
export const SettingsPreloader = (props: Props) => {
  const loaded = useRef(false)

  if (!loaded.current) {
    $settings.set(props.settings)
    loaded.current = true
  }

  return null
}
