import {defineQuery} from 'next-sanity'

export const POST_QUERY_JAVASCRIPT = defineQuery(`*[_type == 'post' && defined(slug.current) && postType == 'javascript']{
  _id,
 name,
 publishedAt,
 slug,
 postType
} | order(publishedAt desc)`)

export const POST_QUERY_REACT = defineQuery(`*[_type == 'post' && defined(slug.current) && postType == 'react']{
    _id,
   name,
   publishedAt,
   slug,
   postType
  } | order(publishedAt desc)`)