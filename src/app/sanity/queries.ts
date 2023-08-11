import { groq } from 'next-sanity'

export const generalQuery = groq`*[_type == "general"][0]{
  ...,
  "description": coalesce(
    description[_key == $language][0].value, 
    description[_key == $defaultLocale][0].value
  ),
  "address": coalesce(
    address[_key == $language][0].value, 
    address[_key == $defaultLocale][0].value
  ),
}`
