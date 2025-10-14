"use client"
import Link from "next/link";
import { HamburgerMenu } from "./HamburgerMenu";
import { useAuth } from "../auth/AuthContext";
import { useRouter } from "next/navigation";


export const Navbar = () => {
  
  const { user, loading, logout } = useAuth()
  const router = useRouter();


  if (loading) return null

   const handleLogout = async () => {
    await logout();
    router.refresh(); // Forces SSR parts to re-fetch
  };

  console.log(user?.email)

  return (
    <nav className="border-b border-gray-600 bg-black text-gray-400 h-[100px] max-w-[1200px] mx-auto flex justify-between items-center">
      <h1 className="text-3xl font-bold primary-color ml-4">M.Z</h1>
      <ul className="hidden md:flex">
        <li className="p-5">
          <Link href="/">Home</Link>
        </li>
        <li className="p-5">
          <Link href="/about">About</Link>
        </li>
        <li className="p-5">
          <Link href="/work">Work</Link>
        </li>
        <li className="p-5">
          <Link href="/blog">Blog</Link>
        </li>
        <li className="p-5">
          <Link href="/contact">Contact</Link>
        </li>

        {!user ? (
          <li className="p-5">
            <button
              onClick={() => router.push("/login")}
            >
              Login
            </button>
          </li>
        ) : (
          <li className="p-5">
            
              <button onClick={handleLogout} type="submit" className="hover:text-white">
                Logout
              </button>
            
          </li>
        )}
      </ul>

      <HamburgerMenu />
    </nav>
  );
};
