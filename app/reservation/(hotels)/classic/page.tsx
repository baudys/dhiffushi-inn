import { Grid } from '@/components/reservation/grid'
import { cachedClient } from '@/sanity/lib/client'
import { ClassicQuery } from '@/sanity/lib/queries'

export const revalidate = 60

export default async function Page() {
  const rooms = await cachedClient(ClassicQuery)

  return (
    <main className='pt-32 pb-24'>
      <Grid rooms={rooms} />
    </main>
  )
}
