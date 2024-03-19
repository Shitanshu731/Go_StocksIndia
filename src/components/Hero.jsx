"use client"
import Image from 'next/image';
import React, { useState } from 'react'

const Hero = () => {
    const [isSidebar,setisSidebar] = useState(false);
    const sidebar = () => {
        setisSidebar(prev => !prev);
    }
  return (
    <div className="w-full h-full flex max-md:flex-col">
      <div className={`sidebar w-0 max-md:fixed z-50 bg-[#1e375f] max-md:w-0 h-[100vh] ${isSidebar && 'w-[35%] duration-150'} duration-150`} >
        <div className={`mt-7 flex op opacity-0 justify-between px-5 items-center ${isSidebar && 'opacity-100'}`}>
            <Image className='rounded-full' src={"/user-acc.jpg"} alt="" height={40} width={40}/>
            <h2 className='font-bold text-2xl absolute ml-12 text-white'>Hello, User</h2>
            <Image className='rounded-full' src={"/notification.png"} alt="notification" height={40} width={40}/>
        </div>
        <hr className='mt-3'/>
        <div className={`flex opacity-0 items-center gap-6 mt-4 ml-5 ${isSidebar && 'opacity-100'}`}>
        <Image className='rounded-md' src={"/message.png"} alt="message" height={30} width={30}/>
            <h2 className='text-white text-xl font-bold'>Discussion Form</h2>
            <Image className='rounded-md ml-20 cursor-pointer' src={"/downarrow.png"} alt="downarrow" height={20} width={20}/>
        </div>
        <div className={`flex opacity-0 items-center gap-6 mt-4 ml-5  ${isSidebar && 'opacity-100'}`}>
        <Image className='rounded-full bg-white' src={"/dollar.png"} alt="dollar" height={30} width={30}/>
            <h2 className='text-white text-xl font-bold'>Discussin Form</h2>
        </div>
        <div className={`flex opacity-0 flex-col  gap-3 mt-5 ml-20  ${isSidebar && 'opacity-100'}`}>
            <h5 className='text-[17px] text-white cursor-pointer font-semibold '>Sentiment</h5>
            <h5 className='text-[17px] text-white cursor-pointer font-semibold '>Market</h5>
            <h5 className='text-[17px] text-white cursor-pointer font-semibold '>Sector</h5>
            <h5 className='text-[17px] text-white cursor-pointer font-semibold '>Watchlist</h5>
            <h5 className='text-[17px] text-white cursor-pointer font-semibold '>Events</h5>
            <h5 className='text-[17px] text-white cursor-pointer font-semibold '>News/Interview</h5>
        </div>
      </div>
      <div className={`discussionSection w-[60%] max-md:w-[100%] bg-white h-[100vh] relative duration-150 px-4 ${isSidebar && 'w-[50%] duration-150'}`}>
        <div className='sidebarArrow absolute top-[44%] left-0 bg-[#1e375f] w-4 h-20 cursor-pointer' onClick={sidebar}>
        <Image className={`rounded-md rotate-90 duration-150 mt-6 ${isSidebar && '-rotate-90 duration-150'}`} src={"/downarrow.png"} alt="downarrow" height={40} width={40}/>
        </div>
        <h2 className='text-red-300 text-4xl font-bold bg-slate-300 w-[50%] max-md:w-[80%] p-2 items-center text-center ml-4 mt-4 shadow-lg'>Discussion Forum</h2>
        <div className='mt-3 discussionContainer flex flex-col gap-4'>
        <div className={`discussionBlock bg-white py-4 rounded-md shadow-lg w-[100%] overflow-hidden`}>
          <div className='userDetails flex items-center gap-6'>
          <Image className={`rounded-md duration-150 ml-2 mt-2`} src={"/user-acc.jpg"} alt="downarrow" height={40} width={40}/>
          <h3 className='max-md:text-sm'>Lorem Ipsum</h3>
          <p className={`bg-blue-500 rounded-xl px-3 text-sm text-white max-md:text-sm `}>Sector 2</p>
          <p className={`text-blue-500  ${isSidebar ? 'ml-[40%]' : 'ml-[50%]'} max-md:ml-[10%]`}>2 mins ago</p>
          </div>
          <p className='commentSection mx-14 w-[70%] text-wrap max-md:text-sm  '>asdasdasdasdasdasda sdasddddddddddddddddddd dddddddddd ddddddddddddd</p>
          <div className='shareLike flex items-center gap-14 ml-16 max-md:text-[10px] max-md:gap-5'>
            <div className=' mt-3 gap-2 max-md:gap-1   flex items-center'>
            <Image className={`cursor-pointer rounded-md duration-150 `} src={"/heart.png"} alt="downarrow" height={20} width={20}/>
            <p>Likes</p>
            </div>
            <div className=' mt-3 gap-2 max-md:gap-1  flex items-center'>
            <Image className={`cursor-pointer rounded-md duration-150 `} src={"/eye.jpg"} alt="downarrow" height={20} width={20}/>
            <p>2k</p>
            </div>
            <div className=' mt-3 gap-2 max-md:gap-1  flex items-center'>
            <Image className={`cursor-pointer rounded-md duration-150 `} src={"/comment.jpg"} alt="downarrow" height={20} width={20}/>
            <p>2k comments</p>
            </div>
            <div className=' mt-3 gap-2 max-md:gap-1  flex items-center'>
            <Image className={`cursor-pointer rounded-md duration-150 `} src={"/share.png"} alt="downarrow" height={20} width={20}/>
            <p>Shares</p>
            </div>
          </div>
        </div>
        
      </div>
      </div>
      <div className={`marketStoriesSection w-[40%] max-md:w-[100%] bg-yellow-500 h-[100vh] duration-150 ${isSidebar && 'w-[25%] duration-150'}`}>
        Market Stories
      </div>
    </div>
  )
}

export default Hero
