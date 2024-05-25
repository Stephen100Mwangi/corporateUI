/* eslint-disable no-unused-vars */
import React from 'react'
import Card from '../components/Card'
import Button from '../components/Button'
import SpecialButton from '../components/SpecialButton';
import { FaPlay } from "react-icons/fa6";
import { GrAppsRounded } from "react-icons/gr";
import { HiOutlineShoppingBag } from "react-icons/hi2";
import { TbLogout } from "react-icons/tb";
import Floater from '../components/Floater';
import { motion } from 'framer-motion'

const Hero = () => {
  return (
    <div className='flex justify-between mx-8 my-24 relative mr-0'>
        <div className="z-50 floaters flex flex-col space-y-3 absolute right-0 top-[10%] element">
            <Floater icon={<GrAppsRounded />} text="Browse Demos"></Floater>
            <Floater icon={<HiOutlineShoppingBag />} text="Buy Now"></Floater>
            <Floater icon={<TbLogout />} text="Export Section"></Floater>
        </div>
        <div className="w-1/2 flex flex-col space-y-5 pr-1">
            <Card text="We Are Proud Of The Works We’ve Done." title="Does More Then Ever Platform To Achieve Goal Stages." description="But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system."></Card>
            <div className="flex w-full justify-between">
              <Button text="Get Started" color="hover" p_color="titles" t_color="white"></Button>
              <SpecialButton text="Watch The Video" icon={<FaPlay/>}></SpecialButton>
            </div>
        </div>
        <div className='w-1/2 relative overflow-x-clip'>
          <motion.img src="src/assets/hero.png"
            className='absolute -right-20 -top-36 scale-150'
              initial={{
                rotate:"0deg",
                position:"absolute",
                right:"-right-20",
                marginTop:"0",
                marginRight:"0",
                scale:"1.5"

              }}

              animate={{
                rotate:"360deg",
              }}

              // Timing
              transition={
                {duration:1.5}
              }

              exit={{
                rotate:"0deg",
                position:"absolute",
                marginTop:"-200px",
                marginRight:"0",
                scale:"1.5"
              }}

             
              />
        </div>


      
    </div>
  )
}

export default Hero
