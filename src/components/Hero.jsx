"use client"
import Image from 'next/image';
import React, { useState } from 'react'

const Hero = () => {
    const [isSidebar,setisSidebar] = useState(true);
    const sidebar = () => {
        setisSidebar(prev => !prev);
    }
  return (
    <div className="w-full h-full flex ">
      <div className={`sidebar w-[25%] bg-[#1e375f] h-[100vh] ${isSidebar && 'w-[0%] duration-150'} duration-150`} >
        <div className='mt-7 flex justify-between px-5 items-center'>
            <Image className='rounded-full' src={"/user-acc.jpg"} alt="" height={40} width={40}/>
            <h2 className='font-bold text-2xl absolute ml-12 text-white'>Hello, User</h2>
            <Image className='rounded-full' src={"/notification.png"} alt="notification" height={40} width={40}/>
        </div>
        <hr className='mt-3'/>
        <div className='flex items-center gap-6 mt-4 ml-5'>
        <Image className='rounded-md' src={"/message.png"} alt="message" height={30} width={30}/>
            <h2 className='text-white text-xl font-bold'>Discussin Form</h2>
            <Image className='rounded-md ml-20 cursor-pointer' src={"/downarrow.png"} alt="downarrow" height={20} width={20}/>
        </div>
        <div className='flex items-center gap-6 mt-4 ml-5'>
        <Image className='rounded-full bg-white' src={"/dollar.png"} alt="dollar" height={30} width={30}/>
            <h2 className='text-white text-xl font-bold'>Discussin Form</h2>
        </div>
        <div className='flex flex-col gap-3 mt-5 ml-20'>
            <h5 className='text-[17px] text-white cursor-pointer font-semibold '>Sentiment</h5>
            <h5 className='text-[17px] text-white cursor-pointer font-semibold '>Market</h5>
            <h5 className='text-[17px] text-white cursor-pointer font-semibold '>Sector</h5>
            <h5 className='text-[17px] text-white cursor-pointer font-semibold '>Watchlist</h5>
            <h5 className='text-[17px] text-white cursor-pointer font-semibold '>Events</h5>
            <h5 className='text-[17px] text-white cursor-pointer font-semibold '>News/Interview</h5>
        </div>
      </div>
      <div className={`discussionSection w-[50%] bg-green-500 h-[100vh] relative duration-150 ${isSidebar && 'w-[60%] duration-150'}`}>
        <div className='sidebarArrow absolute top-[44%] left-0 bg-[#1e375f] w-4 h-20 cursor-pointer' onClick={sidebar}>
        <Image className={`rounded-md rotate-90 duration-150 mt-6 ${isSidebar && '-rotate-90 duration-150'}`} src={"/downarrow.png"} alt="downarrow" height={40} width={40}/>
        </div>
      </div>
      <div className={`marketStoriesSection w-[25%] bg-yellow-500 h-[100vh] duration-150 ${isSidebar && 'w-[40%] duration-150'}`}>
        Market Stories
      </div>
    </div>
  )
}

export default Hero
