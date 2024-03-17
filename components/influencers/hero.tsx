'use client'

import { Container } from '../container'
import { useLanguage } from '@/store/use-language'

const Hero = () => {
  const { language } = useLanguage()

  return (
    <section>
      <div className='sticky top-0 flex h-[90vh] lg:min-h-screen'>
        <img
          src='/influencer/hero.webp'
          alt='hero'
          className='absolute object-cover w-full h-full'
        />

        <div className='absolute top-0 left-0 flex w-full h-full pt-32 bg-black/60 lg:pt-0 lg:items-center lg:justify-center'>
          <Container>
            <div className='flex flex-col items-center justify-center p-1'>
              <h1 className='text-white text-4xl lg:text-5xl xl:text-6xl 2xl:text-7xl font-black uppercase text-center'>
                {language === 'cz' && 'Jsi influencer?'}
                {language === 'en' && 'Are you an influencer?'}
                {language === 'ru' && 'Вы влиятельный человек?'}
              </h1>
              <p className='text-lg lg:text-xl xl:text-2xl 2xl:text-3xl text-zinc-200'>
                {language === 'cz' && 'Pojďme spolupracovat'}
                {language === 'en' && "Let's work together"}
                {language === 'ru' && 'Давайте работать вместе'}
              </p>
            </div>
          </Container>
        </div>
      </div>
    </section>
  )
}

export default Hero
