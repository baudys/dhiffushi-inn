'use client'

import { Container } from '@/components/container'
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion'
import { useLanguage } from '@/store/use-language'

export default function Page() {
  const { language } = useLanguage()

  return (
    <main className='py-28'>
      <Container>
        <Accordion type='multiple' className='lg:max-w-[50%] mx-auto'>
          <AccordionItem value='duration'>
            <AccordionTrigger>
              {language === 'cz' && 'Jak dlouho trvá let na Maledivy?'}
              {language === 'en' && ''}
            </AccordionTrigger>
            <AccordionContent>
              {language === 'cz' &&
                'Let na Maledivy trvá asi 13 hodin i s přestupem v Dubai.'}
              {language === 'en' && ''}
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value='test'>
            <AccordionTrigger>
              {language === 'cz' && 'test'}
              {language === 'en' && ''}
            </AccordionTrigger>
            <AccordionContent>
              {language === 'cz' && 'test'}
              {language === 'en' && ''}
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </Container>
    </main>
  )
}
