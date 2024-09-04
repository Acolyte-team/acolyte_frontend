import React from 'react';
import SelectButton from '../selectbutton/SelectButton';
import meta from '../../assets/react.svg';  // Example path
import trust from '../../assets/react.svg'; // Example path
import other from '../../assets/react.svg'; // Example path

const Wallet = () => {
    const sample = [
        {
            img: meta,
            text: "Metamask"
        },
        {
            img: trust,
            text: "Trust Wallet"
        },
        {
            img: other,
            text: "Other Wallet"
        }
    ];

    return (
        <>
            {sample.map((item, index) => (
                <SelectButton key={index} img={item.img} text={item.text} />
            ))}
        </>
    );
}

export default Wallet;
