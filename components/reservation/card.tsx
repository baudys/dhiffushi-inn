'use client'

import { useLanguage } from '@/store/use-language'
import { Calendar } from '../ui/calendar'
import { useEffect, useState } from 'react'
import { differenceInDays } from 'date-fns'
import { DateRangePicker } from 'react-date-range'
import { cs, enUS } from 'date-fns/locale'
import { MinusCircle, PlusCircle } from 'lucide-react'
import { Separator } from '@radix-ui/react-separator'

interface Props {
  room: any
}

export const Card = ({ room }: Props) => {
  const { language } = useLanguage()

  const [range, setRange] = useState<any>()
  const [numOfDays, setNumOfDays] = useState(0)
  const [adults, setAdults] = useState(1)
  const [children, setChildren] = useState(0)
  const [totalPriceCz, setTotalPriceCz] = useState(0)
  const [totalPriceEn, setTotalPriceEn] = useState(0)

  useEffect(() => {
    const days = differenceInDays(range?.to, range?.from)

    setNumOfDays(days)

    setTotalPriceCz(days * room.priceCz * (adults + children))
    setTotalPriceEn(days * room.priceEn * (adults + children))
  }, [range, adults, children])

  return (
    <div className='sticky top-28 left-0 self-start shadow-lg bg-zinc-100 border border-zinc-400/50 p-4 rounded-xl'>
      <p className='text-zinc-950 text-lg font-semibold'>
        {language === 'cz' && (
          <>
            <span className='text-zinc-800 text-sm'>od </span> {room.priceCz} Kč
            <span className='text-zinc-600 text-sm font-light'>
              {' '}
              / noc
            </span>{' '}
          </>
        )}
        {language === 'en' && (
          <>
            <span className='text-zinc-800 text-sm'>starting at </span> $
            {room.priceEn}
            <span className='text-zinc-600 text-sm font-light'> / night</span>
          </>
        )}
      </p>
      <Calendar
        mode='range'
        selected={range}
        onSelect={setRange}
        className='rounded-md border mt-2'
      />
      <div className='flex justify-between items-center'>
        <p>
          {language === 'cz' && 'Dospělí'}
          {language === 'en' && 'Adults'}
        </p>
        <div className='flex gap-2 items-center mt-2'>
          <MinusCircle
            onClick={() => setAdults(prev => (prev === 1 ? 1 : prev - 1))}
            size={16}
            className='cursor-pointer'
          />
          <span className='select-none'>{adults}</span>
          <PlusCircle
            onClick={() => setAdults(prev => prev + 1)}
            size={16}
            className='cursor-pointer'
          />
        </div>
      </div>
      <div className='flex justify-between items-center'>
        <p>
          {language === 'cz' && 'Children'}
          {language === 'en' && 'Děti'}
        </p>
        <div className='flex gap-2 items-center mt-2'>
          <MinusCircle
            onClick={() => setChildren(prev => (prev === 0 ? 0 : prev - 1))}
            size={16}
            className='cursor-pointer'
          />
          <span className='select-none'>{children}</span>
          <PlusCircle
            onClick={() => setChildren(prev => prev + 1)}
            size={16}
            className='cursor-pointer'
          />
        </div>
      </div>
      {numOfDays > 0 && (
        <>
          <div className='w-full h-px bg-zinc-500/50 my-4' />
          <p className='text-xl'>
            {language === 'cz' && (
              <span className='flex items-center justify-between'>
                <b>celkem</b>
                <b>{totalPriceCz.toLocaleString('cs')} Kč</b>
              </span>
            )}
            {language === 'en' && (
              <span className='flex items-center justify-between'>
                <b>total</b>
                <b>${totalPriceEn.toLocaleString('en')}</b>
              </span>
            )}
          </p>
        </>
      )}
    </div>
  )
}
