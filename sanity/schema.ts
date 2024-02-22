import { type SchemaTypeDefinition } from 'sanity'

import review from './schemaTypes/review'
import snorkeling from './schemaTypes/snorkeling'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [review, snorkeling],
}
