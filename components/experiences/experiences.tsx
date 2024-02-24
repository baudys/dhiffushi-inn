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
      <div className='flex flex-col lg:flex-row justify-between items-center text-center'>
        <button
          onClick={() => setCategory('diving')}
          className={cn(
            'px-2 py-1 rounded-md transition border border-zinc-100',
            category === 'diving' && 'font-bold bg-zinc-100 border-zinc-200/60'
          )}
        >
          {language === 'cz' && 'Potápění a šnorchlování'}
          {language === 'en' && 'Diving and Snorkeling'}
        </button>
        <button
          onClick={() => setCategory('relax')}
          className={cn(
            'px-2 py-1 rounded-md transition border border-zinc-100',
            category === 'relax' && 'font-bold bg-zinc-100 border-zinc-200/60'
          )}
        >
          {language === 'cz' && 'Luxusní odpočinek na pláži'}
          {language === 'en' && 'Luxury Beach Relaxation'}
        </button>
        <button
          onClick={() => setCategory('water')}
          className={cn(
            'px-2 py-1 rounded-md transition border border-zinc-100',
            category === 'water' && 'font-bold bg-zinc-100 border-zinc-200/60'
          )}
        >
          {language === 'cz' && 'Vodní sporty'}
          {language === 'en' && 'Water Sports'}
        </button>
        <button
          onClick={() => setCategory('culture')}
          className={cn(
            'px-2 py-1 rounded-md transition border border-zinc-100',
            category === 'culture' && 'font-bold bg-zinc-100 border-zinc-200/60'
          )}
        >
          {language === 'cz' && 'Kulturní zážitky'}
          {language === 'en' && 'Cultural Experiences'}
        </button>
      </div>

      <hr className='w-full h-px bg-zinc-500/60 my-10' />

      {category === 'diving' && diving.length !== 0 && <Row data={diving} />}
      {category === 'relax' && relax.length !== 0 && <Row data={relax} />}
      {category === 'water' && water.length !== 0 && <Row data={water} />}
      {category === 'culture' && culture.length !== 0 && <Row data={culture} />}
    </Container>
  )
}
