import { Container } from '@/components/container'
import { Contact } from '@/components/reservation/contact'

export default function Page() {
  return (
    <main className='pt-32 pb-24'>
      <Container className='sm:w-[70%] lg:w-[50%]'>
        <Contact />
      </Container>
    </main>
  )
}
