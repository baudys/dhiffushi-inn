import { Row } from '../gallery/row'
import { Container } from '../container'
import { Title } from './title'
import { homepage } from '@/database/gallery'

export const Gallery = () => {
  return (
    <div>
      <Container>
        <Title
          labelCz='Běžný den s námi'
          labelEn='A normal day with us'
          labelRu='Обычный день с нами'
        />
      </Container>
      <Row images={homepage} />
    </div>
  )
}
