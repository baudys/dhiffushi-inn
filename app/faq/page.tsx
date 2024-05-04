'use client'

import { Container } from '@/components/container'
import { Title } from '@/components/home/title'
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion'
import { faq } from '@/database/faq'
import { useLanguage } from '@/store/use-language'

export default function Page() {
  const { language } = useLanguage()

  const totalItems = faq.length
  const itemsPerColumn = Math.ceil(totalItems / 2)

  return (
    <main className='py-28'>
      <Container>
        <Title
          labelCz='Nejčastěji kladené otázky'
          labelEn='Frequently asked questions'
          labelRu='Часто задаваемые вопросы'
        />

        <div className='grid lg:grid-cols-2 gap-4 lg:gap-20'>
          <Accordion type='multiple' className='space-y-4'>
            {faq.slice(0, itemsPerColumn).map(item => (
              <AccordionItem key={item.value} value={item.value}>
                <AccordionTrigger className='text-lg'>
                  {language === 'cz' && item.qCz}
                  {language === 'en' && item.qEn}
                  {language === 'ru' && item.qRu}
                </AccordionTrigger>
                <AccordionContent className='text-base'>
                  {language === 'cz' && item.aCz}
                  {language === 'en' && item.aEn}
                  {language === 'ru' && item.aRu}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
          <Accordion type='multiple' className='space-y-4'>
            {faq.slice(itemsPerColumn).map(item => (
              <AccordionItem key={item.value} value={item.value}>
                <AccordionTrigger className='text-lg'>
                  {language === 'cz' && item.qCz}
                  {language === 'en' && item.qEn}
                  {language === 'ru' && item.qRu}
                </AccordionTrigger>
                <AccordionContent className='text-base'>
                  {language === 'cz' && item.aCz}
                  {language === 'en' && item.aEn}
                  {language === 'ru' && item.aRu}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </Container>
    </main>
  )
}
