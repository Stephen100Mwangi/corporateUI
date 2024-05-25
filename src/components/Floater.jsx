/* eslint-disable no-unused-vars */
import React from 'react'
import PropTypes from 'prop-types'

const Floater = ({icon,text}) => {
  return (
    <div className='w-fit min-w-[200px] bg-black bg-opacity-30 flex space-x-2 cursor-pointer text-white items-center justify-start px-3 py-2 rounded-l-lg'>
        <div>{icon}</div>
        <p>{text}</p>
    </div>
  )
}

Floater.defaultProps = {
  icon: '',
  text: ''
}

Floater.propTypes = {
  icon: PropTypes.element,
  text: PropTypes.string
}

Floater

export default Floater
