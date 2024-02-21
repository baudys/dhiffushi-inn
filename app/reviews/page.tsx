import { ReviewsGrid } from '@/components/reviews/reviews-grid'
import { cachedClient } from '@/sanity/lib/client'
import { ReviewsQuery } from '@/sanity/lib/queries'

export const revalidate = 60

export default async function Page() {
  const reviews = await cachedClient(ReviewsQuery)

  return (
    <main className='pt-32 pb-24'>
      <ReviewsGrid reviews={reviews} />
    </main>
  )
}
