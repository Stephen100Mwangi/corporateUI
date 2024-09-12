/* eslint-disable no-unused-vars */
import React from 'react'
import PropTypes from 'prop-types'

const SpecialButton = ({icon,text}) => {
  return (
    <div className='z-50 flex space-x-5 items-center justify-center'>
        <div className="w-10 h-10 rounded-full bg-hover flex text-white items-center justify-center hover:bg-titles">{icon}</div>
        <p>{text}</p>
      
    </div>
  )
}

SpecialButton.propTypes = {
    text: PropTypes.string,
    icon: PropTypes.element,
}

SpecialButton.defaultProps = {
    text: "",
    icon: ""
}

export default SpecialButton
