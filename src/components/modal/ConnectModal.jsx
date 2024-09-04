import React from 'react';
import Wallet from '../selectbutton/Wallet';
import styles from './connectModal.module.css';


const ConnectModal = ({ onClose }) => {
    return (
        <div className={styles.modalBackdrop} onClick={onClose}>
            <div className={styles.modalContent} onClick={(e) => e.stopPropagation()}>
                {/* Close Button */}
                <button className={styles.closeButton} onClick={onClose}>
                    &times;
                </button>

                <div id="title" className={styles.modalTitle}>Connect Wallet</div>
                <div id='body' className={styles.modalBody}>
                    <Wallet />
                </div>
                <div id='foot' className={styles.modalFooter}>
                    By connecting your wallet, you agree to our Terms of Service and Privacy Policy.
                </div>
            </div>
        </div>
    );
};

export default ConnectModal;
