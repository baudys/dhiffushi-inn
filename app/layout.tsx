import type { Metadata } from 'next'
import { Quicksand } from 'next/font/google'
import './globals.css'
import { Nav } from '@/components/navbar/nav'
import { Footer } from '@/components/footer/footer'
import { Toaster } from '@/components/ui/sonner'

const font = Quicksand({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Dhiffushi Inn',
  description:
    'We are a Czech-Maldivian family running a guesthouse on the island of Dhiffushi.',
  creator: 'Daniel Anthony Baudyš',
  authors: [{ name: 'Daniel Anthony Baudyš', url: 'https://baudys.dev' }],
  category: 'guesthouse',
  keywords: [
    'maldives',
    'guest house',
    'house',
    'hotel',
    'vacation',
    'beach',
    'ocean',
  ],
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
