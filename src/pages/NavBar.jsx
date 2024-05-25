/* eslint-disable no-unused-vars */
import React from 'react'
import Logo from '../components/Logo'

const NavBar = () => {
  return (
    <div className='flex flex-row space-x-32 justify-start items-center mx-8 p-8 max-md:px-2 max-md:py-4 max-md:flex-col'>
        <div className=" flex items-center justify-center max-md:absolute max-md:left-">
          <Logo></Logo>
        </div>
        <div className="flex flex-row space-x-5 max-md:flex-col max-md:space-y-3 max-md:absolute">
            <a href="#" className='hover:text-titles'>Home</a>
            <a href="#about" className='hover:text-titles'>About</a>
            <a href="#services" className='hover:text-titles'>Services</a>
            <a href="#testimonials" className='hover:text-titles'>Testimonials</a>
            <a href="#footer" className='hover:text-titles'>Contact</a>
        </div>
    </div>
  )
}

export default NavBar
