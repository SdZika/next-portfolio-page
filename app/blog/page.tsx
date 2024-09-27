
//import { defineQuery } from "next-sanity";
import {Query} from "../../sanity/lib/queries"

import { client } from "@/sanity/client";
import {BlogFilter} from "../components/BlogFilter"


const options = { next: { revalidate: 60 } };



export default async function IndexPage() {

  const blogsAll = await client.fetch(Query("all"), options);
  const blogsJavascript = await client.fetch(Query("javascript"), options);
  const blogsReact = await client.fetch(Query("react"), options);

  console.log(Query("javascript"))

  return (
    <main className="max-w-[1200px] mx-auto py-12">

       <div className="pb-8 mx-6">
        <p className="text-4xl mb-3 pb-1 font-bold primary-color">Blog</p>
        <p className="text-gray-400">Check out some of my recent blog</p>
      </div>
      {/* <h2 className="pb-8 mx-6 text-gray-400">Javascript</h2>
      <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mx-6">
        
        {blogsJavascript.map((blog) => (
  
          <Post  key={blog._id} blog={blog} />
        ))}
      </ul>
      <h2 className="py-8 mx-6 text-gray-400">React</h2>
      <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mx-6">
      
        {blogsReact.map((blog) => (
         
          <Post  key={blog._id} blog={blog} />
        ))}
      </ul> */}

      <BlogFilter
        blogsAll={blogsAll}
        blogsJavascript={blogsJavascript}
        blogsReact={blogsReact}
      />
        

    </main>
  );
}