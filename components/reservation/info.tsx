import { useLanguage } from '@/store/use-language'
import { Separator } from '../ui/separator'
import { AirVent, Coffee, Eye, LandPlot, Tv, Vault, Wifi } from 'lucide-react'
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
      <div className='inline-flex gap-x-2 text-zinc-800'>
        <p>
          {room.guests} {language === 'cz' && 'hosté'}
          {language === 'en' && 'guests'}
        </p>
        <p>•</p>
        <p>
          {room.beds} {room.beds === '1' && language === 'cz' && 'postel'}
          {room.beds !== '1' && language === 'cz' && 'postele'}
          {room.beds === '1' && language === 'en' && 'bed'}
          {room.beds !== '1' && language === 'en' && 'beds'}
        </p>
        <p>•</p>
        <p>
          {room.bathrooms}{' '}
          {room.bathrooms === '1' && language === 'cz' && 'koupelna'}
          {room.bathrooms !== '1' && language === 'cz' && 'koupelny'}
          {room.bathrooms === '1' && language === 'en' && 'bathroom'}
          {room.bathrooms !== '1' && language === 'en' && 'bathrooms'}
        </p>
      </div>

      <Separator className='my-6' />

      <p className='text-zinc-700'>
        {language === 'cz' && room.overviewCz}
        {language === 'en' && room.overviewEn}
      </p>

      <Separator className='my-6' />

      <h3 className='text-2xl font-medium mb-2'>
        {language === 'cz' && 'Co tohle místo nabízí'}
        {language === 'en' && 'What this place offers'}
      </h3>

      <ul className='grid grid-cols-2 gap-y-2'>
        {language === 'cz' &&
          room.includedCz.length > 0 &&
          room.includedCz.map((item: any) => (
            <li key={item} className='flex items-center gap-2'>
              {item === 'výhled na oceán' && <Eye size={18} />}
              {item === 'klimatizace' && <AirVent size={18} />}
              {item === 'kávový set' && <Coffee size={18} />}
              {item === 'tv' && <Tv size={18} />}
              {item === 'ramínka' && <TbHanger size={18} />}
              {item === 'wifi' && <Wifi size={18} />}
              {item === 'trezor' && <Vault size={18} />}
              {item === 'balkón' && <MdBalcony size={18} />}
              {item === 'soukromá pláž' && <LandPlot size={18} />}
              {item}
            </li>
          ))}
        {language === 'en' &&
          room.includedEn.length > 0 &&
          room.includedEn.map((item: any) => (
            <li key={item} className='flex items-center gap-2'>
              {item === 'ocean view' && <Eye size={18} />}
              {item === 'ac' && <AirVent size={18} />}
              {item === 'coffee set' && <Coffee size={18} />}
              {item === 'tv' && <Tv size={18} />}
              {item === 'hangers' && <TbHanger size={18} />}
              {item === 'wifi' && <Wifi size={18} />}
              {item === 'safe' && <Vault size={18} />}
              {item === 'balcony' && <MdBalcony size={18} />}
              {item === 'private beach' && <LandPlot size={18} />}
              {item}
            </li>
          ))}
      </ul>

      <Separator className='my-6' />

      <div>
        <h3 className='text-2xl font-medium mb-2'>
          {language === 'cz' && 'Důležité informace'}
          {language === 'en' && 'Things to know'}
        </h3>

        <h4 className='text-lg font-medium'>
          {language === 'cz' && 'Jídla'}
          {language === 'en' && 'Dishes'}
        </h4>
        <ul>
          <li>Snídaně: 8:00 - 9:00</li>
          <li>Oběd: 12:30 - 13:30</li>
          <li>Večeře: 19:30 - 20:30</li>
        </ul>
      </div>

      <Separator className='my-6' />

      <Map />
    </section>
  )
}
