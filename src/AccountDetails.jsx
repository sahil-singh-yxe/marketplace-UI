import React, { useEffect } from 'react'
import Web3 from 'web3';
import Marketplace from './contracts/Marketplace.json';

export const AccountDetails = () => {
    const [marketplace, setMarketplace] = React.useState(null);
    const [account, setAccount] = React.useState(null);

    useEffect(()=>{
        const web3 = new Web3(window.ethereum);
        web3.eth.requestAccounts().then((a) => {
            web3.eth.net.getId().then((networkId) => {
                setMarketplace(new web3.eth.Contract(Marketplace.abi, Marketplace.networks[networkId].address))
                setAccount(a[0]);
            })
        });
    }, [])
    return({ setMarketplace, marketplace, setAccount, account })
}