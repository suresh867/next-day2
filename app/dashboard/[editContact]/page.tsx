"use client"

import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/button"
import { FaArrowRight } from "react-icons/fa6";


import React, { FormEvent, useEffect, useState } from 'react'

const page = (props:any) => {

  const [userData, setUserData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (e: { target: { name: any; value: any; }; }) => {
    const { name, value } = e.target;
    setUserData({ ...userData, [name]: value });
  }

  // useEffect (() => {
  //   getContactDetails()
  // }, [])


  const getContactDetails = async () => {
    // let contactData = await fetch("http://localhost:3000/api/data/65cb662020974293269da2c6");
    await fetch("/ap/handleContact", {
      method: "PUT",
      body: JSON.stringify("65cb662020974293269da2c4"),
      headers: {"Content-Type": "application/json"}
    })
    // contactData = await contactData.json();
    // console.log(contactData);
  }

  return (
    <main className="w-full h-[59vh] md:h-[100vh] flex flex-col justify-center items-center gap-3 bg-cover bg-center" style={{
      backgroundImage: 'url("/hello.jpg")'
    }}>

      <form
        className="flex flex-col gap-3 items-center w-[90%] md:w-[30%] md:h-[70%] border-5 rounded-sm border-cyan-300 bg-[#38405F] text-white"
      >
        <h1 className="text-center font-bold text-3xl font-mono pt-6">Update Contact Details</h1>
        <p className="text-sm">Lorem ipsum dolor sit amet consectetur </p>
        <div className="w-[90%] px-3 flex flex-col gap-2">
          <label className="">Name</label>
          <Input className="text-black" type="text" id="name" name="name" value={userData.name} onChange={handleChange} placeholder="Enter your name..." />
        </div>
        <div className="w-[90%] flex flex-col px-3 gap-2">
          <label >Email</label>
          <Input className="text-black" type="email" id="email" name="email" value={userData.email} onChange={handleChange} placeholder="Enter your name..." />
        </div>
        <div className="w-[90%] flex flex-col px-3 gap-2 ">
          <label htmlFor="">Message</label>
          <Textarea className="text-black" id="message" name="message" value={userData.message} onChange={handleChange} placeholder="Write something"></Textarea>
        </div>
        <div className="flex justify-center pb-2">
          <Button variant='destructive' className="flex gap-2">Update <FaArrowRight /></Button>
        </div>
      </form>
      
    </main>
  )
}

export default page
