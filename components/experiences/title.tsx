'use client'

import { useLanguage } from '@/store/use-language'

interface Props {
  labelCz: string
  labelEn: string
  labelRu: string
}

export const Title = ({ labelCz, labelEn, labelRu }: Props) => {
  const { language } = useLanguage()

  return (
    <h2 className='text-center font-light text-2xl sm:text-3xl lg:text-4xl text-zinc-700 mb-2'>
      {language === 'cz' && labelCz}
      {language === 'en' && labelEn}
      {language === 'ru' && labelRu}
    </h2>
  )
}
