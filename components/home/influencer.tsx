'use client'

import { useLanguage } from '@/store/use-language'
import { Container } from '../container'
import { Button } from '../ui/button'
import Link from 'next/link'

export const Influencer = () => {
  const { language } = useLanguage()

  return (
    <div className='relative bg-[url(/influencer/hero.webp)] bg-cover'>
      <div className='absolute inset-0 bg-black/65' />
      <Container className='py-72 flex flex-col md:flex-row justify-between items-center relative z-10'>
        <div>
          <h2 className='text-white font-bold text-2xl sm:text-3xl lg:text-4xl'>
            {language === 'cz' && 'Jsi influencer?'}
            {language === 'en' && 'Are you an influencer?'}
            {language === 'ru' && 'Вы влиятельный человек?'}
          </h2>
          <p className='text-zinc-200'>
            {language === 'cz' &&
              'Máme pro tebe skvělou možnost spolupracovat a podívat se k nám na Maledivy.'}
            {language === 'en' &&
              'We have a great opportunity for you to work with us and visit us in the Maldives.'}
            {language === 'ru' &&
              'У нас есть прекрасная возможность для вас поработать с нами и посетить Мальдивы.'}
          </p>
          <Link href='/influencers'>
            <Button className='bg-cyan-500 hover:bg-cyan-600 mt-6' size='lg'>
              {language === 'cz' && 'Vyplňte žádost!'}
              {language === 'en' && 'Fill out the application!'}
              {language === 'ru' && 'Заполните форму заявки!'}
            </Button>
          </Link>
        </div>
      </Container>
    </div>
  )
}
