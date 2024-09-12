/* eslint-disable no-unused-vars */
import React from 'react'
import PropTypes from 'prop-types'

const Customers = ({count,icon,text,dataVal}) => {
  return (
    <div className='flex justify-center items-center space-x-2'>
        <p id='count' className='font-bold text-white text-8xl max-md:text-6xl'>{count}</p>
        <div className='font-semibold text-5xl max-md:text-3xl text-white'>{icon}</div>
        <p className='font-medium text-base text-white max-md:text-sm'>{text}</p>
    </div>
  )
}

Customers.defaultProps = {
    count: "00",
    icon: "",
    text: "",
    dataVal: ""
}

Customers.propTypes = {
    count: PropTypes.string,
    icon: PropTypes.element,
    text: PropTypes.string,
    dataVal: PropTypes.string
}

export default Customers
