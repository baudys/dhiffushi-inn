import { Experiences } from '@/components/home/experiences'
import { Gallery } from '@/components/home/gallery'
import Hero from '@/components/home/hero'
import { Influencer } from '@/components/home/influencer'
import { Reviews } from '@/components/home/reviews'
import { cachedClient } from '@/sanity/lib/client'
import { DivingQuery, ReviewsQuery } from '@/sanity/lib/queries'

export const revalidate = 60

export default async function Page() {
  const reviews = await cachedClient(ReviewsQuery)
  const diving = await cachedClient(DivingQuery)
  let experiences: any = []

  experiences = experiences.concat(diving)

  return (
    <main className='pb-24 space-y-40'>
      <Hero />
      <Experiences
        experience={experiences[Math.floor(Math.random() * experiences.length)]}
      />
      <Gallery />
      <Reviews reviews={reviews.slice(0, 2)} />
      <Influencer />
    </main>
  )
}
