"use client"
import Image from 'next/image';
import React from 'react'

const marketStories = ({isSidebar}) => {
  return (
    
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
  )
}

export default marketStories
