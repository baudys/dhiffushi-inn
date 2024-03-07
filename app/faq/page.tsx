'use client'

import { Container } from '@/components/container'
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
      <Container>
        <Accordion type='multiple' className='lg:max-w-[50%] mx-auto'>
          {faq.map(item => (
            <AccordionItem value={item.value}>
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
    </main>
  )
}
