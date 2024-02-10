import Link from 'next/link'
import { FC } from 'react'

interface FooterIconProps {
  icon: any
  href: string
  name: string
}

export const FooterIcon: FC<FooterIconProps> = ({ icon: Icon, href, name }) => {
  return (
    <Link href={href} target='_blank'>
      <Icon className='w-6 h-6 fill-zinc-700 hover:fill-zinc-900 transition' />
      <p className='sr-only'>{name}</p>
    </Link>
  )
}
