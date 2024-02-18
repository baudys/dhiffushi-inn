import { createClient } from 'next-sanity'

import { apiVersion, dataset, projectId, useCdn, token } from '../env'
import { cache } from 'react'

export const client = createClient({
  apiVersion,
  dataset,
  projectId,
  useCdn,
  token,
})

export const cachedClient = cache(client.fetch.bind(client))
