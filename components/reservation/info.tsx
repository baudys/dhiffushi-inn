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
              <span className='text-zinc-800 text-sm'>od </span> {room.priceCz}{' '}
              Kč
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
          {language === 'ru' && (
            <>
              <span className='text-zinc-800 text-sm'>от</span> ${room.priceEn}
              <span className='text-zinc-600 text-sm font-light'>/ ночь</span>
            </>
          )}
        </p>
      </div>

      <Separator className='my-6' />

      <p className='text-zinc-700'>
        {language === 'cz' && room.overviewCz}
        {language === 'en' && room.overviewEn}
        {language === 'ru' && room.overviewRu}
      </p>

      <Separator className='my-6' />

      <h3 className='text-2xl font-medium mb-2'>
        {language === 'cz' && 'Co tohle místo nabízí'}
        {language === 'en' && 'What this place offers'}
        {language === 'ru' && 'Что предлагает это место'}
      </h3>

      <ul className='grid grid-cols-2 gap-y-2'>
        {language === 'cz' &&
          room.includedCz.length > 0 &&
          room.includedCz.map((item: any) => (
            <li key={item} className='flex items-center gap-2'>
              {item === 'výhled na oceán' && <Eye size={18} />}
              {item === 'výhled na ostrov' && <Eye size={18} />}
              {item === 'soukromá pláž (50 metrů)' && <LandPlot size={18} />}
              {item === 'úklidové služby' && <Trash size={18} />}
              {item === 'klimatizace' && <AirVent size={18} />}
              {item === 'kávový set' && <Coffee size={18} />}
              {item === 'tv' && <Tv size={18} />}
              {item === 'ramínka' && <TbHanger size={18} />}
              {item === 'wifi' && <Wifi size={18} />}
              {item === 'wifi na pláži' && <Wifi size={18} />}
              {item === 'trezor' && <Vault size={18} />}
              {item === 'balkón' && <MdBalcony size={18} />}
              {item === 'fén' && <Wind size={18} />}
              {item === 'ručníky' && <Rows3 size={18} />}

              {item}
            </li>
          ))}
        {language === 'en' &&
          room.includedEn.length > 0 &&
          room.includedEn.map((item: any) => (
            <li key={item} className='flex items-center gap-2'>
              {item === 'ocean view' && <Eye size={18} />}
              {item === 'island view' && <Eye size={18} />}
              {item === 'private beach (50 meters)' && <LandPlot size={18} />}
              {item === 'cleaning service' && <Trash size={18} />}
              {item === 'ac' && <AirVent size={18} />}
              {item === 'coffee set' && <Coffee size={18} />}
              {item === 'tv' && <Tv size={18} />}
              {item === 'hangers' && <TbHanger size={18} />}
              {item === 'wifi' && <Wifi size={18} />}
              {item === 'beach wifi' && <Wifi size={18} />}
              {item === 'safe' && <Vault size={18} />}
              {item === 'balcony' && <MdBalcony size={18} />}
              {item === 'hairdryer' && <Wind size={18} />}
              {item === 'towels' && <Rows3 size={18} />}

              {item}
            </li>
          ))}
        {language === 'ru' &&
          room.includedRu.length > 0 &&
          room.includedRu.map((item: any) => (
            <li key={item} className='flex items-center gap-2'>
              {item === 'вид на океан' && <Eye size={18} />}
              {item === 'вид на остров' && <Eye size={18} />}
              {item === 'частный пляж (50 метров)' && <LandPlot size={18} />}
              {item === 'клининговые услуги' && <Trash size={18} />}
              {item === 'кондиционирование воздуха' && <AirVent size={18} />}
              {item === 'кофейный набор' && <Coffee size={18} />}
              {item === 'ТЕЛЕВИЗОР' && <Tv size={18} />}
              {item === 'hangers' && <TbHanger size={18} />}
              {item === 'wifi' && <Wifi size={18} />}
              {item === 'пляжный wifi' && <Wifi size={18} />}
              {item === 'хранилище' && <Vault size={18} />}
              {item === 'балкон' && <MdBalcony size={18} />}
              {item === 'Фен' && <Wind size={18} />}
              {item === 'полотенца' && <Rows3 size={18} />}

              {item}
            </li>
          ))}
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
