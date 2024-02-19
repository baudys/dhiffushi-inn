import { AddReview } from '@/components/reviews/add-review'
import { ReviewsGrid } from '@/components/reviews/reviews-grid'
import { cachedClient } from '@/sanity/lib/client'
import { ReviewsQuery } from '@/sanity/lib/queries'

export const revalidate = 60

export default async function Page() {
  const reviews = await cachedClient(ReviewsQuery)

  return (
    <main className='py-24 space-y-20 md:space-y-40'>
      <AddReview />
      <ReviewsGrid reviews={reviews} />
    </main>
  )
}
