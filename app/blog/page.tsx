import Link from "next/link";
import { defineQuery } from "next-sanity";


import { client } from "@/sanity/client";


const options = { next: { revalidate: 60 } };

const EVENTS_QUERY = defineQuery(`*[_type == "post" && defined(slug.current)][0...12] | order(publishedAt desc) {
    _id,
    name,
    publishedAt,
    slug,
    postType
  }`);

export default async function IndexPage() {
  const blogs = await client.fetch(EVENTS_QUERY, options);
  console.log(blogs)

  return (
    <main className="max-w-[1200px] mx-auto py-12">

       <div className="pb-8 mx-6">
        <p className="text-4xl mb-3 pb-1 font-bold primary-color">Blog</p>
        <p className="text-gray-400">Check out some of my recent blog</p>
      </div>

      <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mx-6">
        {blogs.map((blog: {name: string, slug: {current: string}, publishedAt: string, postType: string, _id: string}) => (
          <li className="bg-[#161616] p-6 rounded-xl shadow-md transform transition-transform duration-300 hover:scale-105" key={blog._id}>
            <Link
              className="hover:underline"
              href={`/blog/${blog?.slug?.current}`}
            >
              <p className="px-6 py-3 w-full rounded-xl mr-4 border border-gray-400 text-white">{blog?.postType}</p>
              <h2 className="text-2xl font-semibold primary-color">{blog?.name}</h2>
              
            </Link>
          </li>
        ))}
      </ul>
    </main>
  );
}