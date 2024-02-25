'use client'

import ClassNames from 'embla-carousel-class-names'
import useEmblaCarousel from 'embla-carousel-react'
import React, { ReactNode, useCallback, useEffect, useState } from 'react'
import { PrevButton, NextButton, usePrevNextButtons } from './arrows'

interface ContextValue {
  embla: any | undefined
  selectedIndex: number
}

interface CarouselProps {
  className?: string
  children: ReactNode
  numOfSlides?: number
  loop?: boolean
  arrows?: boolean
}

export const CarouselContext = React.createContext<ContextValue>({
  embla: undefined,
  selectedIndex: -1,
})

const Carousel: React.FC<CarouselProps> = ({
  children,
  className,
  numOfSlides,
  loop = true,
  arrows = false,
}) => {
  const [selectedIndex, setSelectedIndex] = useState(0)

  const [viewportRef, emblaApi] = useEmblaCarousel(
    {
      loop,
      align: 'center',
      skipSnaps: false,
      slidesToScroll: numOfSlides,
    },
    [ClassNames()]
  )

  const {
    prevBtnDisabled,
    nextBtnDisabled,
    onPrevButtonClick,
    onNextButtonClick,
  } = usePrevNextButtons(emblaApi)

  const onSelect = useCallback(() => {
    if (!emblaApi) return
    setSelectedIndex(emblaApi.selectedScrollSnap())
  }, [emblaApi, setSelectedIndex])

  useEffect(() => {
    if (!emblaApi) return
    onSelect()
    emblaApi.on('select', onSelect)
  }, [emblaApi, onSelect])

  return (
    <section className='relative'>
      <CarouselContext.Provider value={{ embla: emblaApi, selectedIndex }}>
        <div
          ref={viewportRef}
          className={`cursor-grab w-full overflow-hidden ${className}`}
        >
          <div className='select-none flex justify-start items-start'>
            {children}
          </div>
        </div>

        {arrows && (
          <>
            <PrevButton
              onClick={onPrevButtonClick}
              disabled={prevBtnDisabled}
              className='absolute -left-10 top-1/2 -translate-y-20'
            />
            <NextButton
              onClick={onNextButtonClick}
              disabled={nextBtnDisabled}
              className='absolute -right-10 top-1/2 -translate-y-20'
            />
          </>
        )}
      </CarouselContext.Provider>
    </section>
  )
}

export default Carousel
