/* eslint-disable no-unused-vars */
import React from 'react'
import data from '../components/Data'

const Testimonials = () => {
  console.log(data[0])
  return (
    <div id='testimonials' className="flex space-x-10 justify-center overflow-clip my-24">
      {
        data.map((item) => (<div key={`${item.name}+1`} className="flex flex-col space-y-5 p-3 rounded-lg hover:bg-titles bg-slate-100 shadow-xl px-3 py-5 hover:text-white min-w-[240px]">
          <div><p>{item.message}</p></div>
          <div className ="flex flex-row space-x-5">
            <div className="rounded-full size-16 shadow-xl">
              <img src={item.photo} className="object-cover size-16 rounded-full " />
            </div>
            <div className="flex flex-col space-y-3">
              <p className="font-medium">{item.name}</p>
              <p className="font-thin">{item.position}</p>
            </div>
          </div>
        </div>))
      }
      
    </div>
  )
}

export default Testimonials
