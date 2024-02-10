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
          <FooterIcon name='facebook' icon={FaFacebook} href='' />
          <FooterIcon name='instagram' icon={FaInstagram} href='' />
          <FooterIcon name='tiktok' icon={FaTiktok} href='' />
        </div>

        <p className='mt-12 text-xs text-center text-light md:text-base sm:mt-4'>
          &copy;{new Date().getFullYear()} Dhiffushi Inn
          {language === 'cs' && <> Všechna práva vyhrazena.</>}
          {language === 'en' && <> All rights reserved.</>}
        </p>
      </Container>
    </footer>
  )
}
