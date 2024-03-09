'use client'

import { useLanguage } from '@/store/use-language'
import { Container } from '../container'
import { useState } from 'react'
import { Row } from './row'

interface Props {
  snorkeling: any[]
  islands: any[]
  activities: any[]
  sports: any[]
}

export const Experiences = ({
  snorkeling,
  islands,
  activities,
  sports,
}: Props) => {
  return (
    <Container>
      {snorkeling.length !== 0 && (
        <Row data={snorkeling} labelCz='Šnorchlování' labelEn='Snorkeling' />
      )}
      {islands.length !== 0 && (
        <Row data={islands} labelCz='Ostrovy' labelEn='Islands' />
      )}
      {activities.length !== 0 && (
        <Row
          data={activities}
          labelCz='Aktivity na Ostrově'
          labelEn='Island Activities'
        />
      )}
      {sports.length !== 0 && (
        <Row data={sports} labelCz='Vodní Sporty' labelEn='Water Sports' />
      )}
    </Container>
  )
}
