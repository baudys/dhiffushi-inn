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
      <div className='grid grid-cols-[3fr_1fr] relative mt-4'>
        <Info room={room} />
        <Card room={room} />
      </div>
    </Container>
  )
}
