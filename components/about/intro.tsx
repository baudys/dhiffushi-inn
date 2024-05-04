'use client'

import { useLanguage } from '@/store/use-language'
import { Container } from '../container'

export const Intro = () => {
  const { language } = useLanguage()

  return (
    <Container>
      <img src='/team.webp' alt='team' />
      <p className='text-justify mt-6'>
        {language === 'cz' && (
          <>
            Jsme česko-maledivská rodina provozující guesthouse na ostrově
            Dhiffushi, na ostrov jsme se poprvé podívali v roce 2014 a ihned
            jsme se zde zamilovali do místní atmosféry, obyvatel a samozřejmě do
            neskutečně modré, průzračné vody. Hned první návštěva nás
            přesvědčila o tom, že bychom na tomto krásném místě chtěli trávit
            více času a tím vznikl nápad spojit se s místní rodinou a společně
            si splnit sen <br />
            Dovolenou se vždy snažíme připravit každému individuálně, dle
            představ. <br />
            Vše vyřídíme v češtině, pomůžeme při koupi letenek, zařídíme
            transfer z letiště, výlety a vše potřebné pro vaši vysněnou
            dovolenou tak abyste na ni celý život s úsměvem vzpomínali. <br />{' '}
            <br />
            Ostrov Dhiffushi je součástí atolu Kaafu, nachází se cca 32 km
            severně od hlavního města Male. <br />
            Ostrov je malý o rozměru 950x200m a žije zde okolo 1200 obyvatel.{' '}
            <br />I když je ostrov malý, má slušnou občanskou vybavenost -
            školu, doktora, obchody s potravinami a dogerií, suvenýry, bistra,
            restaurace, fotbalové a dětské hřiště, mešitu.
          </>
        )}
        {language === 'en' && (
          <>
            We are a Czech-Maldivian family running a guesthouse on the island
            of Dhiffushi. We first visited the island in 2014 and immediately
            fell in love with the local atmosphere, people, and of course, the
            incredibly blue, crystal-clear water. From the first visit, we were
            convinced that we wanted to spend more time in this beautiful place,
            which led to the idea of joining forces with a local family to
            fulfill a dream. <br />
            We always strive to prepare each vacation individually, according to
            preferences. <br />
            We handle everything in Czech, help with buying tickets, arrange
            airport transfers, excursions, and everything you need for your
            dream vacation so that you remember it with a smile for the rest of
            your life. <br /> <br />
            Dhiffushi Island is part of the Kaafu Atoll and is located about 32
            km north of the capital, Male. <br />
            The island is small, measuring 950x200 meters, and is home to around
            1200 people. <br />
            Despite its small size, the island has decent amenities - a school,
            doctor, grocery and sundry stores, souvenir shops, cafés,
            restaurants, football and children&apos;s playgrounds, and a mosque.
          </>
        )}
        {language === 'ru' && (
          <>
            Мы - чешско-мальдивская семья, ведущая гостевой дом на острове
            Диффуши. Первый раз мы посетили остров в 2014 году и сразу полюбили
            местную атмосферу, людей и, конечно же, невероятно голубую,
            прозрачную воду. С первого визита мы были убеждены, что хотим
            провести больше времени в этом красивом месте, что привело к идее
            объединиться с местной семьей, чтобы осуществить мечту. <br />
            Мы всегда стремимся подготовить каждый отпуск индивидуально, с
            учетом предпочтений. <br />
            Мы занимаемся всем на чешском языке, помогаем с покупкой билетов,
            организуем трансфер из аэропорта, экскурсии и все необходимое для
            вашего мечтательного отпуска, чтобы вы помнили его с улыбкой на все
            оставшееся время жизни. <br /> <br />
            Остров Диффуши является частью атолла Каафу и находится примерно в
            32 км к северу от столицы Мале. <br />
            Остров небольшой, размером 950x200 метров, и на нем проживает около
            1200 человек. <br />
            Несмотря на небольшие размеры, на острове есть достойные удобства -
            школа, врач, продовольственные и товарные магазины, магазины
            сувениров, кафе, рестораны, футбольные и детские площадки и мечеть.
          </>
        )}
      </p>
    </Container>
  )
}
