// import React from 'react';
// import { Link } from 'react-router-dom';
// import styles from './navbar.module.css';


// const Navbar: React.FC = () => {
//     return (
//         <>
//             <div className={styles.navbar}>
//                 <Link to='/'>
//                     <h2 className={styles.brandName}>Acolyte</h2>
//                 </Link>
//                 <div className={styles.connectbutton}>
//                     <img
//                         src="../../assets/metamask-icon.svg"
//                         alt="Conn"
//                         style={{ marginRight: '10px' }}
//                     />
//                     Connect Metamask
//                 </div>
//             </div>
//         </>
//     );
// };

// export default Navbar;





import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import styles from './navbar.module.css';
import Button from '../button/Button';
import Web3 from 'web3';
import ConnectModal from '../modal/ConnectModal';
import { SwisstronikPlugin } from '@swisstronik/web3-plugin-swisstronik';
import { MetamaskPlugin } from 'web3-metamask-plugin';

const Navbar = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const toggleModal = () => {
        setIsModalOpen(!isModalOpen);
    };

    const web3 = new Web3(window.ethereum);
    web3.registerPlugin(new SwisstronikPlugin());
    web3.registerPlugin(new MetamaskPlugin());

    async function connectToSwisstronik() {
        await web3.metamask.switchToSwissTronik;
    }

    return (
        <>
            <div className={styles.navbar}>
                <Link to='/'>
                    <h2 className={styles.brandName}>Acolyte</h2>
                </Link>
                <div  >

                    <Button className={styles.connectbutton} width="20em" onClick={toggleModal}>
                        <img
                            src="../../assets/metamask-icon.svg"
                            alt="Connect Metamask"

                        />Connect Metamask</Button>
                </div>
            </div>
            {isModalOpen && <ConnectModal onClose={toggleModal} />}
        </>
    );
};

export default Navbar;
