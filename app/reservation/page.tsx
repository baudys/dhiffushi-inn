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
          {language === 'en' && 'Choose your pension'}
        </h1>
        <div className='grid md:grid-cols-2 gap-4 md:gap-10'>
          <Link href='/reservation/old'>
            <div className='aspect-square rounded-3xl relative overflow-hidden'>
              <img
                src='/reservation/old.webp'
                className='absolute inset-0 w-full h-full rounded-3xl hover:scale-110 transition object-cover'
              />
            </div>
          </Link>
          <Link href='/reservation/new'>
            <div className='aspect-square rounded-3xl relative overflow-hidden'>
              <img
                src='/reservation/new.webp'
                className='absolute inset-0 w-full h-full rounded-3xl hover:scale-110 transition object-cover'
              />
            </div>
          </Link>
        </div>
      </Container>
    </main>
  )
}
