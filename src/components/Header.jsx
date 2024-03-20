import { links } from '@/constants'
import Link from 'next/link'
import React, { useState } from 'react'

const Header = () => {
    const [activeLink,setActiveLink] = useState("Discussion Form")
  return (
    <div className='md:hidden flex justify-between bg-[#1e375f]  items-center fixed w-full z-[999]'>
          {links.map((item) => (
            <Link onClick ={() => setActiveLink(item.link)} key={item} href={item.hash} className={`text-white  w-[50%] h-10 items-center text-center pt-1 duration-200  ${activeLink === item.link && 'bg-black duration-200 border-b-4 border-red-800' }`}>{item.link}</Link>
          ))}
        </div>
  )
}

export default Header
