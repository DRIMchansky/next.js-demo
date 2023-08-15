import { defineType } from 'sanity'

export const headers = defineType({
  name: 'headers',
  type: 'document',
  fields: [
    {
      name: 'home',
      type: 'internationalizedArrayString',
      title: 'Главная'
    },
    {
      name: 'aboutUs',
      type: 'internationalizedArrayString',
      title: 'О нас'
    },
    {
      name: 'catalog',
      type: 'internationalizedArrayString',
      title: 'Каталог'
    },
    {
      name: 'electricLocks',
      type: 'internationalizedArrayString',
      title: 'Электронные замки'
    },
    {
      name: 'apartmentLocks',
      type: 'internationalizedArrayString',
      title: 'Замки для квартиры'
    },
    {
      name: 'officeLocks',
      type: 'internationalizedArrayString',
      title: 'Замки для офиса'
    },
    {
      name: 'wholesale',
      type: 'internationalizedArrayString',
      title: 'Оптовая продажа'
    },
    {
      name: 'navigation',
      type: 'internationalizedArrayString',
      title: 'Навигация'
    },
    {
      name: 'contacts',
      type: 'internationalizedArrayString',
      title: 'Наши контакты'
    },
    {
      name: 'addressHeader',
      type: 'internationalizedArrayString',
      title: 'Наш адрес'
    },
    {
      name: 'info',
      type: 'internationalizedArrayString',
      title: 'Информация'
    },
    {
      name: 'phones',
      type: 'internationalizedArrayString',
      title: 'Телефоны'
    },
    {
      name: 'devivery',
      type: 'internationalizedArrayString',
      title: 'Доставка и оплата'
    },
    {
      name: 'guarantees',
      type: 'internationalizedArrayString',
      title: 'Гарантии'
    },
    {
      name: 'returns',
      type: 'internationalizedArrayString',
      title: 'Возврат товара'
    }
  ]
})
