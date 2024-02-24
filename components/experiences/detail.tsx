'use client'

import { urlForImage } from '@/sanity/lib/image'
import { Container } from '../container'
import { useLanguage } from '@/store/use-language'
import { AlertOctagon, Backpack } from 'lucide-react'
import Link from 'next/link'

interface Props {
  experience: any
}

export const Detail = ({ experience }: Props) => {
  const { language } = useLanguage()

  return (
    <Container className='space-y-20 lg:space-y-40'>
      <section className='grid lg:grid-cols-2 gap-8'>
        <img
          src={urlForImage(experience.image)}
          alt={experience.titleEn}
          className='aspect-square'
        />
        <div>
          <h1 className='text-xl sm:text-2xl md:text-3xl lg:text-4xl mb-2'>
            {language === 'cz' && experience.titleCz}
            {language === 'en' && experience.titleEn}
          </h1>
          <p>
            {language === 'cz' && experience.overviewCz}
            {language === 'en' && experience.overviewEn}
          </p>
        </div>
      </section>

      <section className='grid md:grid-cols-[1fr_2fr] gap-20'>
        <h2 className='uppercase text-xl sm:text-2xl md:text-3xl lg:text-4xl text-zinc-600'>
          {language === 'cz' && 'Co je nutné vědět'}
          {language === 'en' && 'Things to know'}
        </h2>

        <div className='space-y-8 md:space-y-14'>
          <div>
            <h4 className='flex gap-1 font-semibold items-center text-lg xl:gap-2 xl:text-xl'>
              <AlertOctagon size={22} />
              {language === 'cz' && 'Požadavky'}
              {language === 'en' && 'Requirements'}
            </h4>
            <ul className='list-disc list-inside text-sm ml-8 mt-1'>
              {language === 'cz' &&
                experience.requirementsCz.length !== 0 &&
                experience.requirementsCz.map((item: any) => (
                  <li key={item}>{item}</li>
                ))}
              {language === 'en' &&
                experience.requirementsEn.length !== 0 &&
                experience.requirementsEn.map((item: any) => (
                  <li key={item}>{item}</li>
                ))}
            </ul>
          </div>

          <div>
            <h4 className='flex gap-1 font-semibold items-center text-lg xl:gap-2 xl:text-xl'>
              <Backpack size={22} />
              {language === 'cz' && 'Co s Sebou'}
              {language === 'en' && 'What to Bring'}
            </h4>
            <ul className='list-disc list-inside text-sm ml-8 mt-1'>
              {language === 'cz' &&
                experience.bringCz.length !== 0 &&
                experience.bringCz.map((item: any) => (
                  <li key={item}>{item}</li>
                ))}
              {language === 'en' &&
                experience.bringEn.length !== 0 &&
                experience.bringEn.map((item: any) => (
                  <li key={item}>{item}</li>
                ))}
            </ul>
          </div>
        </div>
      </section>
    </Container>
  )
}
