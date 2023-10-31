import { languageToLocale, localeCurrencyOptions } from '../locale'
import { Language } from '@/app/languages'

export const formatCurrency = (value: number, lang: Language): string => {
  return new Intl.NumberFormat(languageToLocale[lang], localeCurrencyOptions).format(value).replace(/\u00a0/g, ' ')
}
