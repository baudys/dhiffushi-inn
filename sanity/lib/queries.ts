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

export const OldQuery = groq`
    *[_type=='old'] {
        ...,
    }
`

export const OldPathsQuery = groq`*[_type == "old" && defined(slug.current)][]{
    "params": { "slug": slug.current }
  }
`

export const OldItemQuery = groq`*[_type == "old" && slug.current == $slug][0]{
    ...
  }
`
