import { infoNavData } from './info-nav'
import { mainNavData } from './main-nav'
import { i18n } from '../languages'
import { Settings } from '../store/settings'

export const settingsStaticData: Settings = {
  language: i18n.base,
  generalData: {
    address: 'Россия, Ростов-на-Дону ул. Богачева, 16',
    description: 'Магазин замков, доступных каждому',
    promotionButtonText: 'Обратный звонок',
    promotionText: 'Скидка 10% по промокоду “ЗАМОК” на все заказы до 10.09',
    seeAll: 'Смотреть все',
    title: 'Lock Shop'
  },
  headersData: {
    aboutUs: 'О нас',
    address: 'Адрес',
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
