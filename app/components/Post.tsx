import Link from "next/link"

interface BlogProps {
  title: string;
  slug?: {
    current: string;
  };
  // Add other blog properties as needed (e.g., content, author, date)
}

interface PostProps {
  blog: BlogProps;
}

export const Post = ({blog}: PostProps) => {

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
