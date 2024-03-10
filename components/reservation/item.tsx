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
    <Link href={`/reservation/classic/${room.slug.current}`}>
      <div className='aspect-square relative overflow-hidden rounded-3xl'>
        <img
          src={urlForImage(room.images[0])}
          alt={room.titleEn}
          className='absolute inset-0 w-full h-full object-cover rounded-3xl hover:scale-110 transition'
        />
        <div className='absolute bottom-3 right-3 z-10 bg-cyan-300/80 rounded-md px-1 py-0.5 border border-zinc-500/70 text-xs'>
          {language === 'cz' && room.tagCz}
          {language === 'en' && room.tagEn}
        </div>
      </div>
      <h2 className='font-semibold mt-1'>
        {language === 'cz' && room.titleCz}
        {language === 'en' && room.titleEn}
      </h2>
      <p className='text-zinc-500 text-sm'>
        {language === 'cz' && <>{room.guests} hosté</>}
        {language === 'en' && <>{room.guests} guests</>}
      </p>
      <p className='text-zinc-800'>
        {language === 'cz' && <>od {room.priceCz} Kč / noc</>}
        {language === 'en' && <>starting at ${room.priceEn} / night</>}
      </p>
    </Link>
  )
}
