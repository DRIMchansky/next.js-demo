import { groq } from 'next-sanity'

export const generalQuery = groq`*[_type == "general"][0]{
  title,
  ${['description', 'address', 'seeAll', 'promotionText', 'promotionButtonText', 'price', 'addToBasket', 'learnMore']
    .map(id => {
      return `
    "${id}": coalesce(
      ${id}[_key == $language][0].value, 
      ${id}[_key == $defaultLocale][0].value
    ),`
    })
    .join('')}
}`

export const headersQuery = groq`*[_type == "headers"][0]{
  ${[
    'home',
    'aboutUs',
    'catalog',
    'electricLocks',
    'apartmentLocks',
    'officeLocks',
    'wholesale',
    'navigation',
    'contacts',
    'addressHeader',
    'info',
    'phones',
    'devivery',
    'guarantees',
    'returns'
  ]
    .map(id => {
      return `
    "${id}": coalesce(
      ${id}[_key == $language][0].value, 
      ${id}[_key == $defaultLocale][0].value
    ),`
    })
    .join('')}
}`

export const locksQuery = groq`*[_type == "lock"]{
  title,
  poster,
  isHero,
  price,
  priceSale,
  ${['name', 'description']
    .map(id => {
      return `
    "${id}": coalesce(
      ${id}[_key == $language][0].value, 
      ${id}[_key == $defaultLocale][0].value
    ),`
    })
    .join('')}
}`
