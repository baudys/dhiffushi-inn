import { Detail } from '@/components/experiences/detail'
import { cachedClient } from '@/sanity/lib/client'
import { ExperienceQuery, ExperiencesPathsQuery } from '@/sanity/lib/queries'

export const revalidate = 60

export async function generateStaticParams() {
  const experiences = await cachedClient(ExperiencesPathsQuery)

  return experiences
}

async function HotelPage({ params }: { params: any }) {
  const experience = await cachedClient(ExperienceQuery, params, {
    next: { revalidate },
  })

  return <Detail experience={experience} />
}

export default HotelPage
