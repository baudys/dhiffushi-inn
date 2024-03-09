'use client'

import { urlForImage } from '@/sanity/lib/image'
import { Container } from '../container'
import { useLanguage } from '@/store/use-language'
import { AlertOctagon, Backpack } from 'lucide-react'

interface Props {
  experience: any
}

export const Detail = ({ experience }: Props) => {
  const { language } = useLanguage()

  return (
    <Container className='space-y-20 lg:space-y-40'>
      <section>
        <div className='relative aspect-video overflow-hidden'>
          <img
            src={urlForImage(experience.image)}
            alt={experience.titleEn}
            className='absolute inset-0'
          />
        </div>

        <div>
          <h1 className='text-2xl md:text-3xl lg:text-4xl mb-1 lg:mb-2 mt-4 font-semibold'>
            {language === 'cz' && experience.titleCz}
            {language === 'en' && experience.titleEn}
          </h1>
          <p>
            {language === 'cz' && experience.overviewCz}
            {language === 'en' && experience.overviewEn}
          </p>
        </div>

        <div className='flex flex-col md:flex-row gap-4 md:gap-16 mt-10'>
          <div>
            <h2>
              {language === 'cz' && 'Doba Trvání'}
              {language === 'en' && 'Duration'}
            </h2>
            <p className='font-semibold text-xl md:text-2xl'>
              {experience.duration}
            </p>
          </div>
          <div>
            <h2>
              {language === 'cz' && 'Cena'}
              {language === 'en' && 'Price'}
            </h2>
            <p className='font-semibold text-xl md:text-2xl'>
              {language === 'cz' && experience.priceCz}
              {language === 'en' && experience.priceEn}
            </p>
          </div>
        </div>
      </section>

      <section>
        <h2 className='uppercase text-xl md:text-2xl  text-zinc-500 mb-4'>
          {language === 'cz' && 'Co je nutné vědět'}
          {language === 'en' && 'Things to know'}
        </h2>

        <div className='divide-y divide-zinc-500/50 space-y-5'>
          {experience.requirementsCz &&
            experience.requirementsCz.length !== 0 &&
            experience.requirementsEn &&
            experience.requirementsEn.length !== 0 && (
              <div>
                <h4 className='flex gap-1 font-semibold items-center text-lg xl:gap-2 xl:text-xl'>
                  <AlertOctagon size={22} />
                  {language === 'cz' && 'Požadavky'}
                  {language === 'en' && 'Requirements'}
                </h4>
                <ul className='list-disc list-inside text-sm ml-8 mt-1'>
                  {language === 'cz' &&
                    experience.requirementsCz.map((item: any) => (
                      <li key={item}>{item}</li>
                    ))}
                  {language === 'en' &&
                    experience.requirementsEn.map((item: any) => (
                      <li key={item}>{item}</li>
                    ))}
                </ul>
              </div>
            )}

          {experience.bringCz &&
            experience.bringCz.length !== 0 &&
            experience.bringEn &&
            experience.bringEn.length !== 0 && (
              <div className='pt-5'>
                <h4 className='flex gap-1 font-semibold items-center text-lg xl:gap-2 xl:text-xl'>
                  <Backpack size={22} />
                  {language === 'cz' && 'Co s Sebou'}
                  {language === 'en' && 'What to Bring'}
                </h4>
                <ul className='list-disc list-inside text-sm ml-8 mt-1'>
                  {language === 'cz' &&
                    experience.bringCz.map((item: any) => (
                      <li key={item}>{item}</li>
                    ))}
                  {language === 'en' &&
                    experience.bringEn.map((item: any) => (
                      <li key={item}>{item}</li>
                    ))}
                </ul>
              </div>
            )}

          {experience.getCz &&
            experience.getCz.length !== 0 &&
            experience.getEn &&
            experience.getEn.length !== 0 && (
              <div className='pt-5'>
                <h4 className='flex gap-1 font-semibold items-center text-lg xl:gap-2 xl:text-xl'>
                  <Backpack size={22} />
                  {language === 'cz' && 'Co Dostanete'}
                  {language === 'en' && 'What you Get'}
                </h4>
                <ul className='list-disc list-inside text-sm ml-8 mt-1'>
                  {language === 'cz' &&
                    experience.bringCz.map((item: any) => (
                      <li key={item}>{item}</li>
                    ))}
                  {language === 'en' &&
                    experience.bringEn.map((item: any) => (
                      <li key={item}>{item}</li>
                    ))}
                </ul>
              </div>
            )}
        </div>
      </section>
    </Container>
  )
}
