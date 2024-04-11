'use client'

import { urlForImage } from '@/sanity/lib/image'
import Carousel from '../carousel/carousel'
import CarouselItem from '../carousel/carousel-item'
import { useLanguage } from '@/store/use-language'
import { Timer } from 'lucide-react'
import Link from 'next/link'
import { Title } from './title'

interface Props {
  data: any[]
  labelCz: string
  labelEn: string
  labelRu: string
}

export const Row = ({ data, labelCz, labelEn, labelRu }: Props) => {
  const { language } = useLanguage()

  console.log(data)

  return (
    <section>
      <Title labelCz={labelCz} labelEn={labelEn} labelRu={labelRu} />
      <Carousel numOfSlides={3} loop={false} arrows>
        {data.map((item, i) => {
          return (
            <CarouselItem
              index={i}
              key={i}
              className='max-w-[400px] mx-2'
              fullOpacity
            >
              <Link href={`/experiences/${item.slug.current}`}>
                <div className='relative aspect-[3/4] w-[350px] sm:w-[400px] overflow-hidden'>
                  <img
                    src={urlForImage(item.image)}
                    className='absolute inset-0 w-full h-full object-cover hover:scale-110 transition duration-300'
                  />
                </div>
                <h2 className='font-medium text-xl sm:text-2xl my-2'>
                  {language === 'cz' && item.titleCz}
                  {language === 'en' && item.titleEn}
                  {language === 'ru' && item.titleRu}
                </h2>
                <p className='text-sm text-zinc-600 flex items-center gap-1'>
                  <Timer size={18} />
                  {item.duration} min
                </p>
                <p className='text-lg sm:text-xl'>${item.priceEn}</p>
              </Link>
            </CarouselItem>
          )
        })}
      </Carousel>
    </section>
  )
}
