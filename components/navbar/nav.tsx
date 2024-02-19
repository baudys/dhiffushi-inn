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
import { usePathname } from 'next/navigation'

export const Nav = () => {
  const pathname = usePathname()

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
      label:
        language === 'cz' ? 'Zážitky' : language === 'en' ? 'Experiences' : '',
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
      label:
        language === 'cz'
          ? 'Pro Influencery'
          : language === 'en'
          ? 'For Influencers'
          : '',
      href: '/influencers',
    },
  ]

  const home = pathname === '/'

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
          ? 'bg-transparent'
          : 'bg-zinc-50/60 backdrop-blur-md border-b border-b-black/20 text-zinc-950',
        home && isTopOfTheScreen && 'text-zinc-50'
      )}
    >
      <Container>
        <div className='flex items-center justify-between'>
          <Link href='/' className='transition duration-300'>
            <img
              src={
                home && isTopOfTheScreen
                  ? '/logo/white.webp'
                  : '/logo/black.webp'
              }
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

            <Menu
              onClick={() => openMenu()}
              className='lg:hidden cursor-pointer'
            />

            <LanguageSelector isTopOfTheScreen={isTopOfTheScreen} home={home} />
          </div>
        </div>
      </Container>

      {isMenuOpen && <MobileNavbar links={links} />}
    </nav>
  )
}
