import { groq } from 'next-sanity'

export const ReviewsQuery = groq`
    *[_type=='review'] {
        ...,
    } | order(date desc)
`

export const ExperiencesQuery = groq`
    *[_type=='experience'] {
        ...,
    }
`

export const ExperiencesPathsQuery = groq`*[_type == "experience" && defined(slug.current)][]{
    "params": { "slug": slug.current }
  }
`

export const ExperienceQuery = groq`*[_type == "experience" && slug.current == $slug][0]{
    ...
  }
`

export const ClassicQuery = groq`
    *[_type=='classic'] {
        ...,
    }
`

export const ClassicPathsQuery = groq`*[_type == "classic" && defined(slug.current)][]{
    "params": { "slug": slug.current }
  }
`

export const ClassicItemQuery = groq`*[_type == "classic" && slug.current == $slug][0]{
    ...
  }
`
