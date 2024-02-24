import { Container } from '@/components/container'
import { Title } from '@/components/home/title'
import { ReviewsGrid } from '@/components/reviews/reviews-grid'
import { cachedClient } from '@/sanity/lib/client'
import { ReviewsQuery } from '@/sanity/lib/queries'

export const revalidate = 60

export default async function Page() {
  const reviews = await cachedClient(ReviewsQuery)

  return (
    <main className='pt-32 pb-24'>
      <Container className='mb-6 lg:mb-14'>
        <Title
          labelCz='Přečtěte si, co o nás říkají naši hosté'
          labelEn='Read what our guests have to say about us'
        />
      </Container>
      <ReviewsGrid reviews={reviews} />
    </main>
  )
}
