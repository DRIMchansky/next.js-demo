import { AppSettings } from '../store/settings'
import { infoNavData } from './info-nav'
import { mainNavData } from './main-nav'
import { i18n } from '../languages'

export const settingsStatic: AppSettings = {
  language: i18n.base,
  content: {
    // general
    address: 'Россия, Ростов-на-Дону ул. Богачева, 16',
    description: 'Магазин замков, доступных каждому',
    promotionButtonText: 'Обратный звонок',
    promotionText: 'Скидка 10% по промокоду “ЗАМОК” на все заказы до 10.09',
    seeAll: 'Смотреть все',
    title: 'Lock Shop',
    // headers
    aboutUs: 'О нас',
    addressHeader: 'Адрес',
    apartmentLocks: 'Замки для квартиры',
    catalog: 'Каталог',
    contacts: 'Наши контакты',
    devivery: 'Доставка и оплата',
    electricLocks: 'Электронные замки',
    guarantees: 'Гарантии',
    home: 'Главная',
    info: 'Информация',
    navigation: 'Навигация',
    officeLocks: 'Замки для офиса',
    phones: 'Телефоны',
    returns: 'Возврат товара',
    wholesale: 'Оптовая продажа'
  },
  mainNavData: mainNavData,
  infoNavData: infoNavData
}
