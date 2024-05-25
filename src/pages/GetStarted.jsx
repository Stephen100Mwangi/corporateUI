/* eslint-disable no-unused-vars */
import React from 'react'
import Card from '../components/Card'
import Button from '../components/Button'
import { motion, useScroll } from "framer-motion"

const GetStarted = () => {
  const scrollY = useScroll()
  return (
    <div className='flex mx-8 my-24'>
        <div className="w-1/2 flex flex-col space-y-20">
            <Card text="About Us" title="An Exceptionally Unique Experience Tailored To You" description="But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system."></Card>
            <div className="flex justify-start space-x-20 items-center">
                <Button text="Get Started" color="titles" p_color="hover" ></Button>
                <Button text="View More" color="hover" p_color="titles" t_color="white" className="bg-hover"></Button>
            </div>
            
        </div>
        <div className="w-1/2 relative">
            <motion.img src="src/assets/about.png" alt="" 
              className='absolute -top-28'
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
