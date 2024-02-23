'use client'

import { urlForImage } from '@/sanity/lib/image'
import { Container } from '../container'
import { Title } from './title'
import { useLanguage } from '@/store/use-language'
import { Calendar, Timer } from 'lucide-react'
import Link from 'next/link'

interface Props {
  experience: any
}

export const Experiences = ({ experience }: Props) => {
  const { language } = useLanguage()

  return (
    <Container>
      <Title
        labelCz='Zažij s námi něco nového'
        labelEn='Experience something new with us'
      />
      <Link href={`/experiences/${experience.slug.current}`}>
        <div className='relative aspect-video overflow-hidden grid items-end'>
          <div className='absolute bg-gradient-to-r from-black/80 to-transparent from-30% inset-0 z-10 pointer-events-none' />
          <img
            src={urlForImage(experience.image)}
            className='absolute inset-0 w-full h-full object-cover hover:scale-110 transition duration-300'
          />

          <div className='relative z-10 p-8'>
            <h2 className='font-medium text-white text-3xl mb-2'>
              {language === 'cz' && experience.titleCz}
              {language === 'en' && experience.titleEn}
            </h2>
            <p className='text-sm text-zinc-400 flex experiences-center gap-1'>
              <Timer size={18} />
              {experience.duration}
            </p>
            <p className='text-sm text-zinc-400 flex experiences-center gap-1'>
              <Calendar size={18} />
              {language === 'cz' && experience.daysCz}
              {language === 'en' && experience.daysEn}
            </p>
            <p className='text-white text-lg mt-1'>
              od {language === 'cz' && experience.priceCz}
              {language === 'en' && experience.priceEn}
            </p>
          </div>
        </div>
      </Link>
    </Container>
  )
}
