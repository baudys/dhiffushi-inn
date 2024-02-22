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
          <CarouselItem index={i} key={i}>
            <>
              <div className='relative aspect-video w-[78vw] lg:w-[50vw] rounded mx-2'>
                <img
                  src={image}
                  className='absolute inset-0 w-full h-full object-cover'
                />
              </div>
              <h2 className='font-medium'>title</h2>
              <p className='text-sm text-zinc-600'>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Officiis, perspiciatis?
              </p>
            </>
          </CarouselItem>
        )
      })}
    </Carousel>
  )
}
