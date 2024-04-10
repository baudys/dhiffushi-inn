import { urlForImage } from '@/sanity/lib/image'
import { useLanguage } from '@/store/use-language'
import { ImageIcon, XCircle } from 'lucide-react'
import { useState } from 'react'
import { Container } from '../container'

interface Props {
  room: any
}

export const Head = ({ room }: Props) => {
  const { language } = useLanguage()

  const [showAllImages, setShowAllImages] = useState(false)

  return (
    <div>
      <h2 className='font-semibold text-2xl mb-4'>
        {language === 'cz' && room.titleCz}
        {language === 'en' && room.titleEn}
        {language === 'ru' && room.titleRu}{' '}
        <span className='font-normal'>({room.m2}m2)</span>
      </h2>
      <div className='w-full relative overflow-hidden rounded-3xl h-[60vh] grid-cols-2 grid-rows-2'>
        <img
          src={urlForImage(room.images[0])}
          className='absolute inset-0 w-full h-full object-cover row-span-2'
        />
        <button
          className='absolute bottom-5 right-5 bg-zinc-200/70 hover:bg-zinc-200/60 transition p-2 rounded-md font-bold flex gap-2 items-center'
          onClick={() => setShowAllImages(true)}
        >
          <ImageIcon />
          {language === 'cz' && 'zobrazit všechny obrázky'}
          {language === 'en' && 'show all images'}
          {language === 'ru' && 'показать все изображения'}
        </button>
      </div>

      {showAllImages && (
        <div className='absolute w-full h-full inset-0 z-[1001] pt-32'>
          <Container className='flex flex-col gap-2 relative bg-white'>
            {room.images.map((image: any) => (
              <img src={urlForImage(image)} />
            ))}
            <button
              onClick={() => setShowAllImages(false)}
              className='fixed right-6 top-32 lg:right-24 bg-zinc-200/70 hover:bg-zinc-200/60 flex items-center gap-2 font-bold transition p-2 rounded-md'
            >
              <XCircle size={20} />
              {language === 'cz' && 'zavřít'}
              {language === 'en' && 'close'}
              {language === 'ru' && 'закрыть'}
            </button>
          </Container>
        </div>
      )}
    </div>
  )
}
