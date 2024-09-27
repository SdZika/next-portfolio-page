import {defineQuery} from 'next-sanity'

export const Query = (category: string) => {
  return defineQuery(`*[_type == 'post' && defined(slug.current) && postType == ${category}]{
    _id,
   title,
   publishedAt,
   slug,
   postType
  } | order(publishedAt desc)`)
} //why it doesnt work


export const POST_QUERY = defineQuery(`*[_type == "post" && defined(slug.current)][0...12] | order(publishedAt desc) {
    _id,
    title,
    publishedAt,
    slug,
    postType
  }`);


export const POST_QUERY_JAVASCRIPT = defineQuery(`*[_type == 'post' && defined(slug.current) && postType == 'javascript']{
  _id,
 title,
 publishedAt,
 slug,
 postType
} | order(publishedAt desc)`)

export const POST_QUERY_REACT = defineQuery(`*[_type == 'post' && defined(slug.current) && postType == 'react']{
    _id,
   title,
   publishedAt,
   slug,
   postType
  } | order(publishedAt desc)`)