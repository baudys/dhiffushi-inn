'use client'

import Link from 'next/link'
import { Container } from '../container'
import { useEffect, useState } from 'react'
import { cn } from '@/lib/utils'
import LanguageSelector from './language-selector'
import { Menu } from 'lucide-react'
import { useLanguage } from '@/store/use-language'
import { useMenu } from '@/store/use-menu'
import { MobileNavbar } from './mobile-navbar'

export const Nav = () => {
  const { language } = useLanguage()
  const { isMenuOpen, openMenu } = useMenu()

  const [isTopOfTheScreen, setIsTopOfTheScreen] = useState<boolean>(false)

  const links = [
    {
      label:
        language === 'cz'
          ? 'Rezervace'
          : language === 'en'
          ? 'Reservation'
          : '',
      href: '/reservation',
    },
    {
      label: language === 'cz' ? 'Výlety' : language === 'en' ? 'Trips' : '',
      href: '/trips',
    },
    {
      label: language === 'cz' ? 'Recenze' : language === 'en' ? 'Reviews' : '',
      href: '/reviews',
    },
    {
      label: language === 'cz' ? 'Galerie' : language === 'en' ? 'Gallery' : '',
      href: '/gallery',
    },
    {
      label: language === 'cz' ? 'O Nás' : language === 'en' ? 'About Us' : '',
      href: '/about-us',
    },
    {
      label: language === 'cz' ? 'Kontakt' : language === 'en' ? 'Contact' : '',
      href: '/contact',
    },
  ]

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY === 0) {
        setIsTopOfTheScreen(true)
      }
      if (window.scrollY !== 0) setIsTopOfTheScreen(false)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <nav
      className={cn(
        'z-10 w-full fixed left-0 top-0 py-5 transition duration-300',
        isTopOfTheScreen
          ? 'bg-transparent text-zinc-50'
          : 'bg-zinc-50/80 backdrop-blur-xl border-b border-b-black/20 text-zinc-950'
      )}
    >
      <Container>
        <div className='flex items-center justify-between'>
          <Link href='' className='transition duration-300'>
            <img
              src={isTopOfTheScreen ? '/logo/white.webp' : '/logo/black.webp'}
              alt='logo'
              className='h-12'
            />
          </Link>

          <div className='flex items-center gap-2 lg:gap-10'>
            <ul className='gap-6 items-center hidden lg:flex'>
              {links.map(link => (
                <li key={link.href} className='hover:underline'>
                  <Link href={link.href}>{link.label}</Link>
                </li>
              ))}
            </ul>

            <Menu onClick={() => openMenu()} className='lg:hidden' />

            <LanguageSelector isTopOfTheScreen={isTopOfTheScreen} />
          </div>
        </div>
      </Container>

      {isMenuOpen && <MobileNavbar links={links} />}
    </nav>
  )
}
