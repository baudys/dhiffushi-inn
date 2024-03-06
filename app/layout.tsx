import type { Metadata } from 'next'
import { Quicksand } from 'next/font/google'
import './globals.css'
import { Nav } from '@/components/navbar/nav'
import { Footer } from '@/components/footer/footer'
import { Toaster } from '@/components/ui/sonner'

const font = Quicksand({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Dhiffushi Inn',
  description: '',
}

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang='en'>
      <body className={font.className}>
        <Toaster richColors position='top-center' />

        <Nav />
        {children}
        <Footer />
      </body>
    </html>
  )
}
