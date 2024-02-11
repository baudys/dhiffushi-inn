'use client'

import { useMenu } from '@/store/use-menu'
import { X } from 'lucide-react'
import Link from 'next/link'
import { NavIcon } from './nav-icon'
import { FaFacebook, FaInstagram, FaTiktok } from 'react-icons/fa6'
import { useLanguage } from '@/store/use-language'

interface Props {
  links: {
    label: string
    href: string
  }[]
}

export const MobileNavbar = ({ links }: Props) => {
  const { language } = useLanguage()
  const { closeMenu } = useMenu()

  return (
    <div className='fixed top-0 left-0 w-screen h-screen bg-white lg:hidden z-[999] grid place-content-center'>
      <X
        onClick={() => closeMenu()}
        className='absolute top-5 right-5 text-zinc-900'
      />

      <ul className='text-center text-lg uppercase space-y-5 mb-40 text-zinc-900'>
        {links.map(link => (
          <li key={link.href}>
            <Link href={link.href}>{link.label}</Link>
          </li>
        ))}
      </ul>

      <div className='absolute bottom-40 left-1/2 -translate-x-1/2 flex gap-4'>
        <NavIcon
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
        <NavIcon
          name='instagram'
          icon={FaInstagram}
          href='https://www.instagram.com/dhiffushi_inn/'
        />
        <NavIcon
          name='tiktok'
          icon={FaTiktok}
          href='https://www.tiktok.com/@dhiffushiinn'
        />
      </div>
    </div>
  )
}
