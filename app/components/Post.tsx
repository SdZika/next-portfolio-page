import Link from "next/link"

export const Post = ({blog}: any) => {

  

  return (
        <li className="bg-[#161616] p-6 rounded-xl shadow-md transform transition-transform duration-300 hover:scale-105" >
            <Link
              className="hover:underline"
              href={`/blog/${blog?.slug?.current}`}
            >
             
              <h2 className="text-2xl font-semibold primary-color">{blog?.title}</h2>
            </Link>
        </li>
    )
}
