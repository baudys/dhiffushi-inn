import { Detail } from '@/components/experiences/detail'
import { cachedClient } from '@/sanity/lib/client'
import { ExperienceQuery, ExperiencesPathsQuery } from '@/sanity/lib/queries'

export const revalidate = 60

export async function generateStaticParams() {
  const experiences = await cachedClient(ExperiencesPathsQuery)

  return experiences
}

export default async function Page({ params }: { params: any }) {
  const experience = await cachedClient(ExperienceQuery, params, {
    next: { revalidate },
  })

  return (
    <main className='pt-32 pb-24'>
      <Detail experience={experience} />
    </main>
  )
}
