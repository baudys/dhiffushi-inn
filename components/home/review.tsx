import { AiFillStar } from 'react-icons/ai'
import { Container } from '../container'
import { Title } from './title'

interface Props {
  review: any
}

export const Review = ({ review }: Props) => {
  return (
    <Container>
      <Title labelCz='Poslední recenze' labelEn='Latest review' />
      <div className='p-4 rounded-md border border-zinc-200 bg-zinc-50 flex flex-col gap-8 w-full sm:w-[70%] md:w-[60%] lg:w-[50%] xl:w-[40%]'>
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
    </Container>
  )
}
