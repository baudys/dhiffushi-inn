import { Detail } from '@/components/reservation/detail'
import { cachedClient } from '@/sanity/lib/client'
import { ClassicPathsQuery, DeluxeItemQuery } from '@/sanity/lib/queries'

export const revalidate = 60

export async function generateStaticParams() {
  const rooms = await cachedClient(ClassicPathsQuery)

  return rooms
}

export default async function Page({ params }: { params: any }) {
  const room = await cachedClient(DeluxeItemQuery, params)

  return (
    <main className='pt-32 pb-24'>
      <Detail room={room} />
    </main>
  )
}
