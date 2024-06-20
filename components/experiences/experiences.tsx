'use client'

import { Container } from '../container'
import { Row } from './row'

interface Props {
  snorkeling: any[]
  islands: any[]
  activities: any[]
  sports: any[]
  fishing: any[]
}

export const Experiences = ({
  snorkeling,
  islands,
  activities,
  sports,
  fishing,
}: Props) => {
  return (
    <Container className='space-y-40'>
      {snorkeling.length !== 0 && (
        <Row
          data={snorkeling}
          labelCz='Šnorchlování'
          labelEn='Snorkeling'
          labelRu='Снорклинг'
        />
      )}
      {islands.length !== 0 && (
        <Row
          data={islands}
          labelCz='Ostrovy'
          labelEn='Islands'
          labelRu='Острова'
        />
      )}
      {activities.length !== 0 && (
        <Row
          data={activities}
          labelCz='Aktivity na Ostrově'
          labelEn='Island Activities'
          labelRu='Мероприятия на острове'
        />
      )}
      {sports.length !== 0 && (
        <Row
          data={sports}
          labelCz='Vodní Sporty'
          labelEn='Water Sports'
          labelRu='Водные виды спорта'
        />
      )}
      {fishing.length !== 0 && (
        <Row
          data={fishing}
          labelCz='Rybaření'
          labelEn='Fishing'
          labelRu='Рыбалка'
        />
      )}
    </Container>
  )
}
