import React, { ChangeEvent } from 'react';
import PropTypes from 'prop-types';
import styles from './Input.module.css';


const Input = ({ width, placeholder, onChange, value, type }) => {
    return (
        <div className={styles.inputContainer}>
            <input
                type={type || "text"}
                placeholder={placeholder}
                value={value}
                onChange={onChange}
                className={`${styles.inputField} ${width}`}
            />
        </div>
    );
};

// Define prop types for the component
Input.propTypes = {
    width: PropTypes.string, // Additional class if needed
    placeholder: PropTypes.string,
    onChange: PropTypes.func,
    value: PropTypes.string,
    type: PropTypes.string,
};

// Default props
Input.defaultProps = {
    placeholder: 'Enter text...',
    onChange: () => { },
    value: '',
    type: 'text',
};

export default Input;
