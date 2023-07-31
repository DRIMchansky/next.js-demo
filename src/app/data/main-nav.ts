import { NavData } from '@/shared/types'

export const mainNavData: NavData = [
  { label: 'Главная', slug: '/' },
  {
    label: 'Каталог',
    slug: '/catalog',
    subitems: [
      { label: 'Накладные электронные замки', slug: '/catalog?filter=filter-query1' },
      { label: 'Врезные электронные замки', slug: '/catalog?filter=filter-query2' },
      { label: 'Замки для квартиры', slug: '/catalog?filter=filter-query3' },
      { label: 'Замки для дома', slug: '/catalog?filter=filter-query4' },
      { label: 'Замки для отелей', slug: '/catalog?filter=filter-query5' },
      { label: 'Замки для офиса', slug: '/catalog?filter=filter-query6' },
      { label: 'Замки для шкафчиков', slug: '/catalog?filter=filter-query7' },
      { label: 'Замки для раздевалок', slug: '/catalog?filter=filter-query8' },
      { label: 'Смотреть все', slug: '/catalog', special: true }
    ]
  },
  { label: 'Оптовая продажа', slug: '/wholesale' },
  { label: 'О нас', slug: '/about' }
]
