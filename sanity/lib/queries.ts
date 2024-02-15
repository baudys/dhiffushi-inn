import { groq } from 'next-sanity'

export const ReviewsQuery = groq`
    *[_type=='review'] {
        ...,
    } | order(date asc)
`
