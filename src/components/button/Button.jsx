import React, { ReactNode } from 'react';
import PropTypes from 'prop-types';
import styles from './button.module.css';



const Button = ({ width, children, onClick, name, className }) => {
    return (
        <button
            onClick={onClick}
            type="submit"
            className={`${styles.button} ${width} ${className}`}
        >
            {children || name}
        </button>
    );
};

export default Button;
