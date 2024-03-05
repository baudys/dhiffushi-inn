import { type SchemaTypeDefinition } from 'sanity'

import review from './schemaTypes/review'
import experience from './schemaTypes/experience'
import old from './schemaTypes/old'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [review, experience, old],
}
