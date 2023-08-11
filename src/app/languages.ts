export type Language = 'ru' | 'en'

type LanguageData = {
  id: Language
  title: string
  isDefault?: boolean
}

const languages: LanguageData[] = [
  { id: 'ru', title: 'Russian', isDefault: true },
  { id: 'en', title: 'English' }
]

const i18n = {
  languages,
  base: languages.find(item => item.isDefault)!.id
}

export { i18n }
