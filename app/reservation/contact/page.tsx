import { Container } from '@/components/container'
import { Contact } from '@/components/reservation/contact'
import { Summary } from '@/components/reservation/summary'

export default function Page() {
  return (
    <main className='pt-32 pb-24'>
      <Container className='grid md:grid-cols-[2fr_1fr] gap-4 md:gap-10'>
        <Contact />
        <Summary />
      </Container>
    </main>
  )
}
