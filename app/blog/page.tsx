import Link from "next/link";
import { defineQuery } from "next-sanity";

import { client } from "@/sanity/client";



const EVENTS_QUERY = defineQuery(`*[_type == "post" && defined(slug.current)] | order(publishedAt desc) {
    _id,
    name,
    publishedAt,
    slug,
    body
  }`);

export default async function IndexPage() {
  const blogs = await client.fetch(EVENTS_QUERY);
  console.log(blogs)

  return (
    <main className="flex bg-gray-100 min-h-screen flex-col p-24 gap-12">
      <h1 className="text-4xl font-bold tracking-tighter">BLOGS</h1>
      <ul className="grid grid-cols-1 gap-12 lg:grid-cols-2">
        {blogs.map((blog) => (
          <li className="bg-white p-4 rounded-lg" key={blog._id}>
            <Link
              className="hover:underline"
              href={`/blog/${blog?.slug?.current}`}
            >
              <h2 className="text-xl font-semibold">{blog?.name}</h2>
            </Link>
          </li>
        ))}
      </ul>
    </main>
  );
}