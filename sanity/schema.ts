import { type SchemaTypeDefinition } from 'sanity'

import review from './schemaTypes/review'
import experience from './schemaTypes/experience'
import classic from './schemaTypes/classic'
import deluxe from './schemaTypes/deluxe'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [review, experience, classic, deluxe],
}
