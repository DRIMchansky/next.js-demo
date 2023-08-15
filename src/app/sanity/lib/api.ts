import { createClient } from 'next-sanity'

import { apiVersion, dataset, projectId, useCdn } from '../env'
import { GeneralData, HeadersData } from '@/shared/types'
import { generalQuery, headersQuery } from '../queries'
import { Language, i18n } from '@/app/languages'

export const baseParams = {
  defaultLocale: i18n.base
}

const client = createClient({
  apiVersion,
  dataset,
  projectId,
  useCdn
})

export const fetchGeneralData = async (language: Language): Promise<GeneralData> => {
  const queryParams = { ...baseParams, language }
  const data = await client.fetch<GeneralData>(generalQuery, queryParams)

  return data
}

export const fetchHeadersData = async (language: Language): Promise<HeadersData> => {
  const queryParams = { ...baseParams, language }
  const data = await client.fetch<HeadersData>(headersQuery, queryParams)

  return data
}
