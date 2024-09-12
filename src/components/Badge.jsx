/* eslint-disable no-unused-vars */
import React from 'react'
import PropTypes from 'prop-types'

const Badge = ({icon,text,description}) => {
  return (
    <div className='flex flex-col space-y-5 justify-center items-center'>
        <div className='flex items-center size-[72px] rounded-full justify-center hover:bg-titles text-3xl hover:text-white bg-slate-400'>{icon}</div>
        <p className='font-medium text-center leading-relaxed hover:font-bold text-lg'>{text}</p>
        <p className='font-light leading-relaxed text-[16px]'>{description}</p>
    </div>
  )
}

Badge.defaultProps = {
    icon:"",
    text:"",
    description:""
}

Badge.propTypes = {
    icon: PropTypes.element,
    text: PropTypes.string,
    description: PropTypes.string
}

export default Badge
