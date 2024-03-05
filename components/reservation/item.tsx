'use client'

import { urlForImage } from '@/sanity/lib/image'
import { useLanguage } from '@/store/use-language'
import Link from 'next/link'

interface Props {
  room: any
}

export const Item = ({ room }: Props) => {
  const { language } = useLanguage()

  return (
    <Link href={`/reservation/old/{room.slug.current}`}>
      <div className='aspect-square relative overflow-hidden rounded-3xl'>
        <img
          src={urlForImage(room.images[0])}
          alt={room.titleEn}
          className='absolute inset-0 w-full h-full object-cover rounded-3xl hover:scale-110 transition'
        />
      </div>
      <h2 className='font-semibold mt-1'>
        {language === 'cz' && room.titleCz}
        {language === 'en' && room.titleEn}
      </h2>
      <p className='text-zinc-600'>
        {language === 'cz' && <>od {room.priceCz} Kč / noc</>}
        {language === 'en' && <>starting at ${room.priceEn} / night</>}
      </p>
    </Link>
  )
}
