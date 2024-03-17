'use client'

import { useLanguage } from '@/store/use-language'
import { Container } from '../container'
import { FooterIcon } from './footer-icon'
import { FaFacebook, FaInstagram, FaTiktok } from 'react-icons/fa6'

export const Footer = () => {
  const { language } = useLanguage()

  return (
    <footer className='pt-8 lg:pt-12 pb-12 border-t dark:border-zinc-700/50 border-zinc-500/50'>
      <Container>
        <div className='flex justify-center gap-4 mb-14'>
          <FooterIcon
            name='facebook'
            icon={FaFacebook}
            href={
              language === 'cz'
                ? 'https://www.facebook.com/groups/758337458811201'
                : language === 'en'
                ? 'https://www.facebook.com/dhiffushiinnmaldives'
                : ''
            }
          />
          <FooterIcon
            name='instagram'
            icon={FaInstagram}
            href='https://www.instagram.com/dhiffushi_inn/'
          />
          <FooterIcon
            name='tiktok'
            icon={FaTiktok}
            href='https://www.tiktok.com/@dhiffushiinn'
          />
        </div>

        <p className='mt-12 text-xs text-center text-light md:text-base sm:mt-4'>
          &copy;{new Date().getFullYear()} Dhiffushi Inn.
          {language === 'cz' && <> Všechna práva vyhrazena.</>}
          {language === 'en' && <> All rights reserved.</>}
          {language === 'ru' && <> Все права защищены.</>}
        </p>
      </Container>
    </footer>
  )
}
