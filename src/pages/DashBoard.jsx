/* eslint-disable no-unused-vars */
// /* eslint-disable no-unused-vars */
// // /* eslint-disable no-unused-vars */
// // import React from 'react'
// // import Customers from '../components/Customers'
// // import { TbLetterK } from "react-icons/tb";
// // import { FaPlus } from "react-icons/fa";
// // import { useEffect } from 'react';

// // let valDisplayed = Customers.defaultProps.count;
// // let interval = 5000;

// // let startValue = 0;
// // let endValue = parseInt(Customers.propTypes.dataVal);

// // let duration = Math.floor(interval / endValue);
// // let counter = (()=>{
// //     startValue += 1;
// //     Customers.propTypes.count = startValue;

// //     if(startValue === endValue){
// //         clearInterval(counter)
// //     }

// // }) 


// // const DashBoard = () => {
// //     useEffect(()=>{
// //         {
    
    
            
// //         }
// //         counter();
        
// //         })
    
   
    

// //   return (
// //     <div className='my-24 mx-8 flex justify-end px-4 py-16 rounded-2xl bg-titles text-white'>
// //         <Customers text="Happy Clients" count={valDisplayed} dataVal="120" icon={<TbLetterK />}></Customers>
// //         <Customers text="Various Services" count={valDisplayed} dataVal="13" icon={<FaPlus />}></Customers>
// //         <Customers text="Complete Project" count={valDisplayed} dataVal="20" icon={<FaPlus />}></Customers>
// //         <Customers text="Years Experience" count={valDisplayed} dataVal="10" icon={<FaPlus />}></Customers>
// //         <span data-val="400"><small className='floorCount'>000</small></span>
      
// //     </div>
// //   )
// // }

// // export default DashBoard


// import React, { useState, useEffect } from 'react';
// import Customers from '../components/Customers';
// import { TbLetterK } from "react-icons/tb";
// import { FaPlus } from "react-icons/fa";

// const DashBoard = () => {
//   const [counters, setCounters] = useState({
//     happyClients: 0,
//     variousServices: 0,
//     completeProjects: 0,
//     yearsExperience: 0
//   });
//   const [intervalTime] = useState(50); // Interval time in milliseconds

//   useEffect(() => {
//     const interval = setInterval(() => {
//       setCounters(prevCounters => ({
//         happyClients: prevCounters.happyClients + 1,
//         variousServices: prevCounters.variousServices + 1,
//         completeProjects: prevCounters.completeProjects + 1,
//         yearsExperience: prevCounters.yearsExperience + 1
//       }));
//     }, intervalTime);

//     return () => clearInterval(interval); // Cleanup function to clear interval
//   }, [intervalTime]); // Runs on component mount and when intervalTime changes

//   return (
//     <div className='my-24 mx-8 flex justify-end px-4 py-16 rounded-2xl bg-titles text-white'>
//       <Customers text="Happy Clients" count={counters.happyClients} dataVal="120" icon={<TbLetterK />} />
//       <Customers text="Various Services" count={counters.variousServices} dataVal="13" icon={<FaPlus />} />
//       <Customers text="Complete Project" count={counters.completeProjects} dataVal="20" icon={<FaPlus />} />
//       <Customers text="Years Experience" count={counters.yearsExperience} dataVal="10" icon={<FaPlus />} />
//       <span data-val="400"><small className='floorCount'>000</small></span>
//     </div>
//   );
// };

// export default DashBoard;


import React, { useState, useEffect } from 'react';
import Customers from '../components/Customers';
import { TbLetterK } from "react-icons/tb";
import { FaPlus } from "react-icons/fa";

const DashBoard = () => {
  const [counters, setCounters] = useState({
    happyClients: 0,
    variousServices: 0,
    completeProjects: 0,
    yearsExperience: 0
  });
  const [intervalTime] = useState(50); // Interval time in milliseconds

  useEffect(() => {
    const interval = setInterval(() => {
      setCounters(prevCounters => ({
        happyClients: prevCounters.happyClients < 120 ? prevCounters.happyClients + 1 : 120,
        variousServices: prevCounters.variousServices < 13 ? prevCounters.variousServices + 1 : 13,
        completeProjects: prevCounters.completeProjects < 20 ? prevCounters.completeProjects + 1 : 20,
        yearsExperience: prevCounters.yearsExperience < 10 ? prevCounters.yearsExperience + 1 : 10
      }));
    }, intervalTime);

    return () => clearInterval(interval); // Cleanup function to clear interval
  }, [intervalTime]); // Runs on component mount and when intervalTime changes

  return (
    <div className='my-24 mx-8 flex flex-row justify-end px-4 py-16 rounded-2xl bg-titles text-white max-md:flex-col max-md:space-y-10 max-md:mx-4'>
      <Customers text="Happy Clients" count={counters.happyClients} dataVal={120} icon={<TbLetterK />} />
      <Customers text="Various Services" count={counters.variousServices} dataVal={13} icon={<FaPlus />} />
      <Customers text="Complete Project" count={counters.completeProjects} dataVal={20} icon={<FaPlus />} />
      <Customers text="Years Experience" count={counters.yearsExperience} dataVal={10} icon={<FaPlus />} />
    </div>
  );
};

export default DashBoard;
