import React , { useState, useEffect, Fragment } from 'react';
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import CardModal from '../CardModal';
import { AccountDetails } from '../../../AccountDetails'
import img1 from '../../../assets/images/box-item/card-item-3.jpg'
import imga1 from '../../../assets/images/avatar/avt-1.jpg'

import 'swiper/scss';
import 'swiper/scss/navigation';
import 'swiper/scss/pagination';

const LiveAuction = props => {
    const { marketplace, account } = AccountDetails()
    const [data, setData] = useState([])
    const [modalShow, setModalShow] = useState(false);
    
    useEffect(async()=>{
        const res = await marketplace.methods.getAllItems().call()
        const x = await marketplace.methods.getget().call()

console.log(x, 'xxxxxx')

        if(res){
            setData(res)
        }
    }, [marketplace, account])
console.log(data, 'data')
    return (
        <Fragment>
            <section className="tf-section live-auctions">
                <div className="themesflat-container">
                    <div className="row">
                        <div className="col-md-12">
                            <div className="">
                                {/* <h2 className="tf-title">Sales</h2> */}
                            </div>
                        </div>
                        <div className="col-md-12">
                            <Swiper
                                modules={[Navigation, Pagination, Scrollbar, A11y]}
                                spaceBetween={30}

                                breakpoints={{
                                    0: {
                                        slidesPerView: 1,
                                    },
                                    767: {
                                    slidesPerView: 2,
                                    },
                                    991: {
                                    slidesPerView: 3,
                                    },
                                    1300: {
                                        slidesPerView: 4,
                                    },
                                }}
                                navigation
                                pagination={{ clickable: true }}
                                scrollbar={{ draggable: true }}
                            >
                                    {
                                        data.slice(0,7).map((item,index) => (
                                            <SwiperSlide key={index}>
                                                <div className="swiper-container show-shadow carousel auctions">
                                                    <div className="swiper-wrapper">
                                                        <div className="swiper-slide">
                                                            <div className="slider-item">										
                                                                <div className={`sc-card-product ${item.sold ? 'comingsoon' : '' } `}>
                                                                    <div className="card-media">
                                                                        <Link to={`/item-details/${item.id}`}><img src={img1} alt="axies" /></Link>
                                                                        {item.sold && <div className="sold" style={{ backgroundColor: item.canceled > 0 ? '#ffbd0c' : '#ca0b00', color: item.canceled ? '#343444' : 'white' }}>{ item.canceled ? 'CANCELED' : 'SOLD'}</div>}
                                                                    </div>
                                                                    <div className="card-title">
                                                                        <h5><Link to={`/item-details/${item.id}`}>"{item.title}"</Link></h5>
                                                                    </div>
                                                                    <div className="meta-info" style={{overflow: 'hidden'}}>
                                                                        <div className="author">
                                                                            <div className="avatar">
                                                                                <img src={imga1} alt="axies" />
                                                                            </div>
                                                                            <div className="info" style={{width: '140px', overflow:'hidden', textOverflow:'ellipsis'}}>
                                                                                <span>Owned By</span>
                                                                                <h6 style={{ overflow:'hidden', textOverflow:'ellipsis'}}> <Link to="/authors-02">{item.seller}
                                                                                </Link> </h6>
                                                                            </div>
                                                                        </div>
                                                                        <div className="price">
                                                                            <span>Current price</span>
                                                                            <h5> {item.price}</h5>
                                                                        </div>
                                                                    </div>
                                                                </div>    	
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </SwiperSlide>
                                        ))
                                    }
                            </Swiper>
                        </div>
                    </div>
                </div>
            </section>
            <CardModal
                show={modalShow}
                onHide={() => setModalShow(false)}
                />
        </Fragment>
    );
}

LiveAuction.propTypes = {
    data: PropTypes.array.isRequired,
}


export default LiveAuction;
