import { Detail } from '@/components/reservation/detail'
import { cachedClient } from '@/sanity/lib/client'
import { ClassicItemQuery, ClassicPathsQuery } from '@/sanity/lib/queries'

export const revalidate = 60

export async function generateStaticParams() {
  const old = await cachedClient(ClassicPathsQuery)

  return old
}

export default async function Page({ params }: { params: any }) {
  const room = await cachedClient(ClassicItemQuery, params)

  return (
    <main className='pt-32 pb-24'>
      <Detail room={room} />
    </main>
  )
}
