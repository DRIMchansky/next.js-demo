import { createClient } from 'next-sanity'

import { generalQuery, headersQuery, locksQuery } from '../queries'
import { apiVersion, dataset, projectId, useCdn } from '../env'
import { Language, i18n } from '@/app/languages'
import { Locks } from '@/app/store/locks'

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

export const fetchLocks = async (language: Language): Promise<Locks> => {
  const queryParams = { ...baseParams, language }

  return await client.fetch<Locks>(locksQuery, queryParams)
}
