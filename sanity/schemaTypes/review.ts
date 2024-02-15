import { defineField, defineType } from 'sanity'

export default defineType({
  name: 'review',
  title: 'Hodnocení',
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      title: 'Jméno',
      type: 'string',
    }),
    defineField({
      name: 'text',
      title: 'Slovní Hodnocení',
      type: 'string',
    }),
    defineField({
      name: 'rating',
      title: 'Hvězdičky',
      type: 'number',
      validation: Rule => Rule.min(1).max(5),
    }),
    defineField({
      name: 'date',
      title: 'Datum',
      type: 'string',
    }),
  ],
  preview: {
    select: {
      title: 'name',
      media: 'image',
    },
  },
})
