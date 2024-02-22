import { type SchemaTypeDefinition } from 'sanity'

import review from './schemaTypes/review'
import experience from './schemaTypes/experience'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [review, experience],
}
