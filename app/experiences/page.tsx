import { Experiences } from '@/components/experiences/experiences'
import { cachedClient } from '@/sanity/lib/client'
import { ExperiencesQuery } from '@/sanity/lib/queries'

export const revalidate = 60

export default async function Page() {
  const experiences = await cachedClient(ExperiencesQuery)

  const snorkeling = experiences.filter(
    (item: any) => item.category === 'snorkeling'
  )
  const islands = experiences.filter((item: any) => item.category === 'islands')
  const activities = experiences.filter(
    (item: any) => item.category === 'activities'
  )
  const sports = experiences.filter((item: any) => item.category === 'sports')
  const fishing = experiences.filter((item: any) => item.category === 'fishing')

  return (
    <main className='pt-32 pb-24'>
      <Experiences
        snorkeling={snorkeling}
        islands={islands}
        activities={activities}
        sports={sports}
        fishing={fishing}
      />
    </main>
  )
}
