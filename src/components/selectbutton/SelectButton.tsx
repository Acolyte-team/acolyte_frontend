import React from 'react';
import styles from './SelectButton.module.css';

interface SelectButtonProps {
    img: string;
    text: string;
}

const SelectButton: React.FC<SelectButtonProps> = ({ img, text }) => {
    return (
        <div className={styles.selectButton}>
            <img src={img} alt={text} className={styles.walletImage} />
            <h2 className={styles.walletText}>{text}</h2>
            <span className={styles.walletStatus}></span>
        </div>
    );
}

export default SelectButton;
