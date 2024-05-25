/* eslint-disable no-unused-vars */
import React from 'react'
import Card from '../components/Card'
import Badge from '../components/Badge'
import Button from '../components/Button'

import { BsBellFill } from "react-icons/bs";
import { BsStack } from "react-icons/bs";
import { RiCustomerService2Line } from "react-icons/ri";
import { FaLaptopCode } from "react-icons/fa";
import { AiFillProduct } from "react-icons/ai";
import { FaArtstation } from "react-icons/fa";

const Services = () => {
  return (
    <div id='services' className='flex space-x-5 mx-8 my-24 rounded-2xl bg-slate-100 py-12'>
        <div className='border-r-[1px] border-slate-500 pr-10 pl-32 w-2/5 space-y-5'>
            <Card text="Functional" title="Expected Features" description="Reduction operation costs for the whole product team which it creates"></Card>
            <Button text="View Services" className="bg-titles hover:bg-hover"></Button>
        </div>
        <div className='grid grid-cols-3 w-1/2 pl-32 pr-0 gap-16'>
            <Badge icon={<AiFillProduct></AiFillProduct>} text="Product Management"></Badge>
            <Badge icon={<FaLaptopCode></FaLaptopCode>} text="Web & Mobile Development"></Badge>
            <Badge icon={<RiCustomerService2Line></RiCustomerService2Line>} text="Customer Support"></Badge>
            <Badge icon={<BsBellFill></BsBellFill>} text="Marketing and Communication"></Badge>
            <Badge icon={<BsStack></BsStack>} text="Business Development"></Badge>
            <Badge icon={<FaArtstation></FaArtstation>} text="Design & Creatives"></Badge>
        </div>
      
    </div>
  )
}

export default Services
