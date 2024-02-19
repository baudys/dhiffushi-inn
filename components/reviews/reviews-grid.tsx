import { AiFillStar } from 'react-icons/ai'
import { Container } from '../container'

interface Props {
  reviews: any[]
}

export const ReviewsGrid = ({ reviews }: Props) => {
  return (
    <Container className='grid sm:grid-cols-2 lg:grid-cols-3 gap-3'>
      {reviews.map((review: any) => (
        <div
          key={review.name + review.date}
          className='p-4 border rounded-md bg-zinc-100/90 border-zinc-500/50'
        >
          <div className='flex justify-between'>
            <p className='font-semibold'>{review.name}</p>
            <p className='text-zinc-500 text-xs'>{review.date}</p>
          </div>
          <div className='flex mb-2'>
            {Array.from({ length: review.rating }, (_, index) => (
              <AiFillStar key={index} className='fill-cyan-500' />
            ))}
          </div>
          <p className='text-zinc-700 text-sm'>{review.text}</p>
        </div>
      ))}
    </Container>
  )
}
