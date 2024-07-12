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
      name: 'titleRu',
      title: 'Název 🇷🇺',
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
          { title: 'Šnorchlování', value: 'snorkeling' },
          { title: 'Ostrovy', value: 'islands' },
          { title: 'Aktivity na Ostrově', value: 'activities' },
          { title: 'Vodní Sporty', value: 'sports' },
          { title: 'Rybaření', value: 'fishing' },
          { title: 'Vyhlídky', value: 'views' },
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
    defineField({
      name: 'overviewRu',
      title: 'Přehled 🇷🇺',
      type: 'string',
    }),
    defineField({
      name: 'requirementsCz',
      title: 'Požadavky 🇨🇿',
      type: 'array',
      of: [{ type: 'string' }],
    }),
    defineField({
      name: 'requirementsEn',
      title: 'Požadavky 🇬🇧',
      type: 'array',
      of: [{ type: 'string' }],
    }),
    defineField({
      name: 'requirementsRu',
      title: 'Požadavky 🇷🇺',
      type: 'array',
      of: [{ type: 'string' }],
    }),
    defineField({
      name: 'bringCz',
      title: 'Co s Sebou 🇨🇿',
      type: 'array',
      of: [{ type: 'string' }],
    }),
    defineField({
      name: 'bringEn',
      title: 'Co s Sebou 🇬🇧',
      type: 'array',
      of: [{ type: 'string' }],
    }),
    defineField({
      name: 'bringRu',
      title: 'Co s Sebou 🇷🇺',
      type: 'array',
      of: [{ type: 'string' }],
    }),
    defineField({
      name: 'getCz',
      title: 'Co Dostanete 🇨🇿',
      type: 'array',
      of: [{ type: 'string' }],
    }),
    defineField({
      name: 'getEn',
      title: 'Co Dostanete 🇬🇧',
      type: 'array',
      of: [{ type: 'string' }],
    }),
    defineField({
      name: 'getRu',
      title: 'Co Dostanete 🇷🇺',
      type: 'array',
      of: [{ type: 'string' }],
    }),
  ],
  preview: {
    select: {
      title: 'titleCz',
      media: 'image',
    },
  },
})
