import React from 'react';
import { QRCodeSVG } from 'qrcode.react';
import styles from './home.module.css';
import ConnectWallet from '../../components/button/connectWallet';

const Home = () => {

    const qrValue = "https://your-website-link.com";

    return (
        <>


            <div className={styles.main}>

                <h1>Social Interaction Made Fun</h1>
                <div className={styles.text}>
                    <div className={styles.qrContainer}>
                        {/* <QRCodeSVG value={qrValue} size={128} /> */}
                        {/* <div className={styles.instructions}>
                            Scan QR code and Login to Acolyte */}


                        <ConnectWallet />
                    </div>
                </div>
            </div>


        </>
    );
};

export default Home;
