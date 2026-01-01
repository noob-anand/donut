"use client"
import React from 'react'
import Link from 'next/link'
import { useSession, signIn, signOut } from "next-auth/react"
import { useRouter } from 'next/navigation'

const Navbar = () => {
  const router = useRouter();
  const { data: session, status } = useSession();

  const handleMyPage = () => {
    if (!session?.user?.name) {
      router.push("/login");
      return;
    }

    router.push(`/${session.user.name}`);
  };
  return (
    <div className="fixed top-0 z-50 w-full
  bg-[#070B18]/85 backdrop-blur-md
    text-white flex justify-between items-center p-4 md:h-14">

      <a href="/">
        <div className="logo font-bold text-2xl flex items-center" >
          <span className='w-12'><img src="/donuts.png" alt="" /></span>
          <span className='text-[#f7a6b800]'>-</span>
          <span className="text-[#F7A6B8]">Don</span>
          <span className="text-[#48c9ea]">ut~</span>
        </div>
      </a>

      <div>
        <ul>
          <li className='flex gap-4 items-center'>
            <a className='hover:font-bold' href="https://www.linkedin.com/in/anand-sharma-404675371/">Contact</a>


            {session && <Link className='hover:font-bold' href="/profile">
              <button type="button" className="text-white bg-gradient-to-r from-cyan-500 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 font-medium rounded-xl text-sm px-4 py-2.5 text-center leading-5" >profile</button> </Link>}
            {session &&
              <button type="button" className="text-white bg-gradient-to-r from-cyan-500 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 font-medium rounded-xl text-sm px-4 py-2.5 text-center leading-5" onClick={handleMyPage}>My Page</button>}
            {session &&
              <button type="button" className="text-white bg-gradient-to-br from-pink-500 to-orange-400 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-pink-200 dark:focus:ring-pink-800 font-medium rounded-xl text-sm px-4 py-2.5 text-center leading-5" onClick={() => { signOut() }}>LogOut</button>}


            {!session &&
              <Link className='hover:font-bold' href="/login">
                <button type="button" className="text-white bg-gradient-to-r from-cyan-500 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 font-medium rounded-xl text-sm px-4 py-2.5 text-center leading-5" >Login</button>
              </Link>}
          </li>
        </ul>
      </div>
    </div>
  )
}

export default Navbar