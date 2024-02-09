import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/button"
import { FaArrowRight } from "react-icons/fa6";

import React from 'react'

const page = () => {
  return (
    <main className="w-full h-[59vh] md:h-[100vh] flex flex-col justify-center items-center gap-3 bg-cover bg-center" style={{
      backgroundImage: 'url("/hello.jpg")'
    }}>
      <form className="flex flex-col gap-3 items-center w-[90%] md:w-[30%] md:h-[70%] border-5 rounded-sm border-cyan-300 bg-[#38405F] text-white">
        <h1 className="text-center font-bold text-3xl font-mono pt-6">Contact Us</h1>
        <p className="text-sm">Lorem ipsum dolor sit amet consectetur </p>
        <div className="w-[90%] px-3 flex flex-col gap-2">
          <label className="">Name</label>
          <Input type="text" placeholder="Enter your name..." />
        </div>
        <div className="w-[90%] flex flex-col px-3 gap-2">
          <label >Email</label>
          <Input type="text" placeholder="Enter your name..." />
        </div>
        <div className="w-[90%] flex flex-col px-3 gap-2 ">
          <label htmlFor="">Message</label>
          <Textarea>write something...</Textarea>
        </div>
        <div className="flex justify-center pb-2">
          <Button variant='destructive' className="flex gap-2">Send <FaArrowRight /></Button>
        </div>
      </form>
    </main>
  )
}

export default page
