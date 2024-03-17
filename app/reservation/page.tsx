'use client'

import { Container } from '@/components/container'
import { useLanguage } from '@/store/use-language'
import Link from 'next/link'

export default function Page() {
  const { language } = useLanguage()

  return (
    <main className='pt-32 pb-24'>
      <Container>
        <h1 className='text-3xl md:text-4xl lg:text-5xl font-semibold pb-4'>
          {language === 'cz' && 'Vyberte si penzion'}
          {language === 'en' && 'Choose your guesthouse'}
        </h1>
        <div className='grid md:grid-cols-2 gap-4 md:gap-10'>
          <Link href='/reservation/classic'>
            <div className='aspect-square rounded-3xl relative overflow-hidden'>
              <img
                src='/reservation/classic.webp'
                className='absolute inset-0 w-full h-full rounded-3xl hover:scale-110 transition object-cover'
              />
              <p className='absolute bottom-3 right-3 text-2xl md:text-4xl lg:text-6xl font-semibold text-white'>
                {language === 'cz' && 'classic'}
                {language === 'en' && 'classic'}
                {language === 'ru' && 'классика'}
              </p>
            </div>
          </Link>
          <Link href='/reservation/deluxe'>
            <div className='aspect-square rounded-3xl relative overflow-hidden'>
              <img
                src='/reservation/deluxe.webp'
                className='absolute inset-0 w-full h-full rounded-3xl hover:scale-110 transition object-cover'
              />
              <p className='absolute bottom-3 right-3 text-2xl md:text-4xl lg:text-6xl font-semibold text-white'>
                {language === 'cz' && 'deluxe'}
                {language === 'en' && 'deluxe'}
                {language === 'ru' && 'люкс'}
              </p>
            </div>
          </Link>
        </div>
      </Container>
    </main>
  )
}
