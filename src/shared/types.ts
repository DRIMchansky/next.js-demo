export type Item = {
  label: string
  slug: string
  special?: boolean
  subitems?: Item[]
}

export type NavData = Item[]
