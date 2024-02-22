import { Experiences } from '@/components/experiences/experiences'
import { cachedClient } from '@/sanity/lib/client'
import { ExperiencesQuery } from '@/sanity/lib/queries'

export const revalidate = 60

export default async function Page() {
  const experiences = await cachedClient(ExperiencesQuery)

  const diving = experiences.filter((item: any) => item.category === 'diving')
  const relax = experiences.filter((item: any) => item.category === 'relax')
  const water = experiences.filter((item: any) => item.category === 'water')
  const culture = experiences.filter((item: any) => item.category === 'culture')

  return (
    <main className='pt-32 pb-24'>
      <Experiences
        diving={diving}
        relax={relax}
        water={water}
        culture={culture}
      />
    </main>
  )
}
