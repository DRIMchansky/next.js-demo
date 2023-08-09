import { createClient } from 'next-sanity'

import { apiVersion, dataset, projectId, useCdn } from '../env'

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

export const getGeneralData = async () => {
  return (await client.fetch<GeneralData[]>(`*[_type == "general"]`))[0]
}
