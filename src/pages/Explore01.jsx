import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom'
import Header from '../components/header/Header';
import Footer from '../components/footer/Footer';
import TodayPicks from '../components/layouts/explore-01/TodayPicks'
import { AccountDetails } from '../AccountDetails'

const Explore01 = () => {
    const { marketplace, account } = AccountDetails()
    const [data, setData] = useState([])
    useEffect(async()=>{
        const res = await marketplace.methods.getAllItems().call()
        if(res){
            setData(res)
        }
    }, [marketplace, account])
    return (
        <div>
            <Header />
            <section className="flat-title-page inner">
                <div className="overlay"></div>
                <div className="themesflat-container">
                    <div className="row">
                        <div className="col-md-12">
                            <div className="page-title-heading mg-bt-12">
                                <h1 className="heading text-center">Explore 1</h1>
                            </div>
                            <div className="breadcrumbs style2">
                                <ul>
                                    <li><Link to="/">Home</Link></li>
                                    <li><Link to="#">Explore</Link></li>
                                    <li>Explore</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>                    
            </section>
            <TodayPicks data={data} />
            <Footer />
        </div>
    );
}


export default Explore01;
