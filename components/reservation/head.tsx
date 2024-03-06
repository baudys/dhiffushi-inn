import { urlForImage } from '@/sanity/lib/image'
import { useLanguage } from '@/store/use-language'

interface Props {
  room: any
}

export const Head = ({ room }: Props) => {
  const { language } = useLanguage()

  return (
    <div>
      <h2 className='font-semibold text-2xl mb-4'>
        {language === 'cz' && room.titleCz}
        {language === 'en' && room.titleEn}
      </h2>
      <div className='w-full relative overflow-hidden rounded-3xl h-[60vh]'>
        <img
          src={urlForImage(room.images[0])}
          className='absolute inset-0 w-full h-full object-cover'
        />
      </div>
    </div>
  )
}
