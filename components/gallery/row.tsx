'use client'

import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'

interface Props {
  images: string[]
}

export const Row = ({ images }: Props) => {
  return (
    <Swiper
      spaceBetween={10}
      loop={true}
      slidesPerView={1.2}
      centeredSlides={true}
      breakpoints={{
        768: {
          slidesPerView: 1.5,
        },
      }}
      className='!select-none'
    >
      {images.map(image => (
        <SwiperSlide
          key={image}
          className='relative aspect-video rounded overflow-hidden'
        >
          <img
            src={image}
            alt='photo'
            className='absolute inset-0 rounded object-cover h-full w-full'
          />
        </SwiperSlide>
      ))}
    </Swiper>
  )
}
