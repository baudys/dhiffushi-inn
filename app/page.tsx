import { Experiences } from '@/components/home/experiences'
import { Gallery } from '@/components/home/gallery'
import Hero from '@/components/home/hero'
import { Review } from '@/components/home/review'
import { cachedClient } from '@/sanity/lib/client'
import { ReviewsQuery } from '@/sanity/lib/queries'

export const revalidate = 60

export default async function Page() {
  const reviews = await cachedClient(ReviewsQuery)

  return (
    <main className='pb-24 space-y-40'>
      <Hero />
      <Experiences />
      <Gallery />
      <Review review={reviews[0]} />
    </main>
  )
}
