/* eslint-disable no-unused-vars */
import React from 'react'
import Card from '../components/Card'
import Badge from '../components/Badge'

import { FaLaptopCode } from "react-icons/fa";
import { AiFillProduct } from "react-icons/ai";



const AboutUs = () => {
  return (
    <div id='about' className='flex flex-row mx-8 my-24 max-md:flex-col max-md:mx-4 max-md:space-y-5'>
        <div className="w-1/2 relative max-md:w-full">
            <img src="./build.png" alt=""  className='scale-125 absolute -left-10 -top-10 max-md:scale-125 max-md:relative'/>
        </div>
        <div className="w-1/2 flex flex-col space-y-10 max-md:w-full">
            <Card text="About Our Company Group" title="Innovative Buildings with New Material" description="But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system."></Card>
            .<div className='flex justify-start space-x-10 px-10 max-md:px-2'>
                <Badge icon={<AiFillProduct></AiFillProduct>} text="Product Management" description="There are many variations passages ipsum available but the majority"></Badge>
                <Badge icon={<FaLaptopCode></FaLaptopCode>} text="Web & Mobile Development" description="There are many variations passages ipsum available but the majority"></Badge>
            </div>
        </div>
      
    </div>
  )
}

export default AboutUs
