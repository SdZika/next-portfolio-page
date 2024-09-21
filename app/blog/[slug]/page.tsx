import Link from "next/link";
import { client } from "@/sanity/client";
import { defineQuery } from "next-sanity";
import { notFound } from "next/navigation";
import {PortableText} from '@portabletext/react'

const EVENT_QUERY = defineQuery(`*[_type == "post" && slug.current == $slug][0]{
    
    name,
    publishedAt,
    body
  }`);

  export default async function EventPage({params,}: {params: { slug: string };}) {
    
    
    const blog = await client.fetch(EVENT_QUERY, params);
    console.log(blog)

    if (!blog) {
        notFound();
      }

      const {
        name,
        publishedAt,
        body
        } = blog; 

        

          
    return (
      <main className="max-w-[800px] mx-auto py-12 px-6">
        <div className="mb-4">
          <Link href="/blog" className="text-gray-400 hover:underline">← Back to Blogs</Link>
        </div>
           
          {name ? <h1 className="primary-color text-4xl font-bold mb-4">{name}</h1> : null}
          {publishedAt ? <p className="text-gray-400 mb-2">{publishedAt}</p> : null}
          {body && body.length > 0 && (<PortableText value={body} components={  {block: {
    
    h2: ({children}) => <h2 className="text-2xl text-white">{children}</h2>}}}/>)}
         
   
      </main>
    );
  }