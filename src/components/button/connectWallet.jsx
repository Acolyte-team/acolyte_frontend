import React, { useState } from "react";
import { SwisstronikPlugin } from '@swisstronik/web3-plugin-swisstronik';
import { MetamaskPlugin } from 'web3-metamask-plugin';
import Button from "./Button";
import CreateProfile from "../createprofile/CreateProfile";
import {Web3} from 'web3'

function ConnectWallet() {
    const [isConnected, setIsConnected] = useState(false);
    const [profile, setProfile] = useState(null);

    const web3 = new Web3(window.ethereum);
    web3.registerPlugin(new SwisstronikPlugin());
    web3.registerPlugin(new MetamaskPlugin());
  
    async function connectToSwisstronik() {
      console.log("calling fn")
        await web3.metamask.connectWallet();
        await web3.metamask.switchToSwisstronik();
    }
    
    const handleProfileSubmit = (profileData) => {
        setProfile(profileData);
        console.log("Profile Created:", profileData);
    };

    return (
        <div>
        {!isConnected ? (
            <Button width="20em" onClick={connectToSwisstronik}>
                Connect Wallet
            </Button>
        ) : (
            !profile ? (
                <CreateProfile onSubmit={handleProfileSubmit} />
            ) : (
                <div>
                    <h3>Profile Created</h3>
                    <p>Username: {profile.username}</p>
                    <p>Full Name: {profile.fullName}</p>
                    <p>Bio: {profile.bio}</p>
                </div>
            )
        )}
    </div>
    )
}

export default ConnectWallet;