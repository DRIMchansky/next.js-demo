import { computed } from 'nanostores'
import { $locks } from './locks'

export const $heroLocks = computed($locks, locks => locks.filter(lock => lock.isHero))
