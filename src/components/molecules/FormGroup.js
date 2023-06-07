import React from 'react'
import PropTypes from 'prop-types';
import Input from './../atoms/Input';

const FormGroup = ({ id, name, type, action, value, classes, label }) => {
    return (
        <>
            <label htmlFor={name} className="block text-sm font-medium leading-6 text-gray-900">
                {label}
            </label>
            <div className="mt-2">
                <Input
                    id={id}
                    name={name}
                    type={type}
                    action={action}
                    value={value}
                    classes={classes}
                />
            </div>
        </>

    )
};

FormGroup.propTypes = {
    id: PropTypes.string,
    name: PropTypes.string,
    type: PropTypes.string,
    action: PropTypes.func,
    value: PropTypes.string,
    classes: PropTypes.string,
    label: PropTypes.string
};
FormGroup.defaultProps = {
    id: '',
    name: '',
    type: '',
    action: () => { },
    value: '',
    classes: '',
    label: ''
};
export default FormGroup;