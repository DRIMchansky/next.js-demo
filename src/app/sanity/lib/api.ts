import { createClient } from 'next-sanity'

import { apiVersion, dataset, projectId, useCdn } from '../env'
import { Language, i18n } from '@/app/languages'
import { generalQuery } from '../queries'

export const baseParams = {
  defaultLocale: i18n.base
}

const client = createClient({
  apiVersion,
  dataset,
  projectId,
  useCdn
})

type GeneralData = {
  title: string
  description: string
  address: string
}

export const fetchGeneralData = async (language: Language): Promise<GeneralData> => {
  const queryParams = { ...baseParams, language }
  const data = await client.fetch<GeneralData>(generalQuery, queryParams)

  return data
}
