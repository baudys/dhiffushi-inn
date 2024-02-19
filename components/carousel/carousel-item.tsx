'use client'

import React, { useCallback, useContext } from 'react'
import { CarouselContext } from './carousel'

interface Props {
  index: number
  children: JSX.Element
  className?: string
}

const CarouselItem: React.FC<Props> = ({ children, index, className }) => {
  const { embla: emblaApi, selectedIndex } = useContext(CarouselContext)
  const isActive = selectedIndex === index

  console.log(selectedIndex)

  const handleClick = useCallback(() => {
    if (emblaApi === undefined) return
    emblaApi.scrollTo(index)
  }, [emblaApi, index])

  return (
    <div
      className={`relative px-2 transition-opacity duration-300 ${
        isActive ? '!opacity-100' : 'opacity-40'
      } ${className}`}
      onClick={handleClick}
    >
      {children}
    </div>
  )
}

export default CarouselItem
