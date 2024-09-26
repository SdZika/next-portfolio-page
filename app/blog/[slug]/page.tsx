import Link from "next/link";
import { client } from "@/sanity/client";
import { defineQuery } from "next-sanity";
import { notFound } from "next/navigation";
import {PortableText, PortableTextComponents} from '@portabletext/react'

//import { urlFor } from "@/sanity/client";



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

        const components: PortableTextComponents = {
          types: {
            // image: ({ value }) => (
            //   <img src={urlFor(value).url()} alt={value.alt || 'Image'} />
            // ),
            // callToAction: ({ value, isInline }) =>
            //   isInline ? (
            //     <a href={value.url}>{value.text}</a>
            //   ) : (
            //     <div className="callToAction">{value.text}</div>
            //   ),
          },
          marks: {
            link: ({ children, value }) => {
              const rel = !value.href.startsWith('/') ? 'noreferrer noopener' : undefined;
              return (
                <a href={value.href} rel={rel}>
                  {children}
                </a>
              );
            },
          },
          block: {
            normal: ({ children }) => <p className="my-4 text-white">{children}</p>,
            h1: ({ children }) => <h1 className="text-3xl font-bold my-4 text-white">{children}</h1>,
            h2: ({ children }) => <h2 className="text-2xl font-semibold my-3 text-white">{children}</h2>,
            h3: ({ children }) => <h3 className="text-xl font-medium my-2">{children}</h3>,
            blockquote: ({ children }) => (
            <blockquote className="pl-4 border-l-4 border-gray-300 italic text-white">{children}</blockquote>
            ),
            
          },
          list: {
            // Ex. 1: customizing common list types
            bullet: ({children}) => <ul className="mt-xl text-white">{children}</ul>,
            number: ({children}) => <ol className="mt-lg text-white">{children}</ol>,
        
            // Ex. 2: rendering custom lists
            checkmarks: ({children}) => <ol className="m-auto text-lg text-white">{children}</ol>,
          },

        };

          
    return (
      <main className="max-w-[800px] mx-auto py-12 px-6">
        <div className="mb-4">
          <Link href="/blog" className="text-gray-400">← Back to Blogs</Link>
        </div>
           
          {name ? <h1 className="primary-color text-4xl font-bold mb-4">{name}</h1> : null}
          {publishedAt ? <p className="text-gray-400 mb-2">{publishedAt}</p> : null}
          {body && body.length > 0 && (<PortableText value={body} components={components }/>)}
         
   
      </main>
    );
  }