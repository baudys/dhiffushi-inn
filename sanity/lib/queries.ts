import { groq } from 'next-sanity'

export const ReviewsQuery = groq`
    *[_type=='review'] {
        ...,
    } | order(date desc)
`
export const DivingQuery = groq`
    *[_type=='diving'] {
        ...,
    }
`
