import { useState, useEffect } from 'react'
import { differenceInDays } from 'date-fns'
import { MinusCircle, PlusCircle } from 'lucide-react'
import { Separator } from '../ui/separator'
import { Button } from '../ui/button'
import Link from 'next/link'
import { useReservation } from '@/store/use-reservation'
import { Calendar } from '../ui/calendar'
import { useLanguage } from '@/store/use-language'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'

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
    price,
    setPrice,
    dining,
    setDining,
    setView,
    setRoomName,
  } = useReservation()

  const [range, setRange] = useState<any>()
  const [numOfDays, setNumOfDays] = useState(0)

  useEffect(() => {
    setRoomId(room._id)
    setView(room.tagEn)
    setRoomName(room.titleEn)
  }, [])

  useEffect(() => {
    const days = differenceInDays(range?.to, range?.from)
    setNumOfDays(days)

    if (dining === 'No Food') setPrice(days * room.priceNoFood)
    if (dining === 'Breakfast') setPrice(days * room.priceBreakfast)
    if (dining === 'Half Board') setPrice(days * room.priceHalf)
    if (dining === 'Full Board') setPrice(days * room.priceFull)
  }, [range, guests, dining])

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

      <div className='flex justify-between items-center mt-4 select-none'>
        <p>
          {language === 'cz' && 'Stravování'}
          {language === 'en' && 'Dining'}
          {language === 'ru' && 'Кейтеринг'}
        </p>
        <div className='flex gap-2 items-center'>
          <Select onValueChange={e => setDining(e)}>
            <SelectTrigger>
              <SelectValue
                placeholder={
                  language === 'cz'
                    ? 'Vyberte Stravování'
                    : language === 'en'
                    ? 'Select Dining'
                    : language === 'ru'
                    ? 'Выберите питание'
                    : ''
                }
              />
            </SelectTrigger>
            <SelectContent>
              {room.priceNoFood !== 'x' && (
                <SelectItem value='No Food'>
                  {language === 'cz' && 'Bez Stravy'}
                  {language === 'en' && 'No Food'}
                  {language === 'ru' && 'Без еды'}
                </SelectItem>
              )}
              <SelectItem value='Breakfast'>
                {language === 'cz' && 'Snídaně'}
                {language === 'en' && 'Breakfast'}
                {language === 'ru' && 'Завтрак'}
              </SelectItem>
              <SelectItem value='Half Board'>
                {language === 'cz' && 'Polopenze'}
                {language === 'en' && 'Half Board'}
                {language === 'ru' && 'Полупансион'}
              </SelectItem>
              <SelectItem value='Full Board'>
                {language === 'cz' && 'Plná Penze'}
                {language === 'en' && 'Full Board'}
                {language === 'ru' && 'Полная пенсия'}
              </SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>

      {numOfDays > 0 && dining !== '' && (
        <>
          <Separator className='my-4' />
          <p className='text-xl'>
            <span className='flex items-center justify-between'>
              <b>
                {language === 'cz' && 'celkem'}
                {language === 'en' && 'total'}
                {language === 'ru' && 'всего'}
              </b>
              <b>${price}</b>
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
