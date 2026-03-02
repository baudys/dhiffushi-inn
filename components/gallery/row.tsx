'use client'

import { cn } from '@/lib/utils'
import { SyntheticEvent, useState } from 'react'
import Carousel from '../carousel/carousel'
import CarouselItem from '../carousel/carousel-item'

interface Props {
  images: string[]
}

export const Row = ({ images }: Props) => {
  const [portraitByIndex, setPortraitByIndex] = useState<Record<number, boolean>>({})

  const onImageLoad = (index: number) => (event: SyntheticEvent<HTMLImageElement>) => {
    const { naturalHeight, naturalWidth } = event.currentTarget
    const isPortrait = naturalHeight > naturalWidth

    setPortraitByIndex(previous => {
      if (previous[index] === isPortrait) return previous

      return { ...previous, [index]: isPortrait }
    })
  }

  return (
    <Carousel>
      {images.map((image, i) => (
        <CarouselItem index={i} key={i} className='px-2'>
          <div
            className={cn(
              'relative aspect-video w-[78vw] overflow-hidden rounded-2xl bg-black/5 lg:w-[50vw]'
            )}
          >
            <img
              src={image}
              alt={`Gallery image ${i + 1}`}
              className={cn(
                'absolute inset-0 w-full h-full',
                portraitByIndex[i] ? 'object-contain' : 'object-cover'
              )}
              onLoad={onImageLoad(i)}
            />
          </div>
        </CarouselItem>
      ))}
    </Carousel>
  )
}
