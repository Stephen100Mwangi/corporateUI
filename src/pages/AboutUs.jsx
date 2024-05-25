/* eslint-disable no-unused-vars */
import React from 'react'
import Card from '../components/Card'
import Badge from '../components/Badge'

import { FaLaptopCode } from "react-icons/fa";
import { AiFillProduct } from "react-icons/ai";



const AboutUs = () => {
  return (
    <div id='about' className='flex mx-8 my-24'>
        <div className="w-1/2 relative">
            <img src="src/assets/build.png" alt=""  className='scale-125 absolute -left-10 -top-10'/>
        </div>
        <div className="w-1/2 flex flex-col space-y-10">
            <Card text="About Our Company Group" title="Innovative Buildings with New Material" description="But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system."></Card>
            .<div className='flex justify-start space-x-10 px-10'>
                <Badge icon={<AiFillProduct></AiFillProduct>} text="Product Management" description="There are many variations passages ipsum available but the majority"></Badge>
                <Badge icon={<FaLaptopCode></FaLaptopCode>} text="Web & Mobile Development" description="There are many variations passages ipsum available but the majority"></Badge>
            </div>
        </div>
      
    </div>
  )
}

export default AboutUs
