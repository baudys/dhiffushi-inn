import { useState, useEffect } from 'react'
import { differenceInDays } from 'date-fns'
import { MinusCircle, PlusCircle } from 'lucide-react'
import { Separator } from '../ui/separator'
import { Button } from '../ui/button'
import Link from 'next/link'
import { useReservation } from '@/store/use-reservation'
import { Calendar } from '../ui/calendar'
import { useLanguage } from '@/store/use-language'

interface Props {
  room: any
}

export const Card = ({ room }: Props) => {
  const { language } = useLanguage()
  const {
    setRoomId,
    setStartDate,
    setEndDate,
    guests,
    setGuests,
    priceCz,
    setPriceCz,
    priceEn,
    setPriceEn,
  } = useReservation()

  const [range, setRange] = useState<any>()
  const [numOfDays, setNumOfDays] = useState(0)

  useEffect(() => {
    setRoomId(room._id)
  }, [])

  useEffect(() => {
    const days = differenceInDays(range?.to, range?.from)
    setNumOfDays(days)
    setPriceCz(days * room.priceCz * guests)
    setPriceEn(days * room.priceEn * guests)
  }, [range, guests])

  useEffect(() => {
    setStartDate(range?.from)
    setEndDate(range?.to)
  }, [range?.from, range?.to])

  const handleDecrementGuests = () => {
    setGuests(Math.max(1, guests - 1))
  }

  const handleIncrementGuests = () => {
    setGuests(Math.min(room.guests, guests + 1))
  }

  return (
    <div className='sticky top-28 left-0 self-start shadow-lg bg-zinc-100 border border-zinc-400/50 p-4 rounded-xl'>
      <Calendar
        mode='range'
        selected={range}
        onSelect={setRange}
        className='rounded-md border'
      />

      <div className='flex justify-between items-center mt-4 select-none'>
        <p>
          {language === 'cz' && 'Hosté'}
          {language === 'en' && 'Guests'}
          {language === 'ru' && 'Гости'}
        </p>
        <div className='flex gap-2 items-center'>
          <MinusCircle
            onClick={handleDecrementGuests}
            size={16}
            className='cursor-pointer'
          />
          <span className='select-none'>{guests}</span>
          <PlusCircle
            onClick={handleIncrementGuests}
            size={16}
            className='cursor-pointer'
          />
        </div>
      </div>

      {numOfDays > 0 && (
        <>
          <Separator className='my-4' />
          <p className='text-xl'>
            <span className='flex items-center justify-between'>
              <b>
                {language === 'cz' && 'celkem'}
                {language === 'en' && 'total'}
                {language === 'ru' && 'всего'}
              </b>
              <b>
                {language === 'cz' && `$${priceCz.toLocaleString('cs')}`}
                {language === 'en' && `$${priceEn.toLocaleString('en')}`}
                {language === 'ru' && `$${priceEn.toLocaleString('en')}`}
              </b>
            </span>
          </p>
          <Separator className='my-4' />
          <Link href='/reservation/contact'>
            <Button
              className='bg-cyan-500 hover:bg-cyan-500 w-full font-bold text-lg'
              size='lg'
            >
              {language === 'cz' && 'Rezervovat'}
              {language === 'en' && 'Reserve'}
              {language === 'ru' && 'Резерв'}
            </Button>
          </Link>
        </>
      )}
    </div>
  )
}
