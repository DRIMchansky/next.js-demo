import { NavData } from '@/shared/types'

export const mainNavData: NavData = [
  { label: 'Главная', slug: '/', localeId: 'home' },
  {
    label: 'Каталог',
    slug: '/catalog',
    localeId: 'catalog',
    subitems: [
      { label: 'Электронные замки', slug: '/catalog?filter=filter-query1', localeId: 'electricLocks' },
      { label: 'Замки для квартиры', slug: '/catalog?filter=filter-query3', localeId: 'apartmentLocks' },
      { label: 'Замки для офиса', slug: '/catalog?filter=filter-query6', localeId: 'officeLocks' },
      { label: 'Смотреть все', slug: '/catalog', special: true }
    ]
  },
  { label: 'Оптовая продажа', slug: '/wholesale', localeId: 'wholesale' },
  { label: 'О нас', slug: '/about', localeId: 'aboutUs' }
]
