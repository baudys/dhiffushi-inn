import { useLanguage } from '@/store/use-language'

interface Props {
  room: any
}

export const Card = ({ room }: Props) => {
  const { language } = useLanguage()

  return (
    <div className='sticky top-28 left-0 self-start shadow-lg bg-zinc-100 border border-zinc-500/60 p-4 rounded-xl'>
      <p className='text-zinc-600'>
        <span className='text-zinc-950 text-lg font-semibold'>
          {language === 'cz' && <>{room.priceCz} Kč</>}
          {language === 'en' && <>${room.priceEn}</>}
        </span>{' '}
        / night
      </p>
    </div>
  )
}
