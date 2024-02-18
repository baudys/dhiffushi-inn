import { type SchemaTypeDefinition } from 'sanity'

import review from './schemaTypes/review'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [review],
}
