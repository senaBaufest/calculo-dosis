import React from 'react'
import PropTypes from 'prop-types'

const Button = ({type, classes, action, text}) => {
  return (
    <button 
        type={type} 
        onClick={action} 
        className={classes}
    >
        {text}
    </button>
  )
};

Button.propTypes = {
    type: PropTypes.string.isRequired,
    classes: PropTypes.string,
    action: PropTypes.func,
    text: PropTypes.string
    
};
Button.defaultProps = {
    type: 'Button',
    classes: '',
    action: () => {
        // handleClose function here
    },
    text: 'Button'
};

export default Button;