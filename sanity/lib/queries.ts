import {defineQuery} from 'next-sanity'

export const Query = (category: string) => {
  return defineQuery(`*[_type == 'post' && defined(slug.current) && postType == "${category}"]{
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
