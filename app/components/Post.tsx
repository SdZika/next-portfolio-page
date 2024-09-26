import Link from "next/link"

export const Post = ({blog}: any) => {

  

  return (
        <li className="bg-[#161616] p-6 rounded-xl shadow-md transform transition-transform duration-300 hover:scale-105" >
            <Link
              className="hover:underline"
              href={`/blog/${blog?.slug?.current}`}
            >
              <p className="px-6 py-3 w-full rounded-xl mr-4 border border-gray-400 text-white">{blog?.postType}</p>
              <h2 className="text-2xl font-semibold primary-color">{blog?.name}</h2>
            </Link>
        </li>
    )
}
