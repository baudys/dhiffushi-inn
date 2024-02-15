import { AiFillStar } from 'react-icons/ai'
import { Container } from '../container'

interface Props {
  reviews: any[]
}

export const ReviewsGrid = ({ reviews }: Props) => {
  return (
    <Container className='grid lg:grid-cols-2 mt-10 md:mt-20 gap-6 md:gap-4'>
      {reviews.map((review: any) => (
        <div
          key={review.name + review.date}
          className='p-4 border rounded-md bg-zinc-100/90 border-zinc-500/50'
        >
          <div className='flex justify-between'>
            <p className='font-semibold'>{review.name}</p>
            <p className='text-zinc-700'>{review.date}</p>
          </div>
          <div className='flex mb-2'>
            {Array.from({ length: review.rating }, _ => (
              <AiFillStar />
            ))}
          </div>
          <p className='text-lg md:text-xl'>{review.text}</p>
        </div>
      ))}
    </Container>
  )
}
