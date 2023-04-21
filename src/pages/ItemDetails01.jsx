import React, { useState, useEffect } from 'react';
import Header from '../components/header/Header';
import Footer from '../components/footer/Footer';
import { Link } from 'react-router-dom';
import 'react-tabs/style/react-tabs.css';
import img6 from '../assets/images/avatar/avt-8.jpg'
import img7 from '../assets/images/avatar/avt-2.jpg'
import imgdetail1 from '../assets/images/box-item/images-item-details.jpg'
import { AccountDetails } from '../AccountDetails'
import { useParams } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const ItemDetails01 = () => {
    let { id } = useParams();
    const { marketplace, account } = AccountDetails()
    const [details, setDetails] = useState(null)
    useEffect(async () => {
        const res = await marketplace.methods.getItem(id).call()
        if (res) {
            setDetails(res)
        }
    }, [marketplace, account, id])

    const buy = async() => {
        await marketplace.methods.buyItem(id).send({ from: account }).then(async()=>{
            const res = await marketplace.methods.getItem(id).call()
        if (res) {
            setDetails(res)
        }
            toast('Purchased Successfully')
        }).catch((e)=>{
            toast('Error Purchasing Item')
          })    
    }

    const cancel = async() => {
        await marketplace.methods.cancelSale(id).send({ from: account }).then(()=>{
            toast('Item Canceled')
        }).catch((e)=>{
            toast('Error Canceling Item')
          })    
    }

if(details === null){
    return(<></>)
}
console.log(details, 'details', account)
    return (
        <div className='item-details'>
            <Header />
            <ToastContainer />
            <section className="flat-title-page inner">
                <div className="overlay"></div>
                <div className="themesflat-container">
                    <div className="row">
                        <div className="col-md-12">
                            <div className="page-title-heading mg-bt-12">
                                <h1 className="heading text-center">Item Details</h1>
                            </div>
                            <div className="breadcrumbs style2">
                                <ul>
                                    <li><Link to="/">Home</Link></li>
                                    <li><Link to="#">Explore</Link></li>
                                    <li>Details</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <div className="tf-section tf-item-details">
                <div className="themesflat-container">
                    <div className="row">
                        <div className="col-xl-6 col-md-12">
                            <div className="content-left">
                                <div className="media">
                                    <img src={imgdetail1} alt="Axies" />
                                 
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-6 col-md-12">
                            <div className="content-right">
                                <div className="sc-item-details">
                                    <h2 className="style2">{details[4]} </h2>
                                    <div className="client-infor sc-card-product">
                                        <div className="col-8 meta-info">
                                            <div className="author">
                                                <div className="avatar">
                                                    <img src={img6} alt="Axies" />
                                                </div>
                                                <div className="info">
                                                    <span>Owned By</span>
                                                    <h6> <span to="/author-02">{details[1]}</span> </h6>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="meta-info">
                                            <div className="author">
                                                <div className="avatar">
                                                    <img src={img7} alt="Axies" />
                                                </div>
                                                <div className="info">
                                                    <span>Current price</span>
                                                    <h6> {details[2]}</h6>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <p>{details[5]}</p>
                                    <div className="meta-item-details style2">
                                    </div>
                                    {!details[3] && <>
                                        {account !== details[1] ? <>
                                            <span onClick={buy} className="sc-button loadmore style bag fl-button pri-3"><span>Buy</span></span></> : <>
                                            <span onClick={cancel} className="sc-button loadmore style fl-button pri-3"><span>Cancel</span></span></>}
                                    </>}
                                    
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
}

export default ItemDetails01;
