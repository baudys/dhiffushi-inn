'use client'

import { Container } from '../container'
import { Card } from './card'
import { Head } from './head'
import { Info } from './info'

interface Props {
  room: any
}

export const Detail = ({ room }: Props) => {
  return (
    <Container>
      <Head room={room} />
      <div className='grid grid-cols-[2.5fr_1fr] relative mt-6 gap-10'>
        <Info room={room} />
        <Card room={room} />
      </div>
    </Container>
  )
}
