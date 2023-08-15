import { groq } from 'next-sanity'

export const generalQuery = groq`*[_type == "general"][0]{
  ...,
  ${['description', 'address', 'seeAll', 'promotionText', 'promotionButtonText']
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
  ...,
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
    'address',
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
