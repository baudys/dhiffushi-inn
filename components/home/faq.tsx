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
          <AccordionItem value='test2' className='md:hidden xl:block'>
            <AccordionTrigger>
              {language === 'cz' && 'test2'}
              {language === 'en' && 'test2'}
            </AccordionTrigger>
            <AccordionContent>
              {language === 'cz' && 'test2'}
              {language === 'en' && 'test2'}
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </Container>
    </section>
  )
}
