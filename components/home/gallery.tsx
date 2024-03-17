import { hotelandoverview } from '@/database/gallery'
import { Row } from '../gallery/row'
import { Container } from '../container'
import { Title } from './title'

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
      <Row images={hotelandoverview} />
    </div>
  )
}
