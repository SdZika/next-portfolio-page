
//import { defineQuery } from "next-sanity";
import {POST_QUERY_JAVASCRIPT, POST_QUERY_REACT} from "../../sanity/lib/queries"

import { client } from "@/sanity/client";
import { Post } from "../components/Post";


const options = { next: { revalidate: 60 } };

// const EVENTS_QUERY = defineQuery(`*[_type == "post" && defined(slug.current)][0...12] | order(publishedAt desc) {
//     _id,
//     name,
//     publishedAt,
//     slug,
//     postType
//   }`);

export default async function IndexPage() {
  const blogsJavascript = await client.fetch(POST_QUERY_JAVASCRIPT, options);
  const blogsReact = await client.fetch(POST_QUERY_REACT, options);

  return (
    <main className="max-w-[1200px] mx-auto py-12">

       <div className="pb-8 mx-6">
        <p className="text-4xl mb-3 pb-1 font-bold primary-color">Blog</p>
        <p className="text-gray-400">Check out some of my recent blog</p>
      </div>
      <h2 className="pb-8 mx-6 text-gray-400">Javascript</h2>
      <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mx-6">
        
        {blogsJavascript.map((blog: {name: string, slug: {current: string}, publishedAt: string, postType: string, _id: string}) => (
  
          <Post  key={blog._id} blog={blog} />
        ))}
      </ul>
      <h2 className="py-8 mx-6 text-gray-400">React</h2>
      <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mx-6">
      
        {blogsReact.map((blog: {name: string, slug: {current: string}, publishedAt: string, postType: string, _id: string}) => (
         
          <Post  key={blog._id} blog={blog} />
        ))}
      </ul>
    </main>
  );
}