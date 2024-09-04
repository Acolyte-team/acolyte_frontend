import React, { ReactNode } from 'react';
import PropTypes from 'prop-types';
import styles from './Button.module.css';

interface ButtonProps {
    width?: string;
    children?: ReactNode;
    onClick?: () => void;
    name?: string;
    className?: string;
}

const Button: React.FC<ButtonProps> = ({ width, children, onClick, name, className }) => {
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

Button.propTypes = {
    children: PropTypes.node,
    width: PropTypes.string, // Additional class if needed
    onClick: PropTypes.func,
    name: PropTypes.string,
    className: PropTypes.string,
};

// Default props
Button.defaultProps = {
    children: null,
    onClick: () => { },
    name: '',
    className: '',
};

export default Button;
