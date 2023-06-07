import React from 'react'
import PropTypes from 'prop-types';

const Input = ({id, name, type, action, value, classes}) => {
    return (
        <input
            id={id}
            name={name}
            type={type}
            onChange={event => action(event.target.value)}
            value={value}
            className={classes}
        />
    )
};

Input.propTypes = {
    id: PropTypes.string,
    name: PropTypes.string,
    type: PropTypes.string,
    action: PropTypes.func,
    value: PropTypes.string,
    classes: PropTypes.string,
};
Input.defaultProps = {
    id: '',
    name: '',
    type: '',
    action: () => {},
    value: '',
    classes: '',
};
export default Input;