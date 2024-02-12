"use client"

import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/button"
import { FaArrowRight } from "react-icons/fa6";


import React, { FormEvent, useState } from 'react'

const page = () => {

  const [userData, setUserData] = useState({
    name: '', 
    email: '', 
    message: '',
  });

  const handleChange = (e: { target: { name: any; value: any; }; }) => {
    const {name, value} = e.target;
    setUserData({...userData, [name]: value});
  }

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault(); 
    try {
      const response = await fetch('/api/handleContact', {
        method: "POST", 
        body: JSON.stringify(userData), 
        headers: {
          "Content-Type" : "application/json"
        }
      });
  
      if (!response.ok) {
        throw new Error('Failed to submit form data');
      }
  
      console.log(userData);
      alert("Form submitted successfully...");
    } catch (error) {
      console.error('Error submitting form data:', error);
      // Handle error (e.g., display error message to user)
    }
    console.log(userData);
    alert("Form submitted successfully...")
  }

  return (
    <main className="w-full h-[59vh] md:h-[100vh] flex flex-col justify-center items-center gap-3 bg-cover bg-center" style={{
      backgroundImage: 'url("/hello.jpg")'
    }}>
      <form onSubmit={handleSubmit}
      className="flex flex-col gap-3 items-center w-[90%] md:w-[30%] md:h-[70%] border-5 rounded-sm border-cyan-300 bg-[#38405F] text-white"
>
        <h1 className="text-center font-bold text-3xl font-mono pt-6">Contact Us</h1>
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
          <Button variant='destructive' className="flex gap-2" onSubmit={handleSubmit}>Send <FaArrowRight /></Button>
        </div>
      </form>
    </main>
  )
}

export default page

//using formik 
// import React from 'react';
// import { Formik, Form, Field } from 'formik';

// const NestedExample = () => (
//   <div>
//     <h1>Social Profiles</h1>
//     <Formik
//       initialValues={{
//         social: {
//           facebook: '',
//           twitter: '',
//         },
//       }}
//       onSubmit={values => {
//         // same shape as initial values
//         console.log(values);
//       }}
//     >
//       <Form>
//         <Field name="social.facebook" />
//         <Field name="social.twitter" />
//         <button type="submit">Submit</button>
//       </Form>
//     </Formik>
//   </div>
// );

// export default NestedExample