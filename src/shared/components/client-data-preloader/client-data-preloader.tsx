'use client'

import { useRef } from 'react'

import { $settings, AppSettings } from '@/app/store/settings'
import { $locks, Locks } from '@/app/store/locks'

type Props = {
  settings: AppSettings,
  locks: Locks
}

/**
 * Pass SSR state to client
 */
export const ClientDataPreloader = (props: Props) => {
  const loaded = useRef(false)

  if (!loaded.current) {
    $settings.set(props.settings)
    $locks.set(props.locks)
    loaded.current = true
  }

  return null
}
