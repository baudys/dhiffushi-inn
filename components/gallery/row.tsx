'use client'

import Carousel from '../carousel/carousel'
import CarouselItem from '../carousel/carousel-item'

interface Props {
  images: string[]
}

export const Row = ({ images }: Props) => {
  return (
    <Carousel>
      {images.map((image, i) => {
        return (
          <CarouselItem index={i} key={i} className='px-2'>
            <div className='relative aspect-video w-[78vw] lg:w-[50vw]'>
              <img
                src={image}
                className='absolute inset-0 w-full h-full object-cover'
              />
            </div>
          </CarouselItem>
        )
      })}
    </Carousel>
  )
}
