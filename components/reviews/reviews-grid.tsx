import { AiFillStar } from 'react-icons/ai'
import { Container } from '../container'

interface Props {
  reviews: any[]
}

export const ReviewsGrid = ({ reviews }: Props) => {
  return (
    <Container className='grid md:grid-cols-2 gap-6 w-full'>
      {reviews.map((review: any) => (
        <div
          key={review.name + review.date}
          className='p-4 rounded-md border border-zinc-200 bg-zinc-50'
        >
          <div className='flex mb-2'>
            {Array.from({ length: review.rating }, (_, index) => (
              <AiFillStar key={index} className='fill-cyan-500 w-6 h-6' />
            ))}
          </div>
          <p className='font-semibold mb-6 text-justify'>{review.text}</p>
          <p className='text-zinc-700 text-sm'>
            {review.name}
            <span className='text-zinc-500 text-xs'> / {review.date}</span>
          </p>
        </div>
      ))}
    </Container>
  )
}
