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

  return (
    <main className='py-28'>
      <Container className='grid lg:grid-cols-2 gap-4 lg:gap-32'>
        <Title
          labelCz='Nejčastěji kladené otázky'
          labelEn='Frequently asked questions'
        />

        <Accordion type='multiple' className='space-y-4'>
          {faq.slice(0, 5).map(item => (
            <AccordionItem key={item.value} value={item.value}>
              <AccordionTrigger className='text-lg'>
                {language === 'cz' && item.qCz}
                {language === 'en' && item.qEn}
              </AccordionTrigger>
              <AccordionContent className='text-base'>
                {language === 'cz' && item.aCz}
                {language === 'en' && item.aEn}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
        <Accordion type='multiple' className='space-y-4'>
          {faq.slice(5, 10).map(item => (
            <AccordionItem key={item.value} value={item.value}>
              <AccordionTrigger className='text-lg'>
                {language === 'cz' && item.qCz}
                {language === 'en' && item.qEn}
              </AccordionTrigger>
              <AccordionContent className='text-base'>
                {language === 'cz' && item.aCz}
                {language === 'en' && item.aEn}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </Container>
    </main>
  )
}
