import { atom } from 'nanostores'
import { Image } from 'sanity'

type Lock = {
  title: string,
  name: string,
  isHero: boolean,
  poster: Image
}

export type Locks = Array<Lock>

export const $locks = atom<Locks>([])
