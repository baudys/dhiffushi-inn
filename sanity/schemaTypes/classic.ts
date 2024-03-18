import { defineField, defineType } from 'sanity'

export default defineType({
  name: 'classic',
  title: 'Classic',
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
      name: 'tagCz',
      title: 'Štítek 🇨🇿',
      type: 'string',
    }),
    defineField({
      name: 'tagEn',
      title: 'Štítek 🇬🇧',
      type: 'string',
    }),
    defineField({
      name: 'tagRu',
      title: 'Štítek 🇷🇺',
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
      name: 'guests',
      title: 'Počet Hostů',
      type: 'string',
    }),
    defineField({
      name: 'maxAdults',
      title: 'Maximální Počet Dospělých',
      type: 'string',
    }),
    defineField({
      name: 'maxChildren',
      title: 'Maximální Počet Dětí',
      type: 'string',
    }),
    defineField({
      name: 'beds',
      title: 'Počet Postelí',
      type: 'string',
    }),
    defineField({
      name: 'bathrooms',
      title: 'Počet Koupelen',
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
      name: 'm2',
      title: 'm2',
      type: 'string',
    }),
    defineField({
      name: 'includedCz',
      title: 'Obsahuje 🇨🇿',
      type: 'array',
      of: [{ type: 'string' }],
    }),
    defineField({
      name: 'includedEn',
      title: 'Obsahuje 🇬🇧',
      type: 'array',
      of: [{ type: 'string' }],
    }),
    defineField({
      name: 'includedRu',
      title: 'Obsahuje 🇷🇺',
      type: 'array',
      of: [{ type: 'string' }],
    }),
    defineField({
      name: 'reservations',
      title: 'Objednávky',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            {
              name: 'name',
              title: 'Jméno',
              type: 'string',
            },
            {
              name: 'email',
              title: 'Email',
              type: 'string',
            },
            {
              name: 'phone',
              title: 'Telefonní Číslo',
              type: 'string',
            },
            {
              name: 'startDate',
              title: 'Začáteční Datum',
              type: 'datetime',
            },
            {
              name: 'endDate',
              title: 'Konečný Datum',
              type: 'datetime',
            },
            {
              name: 'adults',
              title: 'Dospělí',
              type: 'string',
            },
            {
              name: 'children',
              title: 'Děti',
              type: 'string',
            },
            {
              name: 'priceCz',
              title: 'Cena Kč 🇨🇿',
              type: 'string',
            },
            {
              name: 'priceEn',
              title: 'Cena $ 🇬🇧',
              type: 'string',
            },

            {
              name: 'message',
              title: 'Zpráva',
              type: 'string',
            },
          ],
        },
      ],
    }),
  ],
  preview: {
    select: {
      title: 'titleCz',
      media: 'image',
    },
  },
})
