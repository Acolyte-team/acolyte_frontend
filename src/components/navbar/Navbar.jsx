import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import styles from './navbar.module.css';
import Button from '../button/Button';
import {Web3} from 'web3';
import ConnectWallet from '../button/connectWallet';


const Navbar = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [isWalletConnected, setIsWalletConnected] = useState(false);

    const toggleModal = () => {
        setIsModalOpen(!isModalOpen);
    };


    return (
        <>
            <div className={styles.navbar}>
                <Link to='/'>
                    <h2 className={styles.brandName}>Acolyte</h2>
                </Link>
                <ConnectWallet />
            </div>
            {/* {isModalOpen && <ConnectModal onClose={toggleModal} />} */}
        </>
    );
};

export default Navbar;
