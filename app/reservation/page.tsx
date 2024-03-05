import { Container } from '@/components/container'
import Link from 'next/link'

export default function Page() {
  return (
    <main className='pt-32 pb-24'>
      <Container className='grid md:grid-cols-2 gap-4 md:gap-10'>
        <Link href='/reservation/old'>
          <div className='aspect-video rounded-3xl relative overflow-hidden w-full h-full'>
            <img
              src='/flags/cz.webp'
              className='absolute inset-0 w-full h-full rounded-3xl hover:scale-110 transition'
            />
          </div>
          <h2>OLD</h2>
        </Link>
        <Link href='/reservation/new'>
          <div className='aspect-video rounded-3xl relative overflow-hidden w-full h-full'>
            <img
              src='/flags/en.webp'
              className='absolute inset-0 w-full h-full rounded-3xl hover:scale-110 transition'
            />
          </div>
          <h2>NEW</h2>
        </Link>
      </Container>
    </main>
  )
}
