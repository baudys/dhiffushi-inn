import { useLanguage } from '@/store/use-language'

interface Props {
  room: any
}

export const Info = ({ room }: Props) => {
  const { language } = useLanguage()

  return (
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
  )
}
