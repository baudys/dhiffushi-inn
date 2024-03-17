import { Row } from './row'
import { hotelandoverview } from '@/database/gallery'
import { Title } from './title'

export const Gallery = () => {
  return (
    <div className='space-y-20 md:space-y-40'>
      <section>
        <Title
          labelCz='Hotel a Okolí'
          labelEn='Hotel overview'
          labelRu='Отель и окрестности'
        />
        <Row images={hotelandoverview} />
      </section>
      <section>
        <Title
          labelCz='Ubytování'
          labelEn='Accomodations'
          labelRu='Размещение'
        />
        <Row images={hotelandoverview} />
      </section>
      <section>
        <Title labelCz='Stravování' labelEn='Dining' labelRu='Кейтеринг' />
        <Row images={hotelandoverview} />
      </section>
      <section>
        <Title labelCz='Zážitky' labelEn='Experiences' labelRu='Опыты' />
        <Row images={hotelandoverview} />
      </section>
    </div>
  )
}
