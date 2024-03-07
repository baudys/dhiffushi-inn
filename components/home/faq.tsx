'use client'

import { Container } from '@/components/container'
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion'
import { useLanguage } from '@/store/use-language'
import { Title } from './title'
import { faq } from '@/database/faq'

export const Faq = () => {
  const { language } = useLanguage()

  return (
    <section>
      <Container>
        <Title
          labelCz='Nejčastěji kladené otázky'
          labelEn='Frequently asked questions'
        />
        <Accordion
          type='multiple'
          className='grid md:grid-cols-2 xl:grid-cols-3 gap-2 md:gap-10 xl:gap-20'
        >
          {faq.slice(0, 3).map(item => (
            <AccordionItem key={item.value} value={item.value}>
              <AccordionTrigger>
                {language === 'cz' && item.qCz}
                {language === 'en' && item.qEn}
              </AccordionTrigger>
              <AccordionContent>
                {language === 'cz' && item.aCz}
                {language === 'en' && item.aEn}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </Container>
    </section>
  )
}
