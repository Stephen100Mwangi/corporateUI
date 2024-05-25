/* eslint-disable no-unused-vars */
import React from 'react'
import { BiLogoLinkedin } from "react-icons/bi";
import { BiLogoInstagram } from "react-icons/bi";
import { RiFacebookFill } from "react-icons/ri";
import { BsTwitter } from "react-icons/bs";
import { AiOutlineCopyrightCircle } from "react-icons/ai";
import Logo from '../components/Logo'

const Footer = () => {
  return (
    <div id='footer' className='flex flex-col space-y-10 mx-8 my-24 mb-8 max-md:mx-4'>
        <div className="flex flex-row justify-between pb-20 border border-x-0 border-t-0 border-b-black max-md:flex-col max-md:space-y-2">
            <Logo />
            <div className='space-y-3'>
                <h1 className="font-bold text-lg">Visit Link</h1>
                <p className=' font-light text-base'>Visit Link</p>
                <p className=' font-light text-base'>Privacy</p>
            </div>
            <div className='space-y-3'>
                <h1 className="font-bold text-lg">Company</h1>
                <p className=' font-light text-base'>Home</p>
                <p className=' font-light text-base'>About Us</p>
                <p className=' font-light text-base'>Contact Us</p>
            </div>
            <div className='flex flex-col space-y-3'>
                <h1 className="font-bold text-lg">Contact</h1>
                <a href="mailto:mwangiwahome70@gmal.com" className=' font-light text-base'>mwangiwahome70@gmal.com</a>
                <a href="tel:+254758725032" className="font-light text-base">+254758725032</a>
            </div>
            <div className='space-y-3'>
                <h1 className="font-bold text-lg">Address</h1>
                <p className=' font-light text-base'>Nairobi, Kenya</p>
                <p className=' font-light text-base'>P O.BOX 890 -8923 Nairobi</p>
            </div>
        </div>
        <div className="flex flex-row justify-between max-md:flex-col max-md:space-y-5 max-md:justify-center">
            <div className="copyright w-1/2 flex justify-center items-center max-md:w-full max-md:leading-loose">
                <div><AiOutlineCopyrightCircle /></div>
                <p>2024 App Landing - Phlox Elementary WordPress Theme . All rights reserved.</p>
            </div>
            <div className="socials flex space-x-3">
                <BiLogoLinkedin />
                <BiLogoInstagram />
                <RiFacebookFill />
                <BsTwitter />
            </div>
        </div>
      
    </div>
  )
}

export default Footer
