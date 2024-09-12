/* eslint-disable no-unused-vars */
import React, { useState } from 'react'
import Logo from '../components/Logo'
import { IoMdMenu } from "react-icons/io";
import { IoMdCloseCircle } from "react-icons/io";

const NavBar = () => {
  const [mobile,setMobile] = useState(false);
  return (
    <div className='flex flex-row space-x-32 justify-start items-center mx-8 p-8 max-md:px-2 max-md:py-4 max-md:flex-col'>
        <div className=" flex items-center justify-center">
          <Logo></Logo>
        </div>
        {
          !mobile && (
              <div className='absolute right-4 text-2xl md:hidden'><IoMdMenu className='text-green-500' onClick={()=> setMobile(!mobile)}/></div>
          )
        }
        {
          mobile && (
              <div className='absolute right-4 text-2xl md:hidden'><IoMdCloseCircle className='text-green-500' onClick={()=> setMobile(!mobile)}/></div>
          )

        }

        <div className="flex flex-row space-x-5 max-sm:hidden">
            <a href="#" className='hover:text-titles'>Home</a>
            <a href="#about" className='hover:text-titles'>About</a>
            <a href="#services" className='hover:text-titles'>Services</a>
            <a href="#testimonials" className='hover:text-titles'>Testimonials</a>
            <a href="#footer" className='hover:text-titles'>Contact</a>
        </div>

        {
          mobile && (
            <div className="flex flex-col space-y-3 py-3 text-lg sm:hidden absolute top-12 bg-black bg-opacity-80 text-white right-0 p-4 rounded-l-lg shadow-2xl">
              <a href="#" className='hover:text-titles'>Home</a>
              <a href="#about" className='hover:text-titles'>About</a>
              <a href="#services" className='hover:text-titles'>Services</a>
              <a href="#testimonials" className='hover:text-titles'>Testimonials</a>
              <a href="#footer" className='hover:text-titles'>Contact</a>
            </div>

          )
        }

    </div>
  )
}

export default NavBar
