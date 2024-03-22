import { Row } from '../gallery/row'
import { Container } from '../container'
import { Title } from './title'
import { hotel } from '@/database/gallery'

export const Gallery = () => {
  return (
    <div>
      <Container>
        <Title
          labelCz='Hotel a Okolí'
          labelEn='Hotel overview'
          labelRu='Отель и окрестности'
        />
      </Container>
      <Row images={hotel} />
    </div>
  )
}
