import { Experiences } from '@/components/experiences/experiences'
import { cachedClient } from '@/sanity/lib/client'
import { DivingQuery } from '@/sanity/lib/queries'

export const revalidate = 60

export default async function Page() {
  const diving = await cachedClient(DivingQuery)

  return (
    <main className='pt-32 pb-24'>
      <Experiences diving={diving} />
    </main>
  )
}
