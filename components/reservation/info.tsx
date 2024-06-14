import { useLanguage } from '@/store/use-language'
import { Separator } from '../ui/separator'
import {
  AirVent,
  Coffee,
  Eye,
  LandPlot,
  Rows3,
  Trash,
  Tv,
  User,
  Vault,
  Wifi,
  Wind,
} from 'lucide-react'
import { TbHanger } from 'react-icons/tb'
import { MdBalcony } from 'react-icons/md'
import dynamic from 'next/dynamic'
const Map = dynamic(() => import('@/components/reservation/map'), {
  ssr: false,
})

interface Props {
  room: any
}

export const Info = ({ room }: Props) => {
  const { language } = useLanguage()

  return (
    <section>
      <div className='flex justify-between'>
        <div className='inline-flex gap-x-2 text-zinc-800'>
          <p>
            {room.guests} {language === 'cz' && 'hosté'}
            {language === 'en' && 'guests'}
            {language === 'ru' && 'гости'}
          </p>
          <p>•</p>
          <p>
            {room.beds} {room.beds === '1' && language === 'cz' && 'postel'}
            {room.beds !== '1' && language === 'cz' && 'postele'}
            {room.beds === '1' && language === 'en' && 'bed'}
            {room.beds !== '1' && language === 'en' && 'beds'}
            {room.beds === '1' && language === 'ru' && 'кровать'}
            {room.beds !== '1' && language === 'ru' && 'кровати'}
          </p>
          <p>•</p>
          <p>
            {room.bathrooms}{' '}
            {room.bathrooms === '1' && language === 'cz' && 'koupelna'}
            {room.bathrooms !== '1' && language === 'cz' && 'koupelny'}
            {room.bathrooms === '1' && language === 'en' && 'bathroom'}
            {room.bathrooms !== '1' && language === 'en' && 'bathrooms'}
            {room.bathrooms === '1' && language === 'ru' && 'ванная комната'}
            {room.bathrooms !== '1' && language === 'ru' && 'ванные комнаты'}
          </p>
        </div>
        <p className='text-zinc-950 text-lg font-semibold'>
          {language === 'cz' && (
            <>
              <span className='text-zinc-800 text-sm'>od </span> $
              {room.priceNoFood !== 'x'
                ? room.priceNoFood
                : room.priceBreakfast}
              <span className='text-zinc-600 text-sm font-light'>
                {' '}
                / noc za {room.guests} osoby
              </span>
            </>
          )}
          {language === 'en' && (
            <>
              <span className='text-zinc-800 text-sm'>starting at </span> $
              {room.priceNoFood !== 'x'
                ? room.priceNoFood
                : room.priceBreakfast}
              <span className='text-zinc-600 text-sm font-light'>
                {' '}
                / night for {room.guests} persons
              </span>
            </>
          )}
          {language === 'ru' && (
            <>
              <span className='text-zinc-800 text-sm'>от</span> $
              {room.priceNoFood !== 'x'
                ? room.priceNoFood
                : room.priceBreakfast}
              <span className='text-zinc-600 text-sm font-light'>
                {' '}
                / ночь для {room.guests} человек
              </span>
            </>
          )}
        </p>
      </div>

      <Separator className='my-6' />

      <h3 className='text-2xl font-medium mb-2'>
        {language === 'cz' && 'Co tohle místo nabízí'}
        {language === 'en' && 'What this place offers'}
        {language === 'ru' && 'Что предлагает это место'}
      </h3>

      <ul className='grid grid-cols-2 gap-y-2'>
        {language === 'cz' && (
          <>
            <li className='flex items-center gap-2'>
              <User size={18} />
              český personál
            </li>
            <li className='flex items-center gap-2'>
              <LandPlot size={18} />
              soukromá pláž (50 metrů)
            </li>
            <li className='flex items-center gap-2'>
              <Trash size={18} />
              úklidové služby
            </li>
            <li className='flex items-center gap-2'>
              <AirVent size={18} />
              klimatizace
            </li>
            <li className='flex items-center gap-2'>
              <Coffee size={18} />
              kávový set
            </li>
            <li className='flex items-center gap-2'>
              <Tv size={18} />
              tv
            </li>
            <li className='flex items-center gap-2'>
              <TbHanger size={18} />
              ramínka
            </li>
            <li className='flex items-center gap-2'>
              <Wifi size={18} />
              wifi{' '}
            </li>
            <li className='flex items-center gap-2'>
              <Wifi size={18} />
              wifi na pláži{' '}
            </li>
            <li className='flex items-center gap-2'>
              <Vault size={18} />
              trezor{' '}
            </li>
            <li className='flex items-center gap-2'>
              <MdBalcony size={18} />
              balkón{' '}
            </li>
            <li className='flex items-center gap-2'>
              <Wind size={18} />
              fén
            </li>
            <li className='flex items-center gap-2'>
              <Rows3 size={18} />
              ručníky
            </li>
          </>
        )}
        {language === 'en' && (
          <>
            <li className='flex items-center gap-2'>
              <LandPlot size={18} />
              private beach (50 meters)
            </li>
            <li className='flex items-center gap-2'>
              <Trash size={18} />
              cleaning service
            </li>
            <li className='flex items-center gap-2'>
              <AirVent size={18} />
              ac
            </li>
            <li className='flex items-center gap-2'>
              <Coffee size={18} />
              coffee set
            </li>
            <li className='flex items-center gap-2'>
              <Tv size={18} />
              tv
            </li>
            <li className='flex items-center gap-2'>
              <TbHanger size={18} />
              hangers
            </li>
            <li className='flex items-center gap-2'>
              <Wifi size={18} />
              wifi
            </li>
            <li className='flex items-center gap-2'>
              <Wifi size={18} />
              beach wifi
            </li>
            <li className='flex items-center gap-2'>
              <Vault size={18} />
              safe
            </li>
            <li className='flex items-center gap-2'>
              <MdBalcony size={18} />
              balcony
            </li>
            <li className='flex items-center gap-2'>
              <Wind size={18} />
              hairdryer
            </li>
            <li className='flex items-center gap-2'>
              <Rows3 size={18} />
              towels
            </li>
          </>
        )}
        {language === 'ru' && (
          <>
            <li className='flex items-center gap-2'>
              <LandPlot size={18} />
              частный пляж (50 метров)
            </li>
            <li className='flex items-center gap-2'>
              <Trash size={18} />
              клининговые услуги
            </li>
            <li className='flex items-center gap-2'>
              <AirVent size={18} />
              кондиционирование воздуха
            </li>
            <li className='flex items-center gap-2'>
              <Coffee size={18} />
              кофейный набор
            </li>
            <li className='flex items-center gap-2'>
              <Tv size={18} />
              ТЕЛЕВИЗОР
            </li>
            <li className='flex items-center gap-2'>
              <TbHanger size={18} />
              hangers
            </li>
            <li className='flex items-center gap-2'>
              <Wifi size={18} />
              wifi
            </li>
            <li className='flex items-center gap-2'>
              <Wifi size={18} />
              пляжный wifi
            </li>
            <li className='flex items-center gap-2'>
              <Vault size={18} />
              хранилище
            </li>
            <li className='flex items-center gap-2'>
              <MdBalcony size={18} />
              балкон
            </li>
            <li className='flex items-center gap-2'>
              <Wind size={18} />
              Фен
            </li>
            <li className='flex items-center gap-2'>
              <Rows3 size={18} />
              полотенца
            </li>
          </>
        )}
      </ul>

      <Separator className='my-6' />

      <div>
        <h3 className='text-2xl font-medium mb-2'>
          {language === 'cz' && 'Důležité informace'}
          {language === 'en' && 'Things to know'}
          {language === 'ru' && 'Что нужно знать'}
        </h3>

        <h4 className='text-lg font-medium'>
          {language === 'cz' && 'Jídla'}
          {language === 'en' && 'Dishes'}
          {language === 'en' && 'Посуда'}
        </h4>
        <ul>
          <li>
            {language === 'cz' && 'Snídaně: 8:00 - 9:00'}
            {language === 'en' && 'Breakfast: 8:00AM - 9:00AM'}
            {language === 'ru' && 'Завтрак: 8:00 - 9:00'}
          </li>
          <li>
            {language === 'cz' && 'Oběd: 12:30 - 13:30'}
            {language === 'en' && 'Lunch: 12:30PM - 1:30PM'}
            {language === 'ru' && 'Обед: 12:30 - 13:30'}
          </li>
          <li>
            {language === 'cz' && 'Večeře: 19:30 - 20:30'}
            {language === 'en' && 'Dinner: 7:30PM - 8:30PM'}
            {language === 'ru' && 'Ужин: 19:30 - 20:30'}
          </li>
        </ul>
      </div>

      <Separator className='my-6' />

      <Map />
    </section>
  )
}
