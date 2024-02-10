'use client'

import { Container } from '../container'
import { useLanguage } from '@/store/use-language'

const Hero = () => {
  const { language } = useLanguage()

  return (
    <section>
      <div className='sticky top-0 flex h-[90vh] lg:min-h-screen'>
        <video
          autoPlay
          loop
          muted
          playsInline
          className='absolute object-cover w-full h-full'
        >
          <source src='https://cdn.coverr.co/videos/coverr-friends-having-fun-at-the-beach-3211/1080p.mp4' />
        </video>

        <div className='absolute top-0 left-0 flex w-full h-full pt-32 bg-black/60 lg:pt-0 lg:items-center lg:justify-center'>
          <Container>
            <div className='flex flex-col items-center justify-center p-1'>
              <h1
                className={`text-white text-4xl lg:text-5xl xl:text-6xl 2xl:text-7xl mb-3 font-black uppercase text-center pt-1`}
              >
                DHIFFUSHI INN
              </h1>
            </div>
          </Container>
        </div>
      </div>
    </section>
  )
}

export default Hero
