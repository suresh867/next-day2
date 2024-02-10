"use client"
import { Button } from '@/components/ui/button'
import React, { useState } from 'react'
import { FaCartArrowDown } from "react-icons/fa";
import { CiUser } from "react-icons/ci";



const page = () => {
  const [isClicked, setIsClicked] = useState(false)

  const handleAnnualClick = () => {
    setIsClicked(!isClicked)
  }
  return (
    <>
      <div className='h-fit w-full bg-[#fff] md:flex '>
        <div className='flex flex-col gap-2 m-5 p-5 text-center border-b-4 md:w-[500px] md:justify-center md:border-none'>
          <h1 className='font-bold text-4xl font-mono'>Choose a Plan to Grow Your Business</h1>
          <p className='text-sm text-sans'>Lorem ipsum dolor sit amet
            totam voluptatum sapiente, corrupti nostrum ab nam obcaecati aut culpa nesciunt cum laborum odit.</p>
        </div>
        <div className='flex justify-center p-5'>
          <Button className={`${isClicked? 'bg-[#fff] text-black text-[14px] rounded-r-none' : "rounded-r-none"}`}>Monthly</Button>
          <Button className='bg-[#fff] text-black text-[16px] rounded-l-none mr-1 hover:text-white hover:bg-[#111]' onClick={handleAnnualClick}>Annual</Button>
          <FaCartArrowDown className='text-2xl cursor-pointer' />
        </div>
        <div className='flex flex-wrap h-fit md:w-[80%] md:h-[100vh] md:p-3 justify-self-center'>
          <div className='w-[33%] h-[35vh] md:h-[45%] flex flex-col gap-2 items-center border-2 my-3 '>
            <div className='relative z-0 -top-4 border-2 rounded-full p-1 bg-[#fff]'><CiUser /></div>
            <h2 className='font-bold text-2xl'>Basic</h2>
            <p className='text-xs text-center px-2'>description this is a dummy description to style </p>
            <div className='h-[40%] mt-10 border-t-4 w-full flex flex-col items-center justify-center'>
              <h3 className='first-letter:text-xs first-letter:align-top first-letter:font-bold flex  justify-center'>$<span className='font-bold text-4xl'>59</span><span className='w-[24%] text-xs m-1'> per year</span></h3>
              <Button className='w-full text-2xl text-center'> <FaCartArrowDown /></Button>
            </div>
          </div>
          <div className='w-[33%] h-[35vh] md:h-[45%] flex flex-col gap-2 items-center border-2 my-3 '>
            <div className='relative z-0 -top-4 border-2 rounded-full p-1 bg-[#fff]'><CiUser /></div>
            <h2 className='font-bold text-2xl'>Basic</h2>
            <p className='text-xs text-center px-2'>description this is a dummy description to style </p>
            <div className='h-[40%] mt-10 border-t-4 w-full flex flex-col items-center justify-center'>
              <h3 className='first-letter:text-xs first-letter:align-top first-letter:font-bold flex  justify-center'>$<span className='font-bold text-4xl'>59</span><span className='w-[24%] text-xs m-1'> per year</span></h3>
              <Button className='w-full text-2xl text-center'> <FaCartArrowDown /></Button>
            </div>
          </div>
          <div className='w-[33%] h-[35vh] md:h-[45%] flex flex-col gap-2 items-center border-2 my-3 '>
            <div className='relative z-0 -top-4 border-2 rounded-full p-1 bg-[#fff]'><CiUser /></div>
            <h2 className='font-bold text-2xl'>Basic</h2>
            <p className='text-xs text-center px-2'>description this is a dummy description to style </p>
            <div className='h-[40%] mt-10 border-t-4 w-full flex flex-col items-center justify-center'>
              <h3 className='first-letter:text-xs first-letter:align-top first-letter:font-bold flex  justify-center'>$<span className='font-bold text-4xl'>59</span><span className='w-[24%] text-xs m-1'> per year</span></h3>
              <Button className='w-full text-2xl text-center'> <FaCartArrowDown /></Button>
            </div>
          </div>
          <div className='w-[33%] h-[35vh] md:h-[45%] flex flex-col gap-2 items-center border-2 my-3 '>
            <div className='relative z-0 -top-4 border-2 rounded-full p-1 bg-[#fff]'><CiUser /></div>
            <h2 className='font-bold text-2xl'>Basic</h2>
            <p className='text-xs text-center px-2'>description this is a dummy description to style </p>
            <div className='h-[40%] mt-10 border-t-4 w-full flex flex-col items-center justify-center'>
              <h3 className='first-letter:text-xs first-letter:align-top first-letter:font-bold flex  justify-center'>$<span className='font-bold text-4xl'>59</span><span className='w-[24%] text-xs m-1'> per year</span></h3>
              <Button className='w-full text-2xl text-center'> <FaCartArrowDown /></Button>
            </div>
          </div>
          <div className='w-[33%] h-[35vh] md:h-[45%] flex flex-col gap-2 items-center border-2 my-3 '>
            <div className='relative z-0 -top-4 border-2 rounded-full p-1 bg-[#fff]'><CiUser /></div>
            <h2 className='font-bold text-2xl'>Basic</h2>
            <p className='text-xs text-center px-2'>description this is a dummy description to style </p>
            <div className='h-[40%] mt-10 border-t-4 w-full flex flex-col items-center justify-center'>
              <h3 className='first-letter:text-xs first-letter:align-top first-letter:font-bold flex  justify-center'>$<span className='font-bold text-4xl'>59</span><span className='w-[24%] text-xs m-1'> per year</span></h3>
              <Button className='w-full text-2xl text-center'> <FaCartArrowDown /></Button>
            </div>
          </div>
          <div className='w-[33%] h-[35vh] md:h-[45%] flex flex-col gap-2 items-center border-2 my-3 '>
            <div className='relative z-0 -top-4 border-2 rounded-full p-1 bg-[#fff]'><CiUser /></div>
            <h2 className='font-bold text-2xl'>Basic</h2>
            <p className='text-xs text-center px-2'>description this is a dummy description to style </p>
            <div className='h-[40%] mt-10 border-t-4 w-full flex flex-col items-center justify-center'>
              <h3 className='first-letter:text-xs first-letter:align-top first-letter:font-bold flex  justify-center'>$<span className='font-bold text-4xl'>59</span><span className='w-[24%] text-xs m-1'> per year</span></h3>
              <Button className='w-full text-2xl text-center'> <FaCartArrowDown /></Button>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default page
