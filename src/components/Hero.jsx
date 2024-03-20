"use client"
import Image from 'next/image';
import Link from 'next/link';
import React, { useState } from 'react'

const Hero = () => {
    const [isSidebar,setisSidebar] = useState(false);
    const sidebar = () => {
        setisSidebar(prev => !prev);
    }
    
  return (
    <div className="main w-full h-full flex max-md:flex-col" >
      <div className={`sidebar w-0 max-md:fixed z-[9999] bg-[#1e375f] max-md:w-0 h-[100vh] ${isSidebar && 'w-[35%] duration-150 max-md:w-[60%] max-sm:w-[50%]'} duration-150`} >
      
        <div className={`mt-7 flex op opacity-0 justify-between px-5 items-center ${isSidebar && 'opacity-100'}`}>
            <Image className='rounded-full max-sm:w-4' src={"/user-acc.jpg"} alt="user" height={40} width={40}/>
            <h2 className='font-bold text-2xl absolute ml-12 max-sm:ml-5 text-white max-sm:text-[12px]'>Hello, User</h2>
            <Image className='rounded-full max-sm:w-4' src={"/notification.png"} alt="notification" height={40} width={40}/>
            <Image className='rounded-full max-sm:w-4 hidden crossMenu rotate-90 cursor-pointer' src={"/downarrow.png"} alt="notification" height={30} width={30} onClick={sidebar}/>
        </div>
        <hr className='mt-3'/>
        <div className={`flex opacity-0 items-center gap-6 max-sm:gap-2 mt-4 ml-5 ${isSidebar && 'opacity-100'} hover:bg-black duration-150 rounded-lg p-3`}>
        <Image className='rounded-md max-sm:w-5' src={"/message.png"} alt="message" height={30} width={30}/>
            <Link href="#discussionForm" className='text-white text-xl font-bold  max-sm:text-[14px]'>DiscussionForm</Link>
            <Image className='rounded-md ml-20 cursor-pointer max-sm:ml-1 max-sm:w-3' src={"/downarrow.png"} alt="downarrow" height={20} width={20}/>
        </div>
        <div className={`flex opacity-0 items-center gap-6 max-sm:gap-2 mt-4 ml-5  ${isSidebar && 'opacity-100'} hover:bg-black duration-150 rounded-lg p-3`}>
        <Image className='rounded-full max-sm:w-5 bg-white' src={"/dollar.png"} alt="dollar" height={30} width={30}/>
            <Link href="#marketStories" className='text-white text-xl font-bold  max-sm:text-[14px] '>Market Stories</Link>
        </div>
        <div className={`flex opacity-0 flex-col  gap-3 mt-5 ml-20 max-sm:ml-10 max-sm:gap-7   ${isSidebar && 'opacity-100'} `}>
            <h5 className='text-[17px] text-white cursor-pointer font-semibold max-sm:text-[12px]  '>Sentiment</h5>
            <h5 className='text-[17px] text-white cursor-pointer font-semibold max-sm:text-[12px]  '>Market</h5>
            <h5 className='text-[17px] text-white cursor-pointer font-semibold max-sm:text-[12px]  '>Sector</h5>
            <h5 className='text-[17px] text-white cursor-pointer font-semibold max-sm:text-[12px]  '>Watchlist</h5>
            <h5 className='text-[17px] text-white cursor-pointer font-semibold max-sm:text-[12px]  '>Events</h5>
            <h5 className='text-[17px] text-white cursor-pointer font-semibold max-sm:text-[12px]  '>News/Interview</h5>
        </div>
      </div>
      <div className={`discussionSection w-[60%] max-md:w-[100%] h-[100vh] relative duration-150 px-4 max-md:mt-10 scroll-mt-32 ${isSidebar && 'w-[50%] duration-150'} `}  id="discussionForm" >
        <div className={`sidebarArrow  fixed top-[44%]  left-0 bg-[#1e375f] w-4 h-20 cursor-pointer ${isSidebar && 'ml-[25.7%] max-md:ml-[60%] max-sm:ml-[50%] max-md:top-[44%] duration-200'} `} onClick={sidebar}>
        <Image className={`rounded-md -rotate-90 duration-150 mt-6  ${isSidebar && 'rotate-90 duration-150'}`} src={"/downarrow.png"} alt="downarrow" height={40} width={40}/>
        </div>
        <h2 className='text-red-300 text-4xl font-bold bg-slate-300 max-md:hidden w-[50%] max-md:w-[80%] p-2 items-center text-center ml-4 mt-4 shadow-lg'>Discussion Forum</h2>
        <div className='mt-3 discussionContainer flex flex-col gap-4'>
        <div className={`discussionBlock bg-white py-4 rounded-md shadow-lg w-[100%] overflow-hidden `}>
          <div className='userDetails flex items-center gap-6'>
          <Image className={`rounded-md duration-150 ml-2 mt-2`} src={"/user-acc.jpg"} alt="downarrow" height={40} width={40}/>
          <h3 className='max-md:text-sm max-sm:text-[14px]'>Lorem Ipsum</h3>
          <p className={`bg-blue-500 rounded-xl px-3 text-sm text-white max-md:text-sm max-sm:text-[10px] `}>Sector 2</p>
          <p className={`text-blue-500  ${isSidebar ? 'ml-[40%]' : 'ml-[50%]'} max-md:ml-[40%] max-sm:ml-[10%] max-sm:text-[12px]`}>2 mins ago</p>
          </div>
          <p className='commentSection mx-14 w-[70%] text-wrap max-md:text-sm  '>asdasdasdasdasdasda sdasddddddddddddddddddd </p>
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
      <div className={`marketStoriesSection w-[40%] max-md:w-[100%] h-[100vh] duration-150 scroll-mt-10 py-4  ${isSidebar && 'w-[25%] duration-150'} `} id="marketStories">
      <h2 className='text-red-300 text-2xl mb-10 font-bold bg-slate-300 mx-auto w-[50%] max-md:w-[50%] p-1 items-center text-center shadow-lg'>Market Stories</h2>
      <div className='allStories flex flex-col gap-6'>
        <div className='storyCard w-[70%] h-[40%] bg-white mx-auto border-4 shadow-lg pb-3 overflow-hidden'>
          <Image className={`cursor-pointer duration-150 w-[100%] h-[60%] `} src={"/s2.jpg"} alt="downarrow" height={100} width={100}/>
          <h5 className='mt-4 font-bold ml-4'>The coldest Sunset</h5>
          <p className='ml-4 w-[90%] mt-2'>This is a very great place to visit.This is a very great place to visit.This is a very great place to visit.</p>
        </div>
        <div className='storyCard w-[70%] h-[40%] bg-white mx-auto border-4 shadow-lg pb-3 overflow-hidden'>
          <Image className={`cursor-pointer duration-150 w-[100%] h-[60%] `} src={"/s2.jpg"} alt="downarrow" height={100} width={100}/>
          <h5 className='mt-4 font-bold ml-4'>The coldest Sunset</h5>
          <p className='ml-4 w-[90%] mt-2'>This is a very great place to visit.This is a very great place to visit.This is a very great place to visit.</p>
        </div>
        <div className='storyCard w-[70%] h-[40%] bg-white mx-auto border-4 shadow-lg pb-3 overflow-hidden'>
          <Image className={`cursor-pointer duration-150 w-[100%] h-[60%] `} src={"/s2.jpg"} alt="downarrow" height={100} width={100}/>
          <h5 className='mt-4 font-bold ml-4'>The coldest Sunset</h5>
          <p className='ml-4 w-[90%] mt-2'>This is a very great place to visit.This is a very great place to visit.This is a very great place to visit.</p>
        </div>
      </div>
      </div>
    </div>
  )
}

export default Hero
