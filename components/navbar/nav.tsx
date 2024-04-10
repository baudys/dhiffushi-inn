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
          : 'Бронирование',
      href: '/reservation',
    },
    {
      label:
        language === 'cz'
          ? 'Zážitky'
          : language === 'en'
          ? 'Experiences'
          : 'Опыты',
      href: '/experiences',
    },
    {
      label:
        language === 'cz'
          ? 'Recenze'
          : language === 'en'
          ? 'Reviews'
          : 'Отзывы',
      href: '/reviews',
    },
    {
      label: 'FAQ',
      href: '/faq',
    },
    {
      label:
        language === 'cz'
          ? 'Galerie'
          : language === 'en'
          ? 'Gallery'
          : 'Галерея',
      href: '/gallery',
    },
    {
      label:
        language === 'cz' ? 'O Nás' : language === 'en' ? 'About Us' : 'О нас',
      href: '/about-us',
    },
    {
      label:
        language === 'cz'
          ? 'Pro Influencery'
          : language === 'en'
          ? 'For Influencers'
          : 'Для инфлюенсеров',
      href: '/influencers',
    },
  ]

  const studio = pathname?.includes('/studio')
  const home = pathname === '/'
  const influencer = pathname?.includes('/influencer')

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
        'z-[1002] w-full py-5 transition duration-300',
        isTopOfTheScreen
          ? 'bg-transparent'
          : 'bg-cyan-300/80 backdrop-blur-md border-b border-b-zinc-500/20 text-zinc-950 shadow-md',
        (home || influencer) && isTopOfTheScreen && 'text-zinc-50',
        studio ? 'block bg-cyan-300' : 'fixed top-0'
      )}
    >
      <Container>
        <div className='flex items-center justify-between'>
          <Link href='/' className='transition duration-300'>
            <img
              src={
                (home || influencer) && isTopOfTheScreen
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
