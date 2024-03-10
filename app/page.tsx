import { Experiences } from '@/components/home/experiences'
import { Faq } from '@/components/home/faq'
import { Gallery } from '@/components/home/gallery'
import Hero from '@/components/home/hero'
import { Influencer } from '@/components/home/influencer'
import { Reviews } from '@/components/home/reviews'
import { cachedClient } from '@/sanity/lib/client'
import { ExperiencesQuery, ReviewsQuery } from '@/sanity/lib/queries'

export const revalidate = 60

export default async function Page() {
  const reviews = await cachedClient(ReviewsQuery)
  const diving = await cachedClient(ExperiencesQuery)
  let experiences: any = []

  experiences = experiences.concat(diving)

  return (
    <main className='space-y-40'>
      <Hero />
      <Gallery />
      <Experiences
        experience={experiences[Math.floor(Math.random() * experiences.length)]}
      />
      <Reviews reviews={reviews.slice(0, 2)} />
      <Faq />
      <Influencer />
    </main>
  )
}
