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
import Button from '../Button/Button';
import ConnectModal from '../modal/ConnectModal';

const Navbar: React.FC = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const toggleModal = () => {
        setIsModalOpen(!isModalOpen);
    };

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
                            alt="Conn"

                        />Connect Metamask</Button>
                </div>
            </div>
            {isModalOpen && <ConnectModal onClose={toggleModal} />}
        </>
    );
};

export default Navbar;
