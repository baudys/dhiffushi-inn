import { useLanguage } from '@/store/use-language'

interface Props {
  room: any
  //   dateRange: Range
  //   disabledDates: Date[]
  //   onChangeDate: (value: Range) => void
}

export const Card = ({ room }: Props) => {
  const { language } = useLanguage()

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
      {/* <Calendar
        value={dateRange}
        disabledDates={disabledDates}
        onChange={value => onChangeDate(value.selection)}
      /> */}
    </div>
  )
}
