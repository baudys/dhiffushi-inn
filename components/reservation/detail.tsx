'use client'

import { urlForImage } from '@/sanity/lib/image'
import { Container } from '../container'
import { useLanguage } from '@/store/use-language'

interface Props {
  room: any
}

export const Detail = ({ room }: Props) => {
  const { language } = useLanguage()

  return (
    <Container>
      <h2 className='font-semibold text-2xl mb-4'>
        {language === 'cz' && room.titleCz}
        {language === 'en' && room.titleEn}
      </h2>
      <div className='w-full relative overflow-hidden rounded-3xl h-[60vh]'>
        <img
          src={urlForImage(room.images[0])}
          className='absolute inset-0 w-full h-full object-cover'
        />
      </div>
      <div className='flex items-center gap-2 mt-2 text-zinc-800'>
        <p>
          {room.guests} {language === 'cz' && 'hosté'}
          {language === 'en' && 'guests'}
        </p>
        <p>•</p>
        <p>
          {room.beds} {room.beds === '1' && language === 'cz' && 'postel'}
          {room.beds !== '1' && language === 'cz' && 'postele'}
          {room.beds === '1' && language === 'en' && 'bed'}
          {room.beds !== '1' && language === 'en' && 'beds'}
        </p>
      </div>
    </Container>
  )
}
