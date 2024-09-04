import React from 'react';
import { QRCodeSVG } from 'qrcode.react';
import styles from './home.module.css';

const Home: React.FC = () => {

    const qrValue = "https://your-website-link.com";

    return (
        <>


            <div className={styles.main}>

                <div className={styles.card}>
                    <h1>Social Interaction Made Fun</h1>
                    <div className={styles.text}>
                        <div className={styles.qrContainer}>
                        <QRCodeSVG value={qrValue} size={128} />
                        <div className={styles.instructions}>
                            Scan QR code and Login to Acolyte

                            <button className={styles.connectButton}>
                                <img src="/path/to/your/wallet-icon.png" alt="Wallet Icon" />
                                Connect Wallet
                            </button>
                        </div>
                        </div>
                    </div>
                </div>
                <div className={styles.card2}>

                </div>

            </div>


        </>
    );
};

export default Home;
