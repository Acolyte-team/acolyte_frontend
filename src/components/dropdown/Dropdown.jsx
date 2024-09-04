import React from 'react';
import styles from './dropdown.module.css';


const Dropdown = ({ menuItems, name = 'Select an option', width }) => {
    return (
        <div className={`${styles.dropdownContainer} ${width}`}>
            <select className={styles.selectBox}>
                <option disabled value="">
                    {name}
                </option>
                {menuItems.map((item, index) => (
                    <option key={index} value={item.value}>
                        {item.text}
                    </option>
                ))}
            </select>
        </div>
    );
};

export default Dropdown;
