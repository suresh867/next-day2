"use client"
import Link from "next/link"
import { useState } from "react";
import { RxHamburgerMenu, RxCross1 } from "react-icons/rx";


const Navbar = () => {
    const [icon, setIcon] = useState<boolean>(true);
    const toggleIcon = () => {
        setIcon(!icon);

    }

    return (
        <>
             <nav className=" 
            relative w-[100%] bg-blue-400 bg-position-fixed z-10
            ">
                <div className={`min-w-[70%]  min-h-[95vh]  absolute top-[100%] left-0 bg-[#0E131F] ${icon ? "-translate-x-full" : "translate-x-70"} `}>
                    <ul className='items-center  justify-around  text-white'>
                        <li className='transition duration-[2s] ease-in-out hover:border-b-2 border-transparent hover:border-blue-500 text-2xl p-5'>
                            <Link href='/'>Home</Link>
                        </li>
                        <li className='transition duration-[2s] ease-in-out hover:border-b-2 border-transparent hover:border-blue-500 text-2xl p-5'>Services</li>
                        <li className='transition duration-[2s] ease-in-out hover:border-b-2 border-transparent hover:border-blue-500 text-2xl p-5 '>About Us</li>
                        <li className='transition duration-[2s] ease-in-out hover:border-b-2 border-transparent hover:border-blue-500 text-2xl p-5 '>
                            <Link href='/Contact'>Contact Us</Link> </li>
                        <li className='transition duration-[2s] ease-in-out hover:border-b-2 border-transparent hover:border-blue-500 text-2xl p-5 '>
                            <Link href='/Pricing'>Pricing</Link>
                        </li>
                    </ul>
                </div>
                <div className="flex justify-between">
                    <div className="text-xl p-5 first-letter:text-4xl font-bold first-letter:text-red-600">LOGO</div>
                    <div className="flex">
                        <ul className=' hidden md:flex md:items-center md:justify-around md:gap-5 md:p-3'>
                            <li className='transition duration-300 ease-in-out hover:border-b-2 border-transparent hover:border-blue-500'>
                                <Link href='/'>Home</Link>
                            </li>
                            <li className='transition duration-300 ease-in-out hover:border-b-2 border-transparent hover:border-blue-500 cursor-pointer'>Services</li>
                            <li className='transition duration-300 ease-in-out hover:border-b-2 border-transparent hover:border-blue-500 cursor-pointer'>About Us</li>
                            <li className='transition duration-300 ease-in-out hover:border-b-2 border-transparent hover:border-blue-500 cursor-pointer'>
                            <Link href='/Contact'>Contact Us</Link>
                            </li>
                            <li className='transition duration-300 ease-in-out hover:border-b-2 border-transparent hover:border-blue-500 cursor-pointer'>
                                <Link href='/Pricing'>Pricing</Link>
                            </li>
                        </ul>
                        <button className="md:hidden p-3 font-bold text-4xl" onClick={toggleIcon}>{icon ? <RxHamburgerMenu /> : <RxCross1 />}</button>
                    </div>
                </div>
            </nav>
        </>
    )
}

export default Navbar
