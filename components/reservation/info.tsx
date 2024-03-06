import { useLanguage } from '@/store/use-language'
import { Separator } from '../ui/separator'
import { AirVent, Coffee, Eye, Tv, Vault, Wifi } from 'lucide-react'
import { TbHanger } from 'react-icons/tb'
import { MdBalcony } from 'react-icons/md'

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
      </div>

      <Separator className='my-6' />

      <p className='text-zinc-700'>
        {language === 'cz' && room.overviewCz}
        {language === 'en' && room.overviewEn}
      </p>

      <Separator className='my-6' />

      <h3 className='text-2xl font-medium'>
        {language === 'cz' && 'Co tohle místo nabízí'}
        {language === 'en' && 'What this place offers'}
      </h3>

      <ul className='grid grid-cols-2'>
        {language === 'cz' &&
          room.includedCz.length > 0 &&
          room.includedCz.map((item: any) => (
            <li key={item} className='flex items-center gap-1'>
              {item === 'výhled na oceán' && <Eye size={18} />}
              {item === 'klimatizace' && <AirVent size={18} />}
              {item === 'kávový set' && <Coffee size={18} />}
              {item === 'tv' && <Tv size={18} />}
              {item === 'ramínka' && <TbHanger size={18} />}
              {item === 'wifi' && <Wifi size={18} />}
              {item === 'trezor' && <Vault size={18} />}
              {item === 'balkón' && <MdBalcony size={18} />}
              {item}
            </li>
          ))}
        {language === 'en' &&
          room.includedEn.length > 0 &&
          room.includedEn.map((item: any) => (
            <li key={item} className='flex items-center gap-1'>
              {item === 'ocean view' && <Eye size={18} />}
              {item === 'ac' && <AirVent size={18} />}
              {item === 'coffee set' && <Coffee size={18} />}
              {item === 'tv' && <Tv size={18} />}
              {item === 'hangers' && <TbHanger size={18} />}
              {item === 'wifi' && <Wifi size={18} />}
              {item === 'safe' && <Vault size={18} />}
              {item === 'balcony' && <MdBalcony size={18} />}
              {item}
            </li>
          ))}
      </ul>
    </section>
  )
}
