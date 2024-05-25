/* eslint-disable no-unused-vars */
import React from 'react'
import PropTypes from 'prop-types'

const Card = ({text,title,description}) => {
  return (
    <div className='flex flex-col space-y-5'>
        <p className='text-lg font-medium text-titles'>{text}</p>
        <h1 className='text-6xl font-bold leading-tight'>{title}</h1>
        <p className='text-lg font-light'>{description}</p>
      
    </div>
  )
}

Card.defaultProps = {
  text: "",
  title: "",
  description: ""
}

Card.propTypes = {
    text: PropTypes.string,
    title: PropTypes.string,
    description: PropTypes.string
}

export default Card
