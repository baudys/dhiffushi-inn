'use client'

import ClassNames from 'embla-carousel-class-names'
import useEmblaCarousel from 'embla-carousel-react'
import React, { ReactNode, useCallback, useEffect, useState } from 'react'

interface ContextValue {
  embla: any | undefined
  selectedIndex: number
}

interface CarouselProps {
  className?: string
  children: ReactNode
  autoplay?: boolean
}

export const CarouselContext = React.createContext<ContextValue>({
  embla: undefined,
  selectedIndex: -1,
})

const Carousel: React.FC<CarouselProps> = ({ children, className }) => {
  const [selectedIndex, setSelectedIndex] = useState(0)

  const [viewportRef, emblaApi] = useEmblaCarousel(
    {
      loop: true,
      align: 'center',
      skipSnaps: false,
    },
    [ClassNames()]
  )

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
    <CarouselContext.Provider value={{ embla: emblaApi, selectedIndex }}>
      <div
        ref={viewportRef}
        className={`cursor-grab w-full overflow-hidden ${className}`}
      >
        <div className='select-none flex justify-start items-start'>
          {children}
        </div>
      </div>
    </CarouselContext.Provider>
  )
}

export default Carousel
