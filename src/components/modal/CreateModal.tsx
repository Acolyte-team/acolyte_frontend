// import Input from '../input/Input'
// import Button from "../button/Button"


// const CreateModal: React.FC = () => {
//     return (
//         <div>

//             <div id="page1">
//                 <div id="title"> Connect Wallet</div>
//                 <div id='body'>
//                     <div>
//                         <img src="" />
//                         <span>create picture</span>
//                     </div>
//                     <div>
//                         <input />
//                         <input />
//                     </div>
//                     <Input />
//                     <textarea></textarea>
//                     <Button />
//                 </div>
//                 <div id='foot'>lorwfhbvjbkfvchbjKLVKbvjcjkbm;vfbmklnfgvcgjbhvn blmkvc nkbjcvkj</div>
//             </div>




//             <div id="page2">
//                 <div id="title"> Connect Wallet</div>
//                 <div id='body'>
//                     <div>
//                         <img src="" />
//                     </div>
//                     <h3>awerf23@sweet.vercel</h3>
//                     <p>creating profile</p>
//                     <h6>c ghjksldkfvghjdknvfjkbfkvjnkbfvkjbkhejbhjkbjej</h6>
//                 </div>
//                 <div id='foot'>lorwfhbvjbkfvchbjKLVKbvjcjkbm;vfbmklnfgvcgjbhvn blmkvc nkbjcvkj</div>
//             </div>


//             <div id="page3">
//                 <div id="title"> Connect Wallet</div>
//                 <div id='body'>
//                     <p>rofile created successfully</p>
//                     <div>
//                         <img src="" />
//                     </div>
//                     <h3>awerf23@sweet.vercel</h3>
//                    <Button>Continue</Button>
//                 </div>
                
//                 </div>

//         </div>
//     )
// }

// export default CreateModal




import React, { useState } from 'react';
import Input from '../input/Input';
import Button from '../button/Button';
import styles from './createmodal.module.css';

const CreateModal: React.FC = () => {
    const [currentPage, setCurrentPage] = useState(1);

    const nextPage = () => {
        setCurrentPage((prev) => prev + 1);
    };

    return (
        <div className={styles.modalContainer}>
            {currentPage === 1 && (
                <div id="page1" className={styles.page}>
                    <div id="title" className={styles.title}>Create your profile</div>
                    <div id='body' className={styles.body}>
                        <div className={styles.imageUpload}>
                            <img src="" alt="Profile" />
                            <span>Update Picture</span>
                        </div>
                        <div className={styles.inputs}>
                            <Input placeholder="Username" />
                            <Input placeholder="Full name" />
                        </div>
                        <Input placeholder="Bio" />
                        <textarea className={styles.textarea} placeholder="Say something about yourself..."></textarea>
                        <Button onClick={nextPage}>Continue</Button>
                    </div>
                    <div id='foot' className={styles.footer}>
                        By connecting your wallet, you agree to our Terms of Service and Privacy Policy.
                    </div>
                </div>
            )}

            {currentPage === 2 && (
                <div id="page2" className={styles.page}>
                    <div id="title" className={styles.title}>Connect Wallet</div>
                    <div id='body' className={styles.body}>
                        <div className={styles.imageDisplay}>
                            <img src="" alt="Profile" />
                        </div>
                        <h3>awerf23@sweet.vercel</h3>
                        <p>Creating Profile...</p>
                        <h6>Your profile is being created. This may take a few seconds.</h6>
                    </div>
                    <div id='foot' className={styles.footer}>
                        Please do not refresh the page.
                    </div>
                </div>
            )}

            {currentPage === 3 && (
                <div id="page3" className={styles.page}>
                    <div id="title" className={styles.title}>Profile Created</div>
                    <div id='body' className={styles.body}>
                        <p>Profile created successfully!</p>
                        <div className={styles.imageDisplay}>
                            <img src="" alt="Profile" />
                        </div>
                        <h3>awerf23@sweet.vercel</h3>
                        <Button>Continue</Button>
                    </div>
                </div>
            )}
        </div>
    );
}

export default CreateModal;
