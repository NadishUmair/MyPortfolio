"use client";

import Link from 'next/link';
import React, { useState } from 'react';
import { IoIosMenu } from "react-icons/io";

export default function Navbar() {
  const [showMenu, setShowMenu] = useState(false);

  return (
    <div className='mt-4 md:flex flex-col justify-center w-full items-center z-20 absolute md:top-0 left-0 md:bg-transparent'>
      <div className=' flex justify-end md:hidden'>
        <IoIosMenu 
          className='text-[rgb(97,210,180)] text-5xl hover:text-white' 
          onClick={() => setShowMenu(!showMenu)} 
        />
      </div>
      <div className={`md:block ${showMenu ? 'block transition ease-in-out duration-400 ' : 'hidden'} bg-white md:bg-transparent md:w-[70%] bg-opacity-90 mt-2 md:mt-0`}>
        <nav>
          <ul className='md:text-white md:flex justify-around p-4'>
            <li className='mt-4 md:mt-0'>
              <Link href={""} className='tracking-wider hover:text-[#61D2B4]'>Services</Link>
            </li>
            <li className='mt-4 md:mt-0'>
              <Link href={""} className='tracking-wider hover:text-[#61D2B4]'>Projects</Link>
            </li>
            <li className='mt-4 md:mt-0'>
              <Link href={""} className='tracking-wider hover:text-[#61D2B4]'>About Me</Link>
            </li>
            <li className='mt-4 md:mt-0'>
              <Link href={""} className='tracking-wider hover:text-[#61D2B4]'>Contact Me</Link>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
}
