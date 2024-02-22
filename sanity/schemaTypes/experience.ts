import { defineField, defineType } from 'sanity'

export default defineType({
  name: 'experience',
  title: 'Zážitky',
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
      name: 'category',
      title: 'Kategorie',
      type: 'string',
      options: {
        list: [
          { title: 'Potápění a šnorchlování', value: 'diving' },
          { title: 'Luxusní odpočinek na pláži', value: 'relax' },
          { title: 'Vodní sporty', value: 'water' },
          { title: 'Kulturní zážitky', value: 'culture' },
        ],
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
