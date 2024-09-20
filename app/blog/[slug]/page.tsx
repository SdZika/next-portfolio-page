import Link from "next/link";
import { client } from "@/sanity/client";
import { defineQuery } from "next-sanity";
import { notFound } from "next/navigation";

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
      <main className="container mx-auto grid gap-12 p-12">
        <div className="mb-4">
          <Link href="/" className="text-white">← Back to events</Link>
        </div>
           
          {name ? <h1 className="text-white">{name}</h1> : null}
          {publishedAt ? <p className="text-white">{publishedAt}</p> : null}
         
   
      </main>
    );
  }