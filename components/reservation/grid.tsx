import { Container } from '../container'
import { Item } from './item'

interface Props {
  rooms: any[]
}

export const Grid = ({ rooms }: Props) => {
  return (
    <Container className='grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5'>
      {rooms.map(room => (
        <Item key={room.slug.current} room={room} />
      ))}
    </Container>
  )
}
