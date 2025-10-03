"use client"
import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import { HamburgerMenu } from './HamburgerMenu'
import { logout } from '../logout/actions'
import { supabase } from '@/supabase/supabaseClient'

export const Navbar = () => {


    
const  user = supabase?.auth.getUser()

  console.log('user is here', user)

  const [loggedIn, setLoggedIn] = useState(false)

  useEffect(() => {

    setLoggedIn(true)

  }, [user])

  return (
    <nav className="border-b border-gray-600 bg-black text-gray-400 h-[100px] max-w-[1200px] mx-auto flex justify-between items-center">
        <h1 className="text-3xl font-bold primary-color ml-4">M.Z</h1>
        <ul className="hidden md:flex">
            <li className="p-5">
                <Link href="/">Home</Link>{" "}
            </li>
            <li className="p-5">
                <Link href="/about">About</Link>{" "}
            </li>
            <li className="p-5">
                <Link href="/work">Work</Link>{" "}
            </li>
            <li className="p-5">
                <Link href="/blog">Blog</Link>
            </li>
            <li className="p-5">
                <Link href="/contact">Contact</Link>{" "}
            </li>

            {!loggedIn ? (<li className="p-5">
                <Link href="/login">Login</Link>{" "}
            </li>) : (<li className="p-5">
                <form action={logout}>
                    <button  type="submit" formAction={logout}>Logout</button>{" "}
                </form>
                
            </li>)}
            
            
          
        </ul>
        
        <HamburgerMenu />
    </nav>
    )
}
