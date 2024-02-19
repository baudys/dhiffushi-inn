import { Container } from '../container'
import { Row } from './row'
import { hotelandoverview } from '@/database/gallery'
import { Title } from './title'

export const Gallery = () => {
  return (
    <Container>
      <section>
        <Title labelCz='Hotel a Okolí' labelEn='Hotel & Overview' />
        <Row images={hotelandoverview} />
      </section>
    </Container>
  )
}
