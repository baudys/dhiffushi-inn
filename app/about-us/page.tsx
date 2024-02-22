import { Contact } from '@/components/about/contact'
import { Intro } from '@/components/about/intro'

export default function Page() {
  return (
    <main className='pt-32 pb-24 space-y-20 lg:space-y-40'>
      <Intro />
      <Contact />
    </main>
  )
}
