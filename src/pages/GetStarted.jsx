/* eslint-disable no-unused-vars */
import React from 'react'
import Card from '../components/Card'
import Button from '../components/Button'
import { motion, useScroll } from "framer-motion"

const GetStarted = () => {
  const scrollY = useScroll()
  return (
    <div className='flex mx-8 my-24 max-md:flex-col max-md:space-y-56 max-md:mx-4'>
        <div className="w-1/2 flex flex-col space-y-20 max-md:w-full">
            <Card text="About Us" title="An Exceptionally Unique Experience Tailored To You" description="But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system."></Card>
            <div className="flex justify-start space-x-20 items-center max-md:w-full max-md:space-x-5">
                <Button text="Get Started" color="titles" p_color="hover" ></Button>
                <Button text="View More" color="hover" p_color="titles" t_color="white" className="bg-hover"></Button>
            </div>
        </div>
        <div className="w-1/2 relative max-md:w-full">
            <motion.img src="./about.png" alt="" 
              className='absolute -top-28 max-md:relative max-md:scale-25'

              initial ={{
                position: "absolute",
                marginTop: "-112px",
                x:0
              }}
              animate={{ x: -20 }}
              transition={{ delay: 1 }}

              exit={{
                position: "absolute",
                marginTop: "-112px",
                x:"-250px"

              }}

                
              />
        </div>
      
    </div>
  )
}

export default GetStarted
