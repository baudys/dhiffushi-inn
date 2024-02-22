'use client'

import { urlForImage } from '@/sanity/lib/image'
import Carousel from '../carousel/carousel'
import CarouselItem from '../carousel/carousel-item'
import { useLanguage } from '@/store/use-language'
import { Calendar, Timer } from 'lucide-react'
import Link from 'next/link'

interface Props {
  data: any[]
}

export const Row = ({ data }: Props) => {
  const { language } = useLanguage()

  return (
    <Carousel numOfSlides={3} loop={false}>
      {data.map((item, i) => {
        return (
          <CarouselItem index={i} key={i} className='max-w-[400px]'>
            <Link href={`/experiences/${item.slug.current}`}>
              <div className='relative aspect-[3/4] w-[400px] overflow-hidden'>
                <img
                  src={urlForImage(item.image)}
                  className='absolute inset-0 w-full h-full object-cover hover:scale-110 transition duration-300'
                />
              </div>
              <h2 className='font-medium'>
                {language === 'cz' && item.titleCz}
                {language === 'en' && item.titleEn}
              </h2>
              <p className='text-sm text-zinc-600 flex items-center gap-1'>
                <Timer size={18} />
                {item.duration}
              </p>
              <p className='text-sm text-zinc-600 flex items-center gap-1'>
                <Calendar size={18} />
                {language === 'cz' && item.daysCz}
                {language === 'en' && item.daysEn}
              </p>
              <p className=''>
                od {language === 'cz' && item.priceCz}
                {language === 'en' && item.priceEn}
              </p>
            </Link>
          </CarouselItem>
        )
      })}
    </Carousel>
  )
}
