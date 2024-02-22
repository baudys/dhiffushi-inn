'use client'

import { useLanguage } from '@/store/use-language'
import { Container } from '../container'
import { useState } from 'react'
import { Row } from './row'
import { cn } from '@/lib/utils'

interface Props {
  diving: any[]
  relax: any[]
  water: any[]
  culture: any[]
}

export const Experiences = ({ diving, relax, water, culture }: Props) => {
  const { language } = useLanguage()

  const [category, setCategory] = useState('diving')

  return (
    <Container>
      <div className='flex justify-between items-center'>
        <button
          onClick={() => setCategory('diving')}
          className={cn('', category === 'diving' && 'font-bold')}
        >
          {language === 'cz' && 'Potápění a šnorchlování'}
          {language === 'en' && 'Diving and Snorkeling'}
        </button>
        <button
          onClick={() => setCategory('relax')}
          className={cn('', category === 'relax' && 'font-bold')}
        >
          {language === 'cz' && 'Luxusní odpočinek na pláži'}
          {language === 'en' && 'Luxury Beach Relaxation'}
        </button>
        <button
          onClick={() => setCategory('water')}
          className={cn('', category === 'water' && 'font-bold')}
        >
          {language === 'cz' && 'Vodní sporty'}
          {language === 'en' && 'Water Sports'}
        </button>
        <button
          onClick={() => setCategory('culture')}
          className={cn('', category === 'culture' && 'font-bold')}
        >
          {language === 'cz' && 'Kulturní zážitky'}
          {language === 'en' && 'Cultural Experiences'}
        </button>
      </div>

      {category === 'diving' && diving.length !== 0 && <Row data={diving} />}
      {category === 'relax' && relax.length !== 0 && <Row data={relax} />}
      {category === 'water' && water.length !== 0 && <Row data={water} />}
      {category === 'culture' && culture.length !== 0 && <Row data={culture} />}
    </Container>
  )
}
