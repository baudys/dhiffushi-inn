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
      <Icon className='w-6 h-6 fill-cyan-500 hover:fill-cyan-600 transition' />
      <p className='sr-only'>{name}</p>
    </Link>
  )
}
