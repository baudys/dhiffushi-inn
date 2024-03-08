'use client'

import { useLanguage } from '@/store/use-language'
import { Calendar } from '../ui/calendar'
import { useEffect, useState } from 'react'
import { differenceInDays } from 'date-fns'
import { MinusCircle, PlusCircle } from 'lucide-react'
import { Separator } from '../ui/separator'
import { Button } from '../ui/button'
import Link from 'next/link'
import { useReservation } from '@/store/use-reservation'

interface Props {
  room: any
}

export const Card = ({ room }: Props) => {
  const { language } = useLanguage()
  const {
    setName,
    setEmail,
    setTelephone,
    setStartDate,
    setEndDate,
    adults,
    setAdults,
    children,
    setChildren,
    priceCz,
    setPriceCz,
    priceEn,
    setPriceEn,
  } = useReservation()

  const [range, setRange] = useState<any>()
  const [numOfDays, setNumOfDays] = useState(0)

  useEffect(() => {
    const days = differenceInDays(range?.to, range?.from)

    setNumOfDays(days)

    setPriceCz(days * room.priceCz * (adults + children))
    setPriceEn(days * room.priceEn * (adults + children))
  }, [range, adults, children])

  return (
    <div className='sticky top-28 left-0 self-start shadow-lg bg-zinc-100 border border-zinc-400/50 p-4 rounded-xl'>
      <Calendar
        mode='range'
        selected={range}
        onSelect={setRange}
        className='rounded-md border mt-4'
      />
      <div className='flex justify-between items-center mt-4'>
        <p>
          {language === 'cz' && 'Dospělí'}
          {language === 'en' && 'Adults'}
        </p>
        <div className='flex gap-2 items-center'>
          <MinusCircle
            onClick={() => setAdults(adults === 1 ? 1 : adults - 1)}
            size={16}
            className='cursor-pointer'
          />
          <span className='select-none'>{adults}</span>
          <PlusCircle
            onClick={() => setAdults(adults + 1)}
            size={16}
            className='cursor-pointer'
          />
        </div>
      </div>
      <div className='flex justify-between items-center'>
        <p>
          {language === 'cz' && 'Děti'}
          {language === 'en' && 'Children'}
        </p>
        <div className='flex gap-2 items-center'>
          <MinusCircle
            onClick={() => setChildren(children === 0 ? 0 : children - 1)}
            size={16}
            className='cursor-pointer'
          />
          <span className='select-none'>{children}</span>
          <PlusCircle
            onClick={() => setChildren(children + 1)}
            size={16}
            className='cursor-pointer'
          />
        </div>
      </div>
      {numOfDays > 0 && (
        <>
          <Separator className='my-4' />

          <p className='text-xl'>
            {language === 'cz' && (
              <span className='flex items-center justify-between'>
                <b>celkem</b>
                <b>{priceCz.toLocaleString('cs')} Kč</b>
              </span>
            )}
            {language === 'en' && (
              <span className='flex items-center justify-between'>
                <b>total</b>
                <b>${priceEn.toLocaleString('en')}</b>
              </span>
            )}
          </p>

          <Separator className='my-4' />

          <Link href={`/reservation/contact`}>
            <Button
              className='bg-cyan-500 hover:bg-cyan-500 w-full font-bold text-lg'
              size='lg'
            >
              {language === 'cz' && 'Rezervovat'}
              {language === 'en' && 'Reserve'}
            </Button>
          </Link>
        </>
      )}
    </div>
  )
}
