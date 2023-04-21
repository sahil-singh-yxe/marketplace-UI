import React, { useRef, useState, useEffect } from 'react';
import { Link, useLocation } from "react-router-dom";
import logoheader from '../../assets/images/logo/logo.png'
import logoheader2x from '../../assets/images/logo/logo@2x.png'
import logodark from '../../assets/images/logo/logo_dark.png'
import logodark2x from '../../assets/images/logo/logo_dark@2x.png'
import imgsun from '../../assets/images/icon/sun.png'
import avt from '../../assets/images/avatar/avt-2.jpg'
import DarkMode from './DarkMode';
import Web3 from 'web3';
import { AccountDetails } from '../../AccountDetails'
import Marketplace from '../../contracts/Marketplace.json';




const Header = () => {
    const { pathname } = useLocation();
    const { setMarketplace, marketplace, setAccount, account } = AccountDetails();
    console.log(account, 'account');
    console.log(marketplace, 'marketplace');
    const headerRef = useRef(null)
    useEffect(() => {
        window.addEventListener('scroll', isSticky);
        if(!account){
            connectToWallet();
        }
        return () => {
            window.removeEventListener('scroll', isSticky);
        };
    });
    const isSticky = (e) => {
        const header = document.querySelector('.js-header');
        const scrollTop = window.scrollY;
        scrollTop >= 300 ? header.classList.add('is-fixed') : header.classList.remove('is-fixed');
        scrollTop >= 400 ? header.classList.add('is-small') : header.classList.remove('is-small');
    };

    const menuLeft = useRef(null)
    const btnToggle = useRef(null)
    const btnSearch = useRef(null)

    const menuToggle = () => {
        menuLeft.current.classList.toggle('active');
        btnToggle.current.classList.toggle('active');
    }

    const searchBtn = () => {
        btnSearch.current.classList.toggle('active');
    }

    const [activeIndex, setActiveIndex] = useState(null);
    const handleOnClick = index => {
        setActiveIndex(index);
    };

    const connectToWallet = () => {
        if (!account) {
            const web3 = new Web3(window.ethereum);
            web3.eth.requestAccounts().then((a) => {
                web3.eth.net.getId().then((networkId) => {
                    setMarketplace(new web3.eth.Contract(Marketplace.abi, Marketplace.networks[networkId].address))
                    setAccount(a[0]);
                })
            });
        }


    }

    return (
        <header id="header_main" className="header_1 js-header" ref={headerRef}>
            <div className="themesflat-container">
                <div className="row">
                    <div className="col-md-12">
                        <div id="site-header-inner">
                            <div className="wrap-box flex">
                                <div id="site-logo" className="clearfix">
                                    <div id="site-logo-inner">
                                        <Link to="/" rel="home" className="main-logo">
                                            <img className='logo-dark' id="logo_header" src={logodark} srcSet={`${logodark2x}`} alt="nft-gaming" />
                                            <img className='logo-light' id="logo_header" src={logoheader} srcSet={`${logoheader2x}`} alt="nft-gaming" />
                                        </Link>
                                    </div>
                                </div>
                                <div className="mobile-button" ref={btnToggle} onClick={menuToggle}><span></span></div>
                                <div className="flat-search-btn flex">
                                    <div className="sc-btn-top mg-r-12 " id="site-header">
                                        <span onClick={connectToWallet} className="sc-button header-slider style style-1 wallet fl-button pri-1"><span>{account ? 'Wallet connected' : 'Wallet connect'}
                                        </span></span>
                                     
                                    </div>   
                                    <h6>{account}</h6>

                                    <div className="admin_active" id="header_admin">
                                        <div className="header_avatar">
                                            <div className="price">
                                                <span>2.45 <strong>ETH</strong> </span>
                                            </div>
                                            <img
                                                className="avatar"
                                                src={avt}
                                                alt="avatar"
                                            />
                                            <div className="avatar_popup mt-20">
                                                <div className="d-flex align-items-center copy-text justify-content-between">
                                                    <span> 13b9ebda035r178... </span>
                                                    <Link to="/" className="ml-2">
                                                        <i className="fal fa-copy"></i>
                                                    </Link>
                                                </div>
                                                <div className="d-flex align-items-center mt-10">
                                                    <img
                                                        className="coin"
                                                        src={imgsun}
                                                        alt="/"
                                                    />
                                                    <div className="info ml-10">
                                                        <p className="text-sm font-book text-gray-400">Balance</p>
                                                        <p className="w-full text-sm font-bold text-green-500">16.58 ETH</p>
                                                    </div>
                                                </div>
                                                <div className="hr"></div>
                                                <div className="links mt-20">
                                                    <Link to="#">
                                                        <i className="fab fa-accusoft"></i> <span> My items</span>
                                                    </Link>
                                                    <a className="mt-10" href="/edit-profile">
                                                        <i className="fas fa-pencil-alt"></i> <span> Edit Profile</span>
                                                    </a>
                                                    <a className="mt-10" href="/login" id="logout">
                                                        <i className="fal fa-sign-out"></i> <span> Logout</span>
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <DarkMode />
        </header>
    );
}

export default Header;
