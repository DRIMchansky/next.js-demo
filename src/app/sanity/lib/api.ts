import { createClient } from 'next-sanity'

import { apiVersion, dataset, projectId, useCdn } from '../env'
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

export const fetchContent = async (language: Language): Promise<Record<string, string>> => {
  const queryParams = { ...baseParams, language }

  const [generalData, headersData] = await Promise.all([
    client.fetch<Record<string, string>>(generalQuery, queryParams),
    client.fetch<Record<string, string>>(headersQuery, queryParams)
  ])

  return {
    ...generalData,
    ...headersData
  }
}
