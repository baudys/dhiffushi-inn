import { accomodations, dining, experiences, hotel } from '@/database/gallery'
import { Row } from './row'
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
        <Row images={hotel} />
      </section>
      <section>
        <Title
          labelCz='Ubytování'
          labelEn='Accomodations'
          labelRu='Размещение'
        />
        <Row images={accomodations} />
      </section>
      <section>
        <Title labelCz='Stravování' labelEn='Dining' labelRu='Кейтеринг' />
        <Row images={dining} />
      </section>
      <section>
        <Title labelCz='Zážitky' labelEn='Experiences' labelRu='Опыты' />
        <Row images={experiences} />
      </section>
    </div>
  )
}
