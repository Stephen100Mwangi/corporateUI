/* eslint-disable no-unused-vars */
import React from 'react'
import NavBar from './pages/NavBar'
import Hero from './pages/Hero'
import Services from './pages/Services'
import AboutUs from './pages/AboutUs'
import GetStarted from './pages/GetStarted'
import Testimonials from './pages/Testimonials'
import Footer from './pages/Footer'
import DashBoard from './pages/DashBoard'


const App = () => {
  return (
    <div className='bg-overall flex flex-col'>
      <NavBar />
      <Hero />
      <Services />
      <AboutUs />
      <GetStarted />
      <DashBoard />
      <Testimonials />
      <Footer></Footer>
      
    </div>
  )
}

export default App
