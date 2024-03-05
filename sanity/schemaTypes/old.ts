import { defineField, defineType } from 'sanity'

export default defineType({
  name: 'old',
  title: 'Staré Pokoje',
  type: 'document',
  fields: [
    defineField({
      name: 'titleCz',
      title: 'Název 🇨🇿',
      type: 'string',
    }),
    defineField({
      name: 'titleEn',
      title: 'Název 🇬🇧',
      type: 'string',
    }),
    defineField({
      name: 'slug',
      title: 'Odkaz',
      type: 'slug',
      options: {
        source: 'titleEn',
        maxLength: 96,
      },
    }),
    defineField({
      name: 'images',
      title: 'Obrázky',
      type: 'array',
      of: [
        {
          type: 'image',
        },
      ],
    }),
    defineField({
      name: 'priceCz',
      title: 'Cena 🇨🇿',
      type: 'string',
    }),
    defineField({
      name: 'priceEn',
      title: 'Cena 🇬🇧',
      type: 'string',
    }),
    defineField({
      name: 'overviewCz',
      title: 'Přehled 🇨🇿',
      type: 'string',
    }),
    defineField({
      name: 'overviewEn',
      title: 'Přehled 🇬🇧',
      type: 'string',
    }),
  ],
  preview: {
    select: {
      title: 'titleCz',
      media: 'image',
    },
  },
})
