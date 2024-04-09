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
      name: 'priceNoFood',
      title: 'Cena Bez stravy',
      type: 'string',
    }),
    defineField({
      name: 'priceBreakfast',
      title: 'Cena se Snídaní',
      type: 'string',
    }),
    defineField({
      name: 'priceHalf',
      title: 'Cena s Polopenzí',
      type: 'string',
    }),
    defineField({
      name: 'priceFull',
      title: 'Cena s Plnou Penzí',
      type: 'string',
    }),
    defineField({
      name: 'guests',
      title: 'Počet Hostů',
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
      name: 'm2',
      title: 'm2',
      type: 'string',
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
              name: 'guests',
              title: 'Hosté',
              type: 'string',
            },
            {
              name: 'dining',
              title: 'Strava',
              type: 'string',
            },
            {
              name: 'price',
              title: 'Cena',
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
