'use client'

import { useRef } from 'react'

import { $settings, Settings } from '@/app/store/settings'

type Props = {
  settings: Settings
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
