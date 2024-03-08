import { Container } from '@/components/container'
import Link from 'next/link'

export default function Page() {
  return (
    <main className='pt-32 pb-24'>
      <Container className='grid md:grid-cols-2 gap-4 md:gap-10'>
        <Link href='/reservation/old'>
          <div className='aspect-square rounded-3xl relative overflow-hidden'>
            <img
              src='/reservation/old.webp'
              className='absolute inset-0 w-full h-full rounded-3xl hover:scale-110 transition object-cover'
            />
          </div>
        </Link>
        <Link href='/reservation/new'>
          <div className='aspect-square rounded-3xl relative overflow-hidden'>
            <img
              src='/reservation/new.webp'
              className='absolute inset-0 w-full h-full rounded-3xl hover:scale-110 transition object-cover'
            />
          </div>
        </Link>
      </Container>
    </main>
  )
}
