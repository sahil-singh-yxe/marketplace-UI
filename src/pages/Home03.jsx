import React from 'react';
import Header from '../components/header/Header';
import Footer from '../components/footer/Footer';
import liveAuctionData from '../assets/fake-data/data-live-auction';
import heroSliderData from '../assets/fake-data/data-slider-3';
import Create from '../components/layouts/home-3/Create';
import LiveAuction from '../components/layouts/home-3/LiveAuction';
import Slider from '../components/slider/Slider';

const Home03 = () => {
    return (
        <div className='home-3'>
            <Header />
            <Slider data={heroSliderData} />
            <LiveAuction />
            <Footer />
        </div>
    );
}

export default Home03;
