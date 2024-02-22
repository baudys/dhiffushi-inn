import { defineField, defineType } from 'sanity'

export default defineType({
  name: 'diving',
  title: 'Potápění a Šnorchlování',
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
      name: 'image',
      title: 'Obrázek',
      type: 'image',
      options: {
        hotspot: true,
      },
    }),
    defineField({
      name: 'duration',
      title: 'Doba Trvání',
      type: 'string',
    }),
    defineField({
      name: 'daysCz',
      title: 'Dny 🇨🇿',
      type: 'string',
    }),
    defineField({
      name: 'daysEn',
      title: 'Dny 🇬🇧',
      type: 'string',
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
  ],
  preview: {
    select: {
      title: 'titleCz',
      media: 'image',
    },
  },
})
