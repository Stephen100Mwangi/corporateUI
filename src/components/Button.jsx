/* eslint-disable no-unused-vars */
import React from 'react'
import PropTypes from 'prop-types'

const Button = ({color, text,p_color,t_color}) => {
  return (
    <button className={`bg-${color} hover:bg-${p_color} text-${t_color} z-50 text-center rounded-full px-9 py-3 flex items-center text-white font-medium max-md:min-w-fit justify-center hover:shadow-lg max-md:text-sm`}>
      {text}
    </button>
  )
}

Button.defaultProps = {
  color: "",
  text: "Hello",
  p_color: "#0B60B0",
  secondaryColor: "",
  t_color: ""
}

Button.propTypes = {
    color: PropTypes.string,
    text: PropTypes.string,
    p_color: PropTypes.string,
    secondaryColor: PropTypes.string,
    t_color: PropTypes.string
}



export default Button
