"use client"
import React, { useState, useEffect } from "react";
import Link from 'next/link'
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";


export const HamburgerMenu = () => {

    const [nav, setNav] = useState(false);

    const handleNav = () => {
      setNav(!nav);
    };
  
    const handleNavItemClick = () => {
      setNav(false);
    };
  
    // Close the menu when Escape key is pressed
    useEffect(() => {
        const handleKeyDown = (event) => {
            if (event.key === "Escape") {
                setNav(false);
            }
        };
        window.addEventListener("keydown", handleKeyDown);
        return () => {
            window.removeEventListener("keydown", handleKeyDown);
        };
    }, []);

    // Close the menu on window resize
    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth >= 768) {
                setNav(false); // Close menu on desktop view
            }
        };
        window.addEventListener("resize", handleResize);
        return () => {
            window.removeEventListener("resize", handleResize);
        };
    }, []);


  return (
    <>
    <div onClick={handleNav} className="block md:hidden mr-6">
        {nav ? <AiOutlineClose size={20} /> : <AiOutlineMenu size={20} />}
    </div>

    <div
        className={
        nav
            ? "z-10 fixed h-full left-0 top-0 w-[60%] bg-[#202121] ease-in-out duration-500"
            : "fixed left-[-100%]"
        }
    >
        <h1 className="text-3xl text-primary-color m-4">M.Z</h1>
        <ul className="p-8 text-2xl">
        <li className="p-2">
            <Link href="/" onClick={handleNavItemClick}>Home</Link>
        </li>
        <li className="p-2">
            <Link href="/about" onClick={handleNavItemClick}>About</Link>
        </li>
        <li className="p-2">
            <Link href="/work" onClick={handleNavItemClick}>Work</Link>
        </li>
        <li className="p-2">
            <Link href="/blog"onClick={handleNavItemClick} >Blog</Link>
        </li>
        <li className="p-2">
            <Link href="/contact" onClick={handleNavItemClick}>Contact</Link>
        </li>
        </ul>
    </div>
  </>
  )
}
