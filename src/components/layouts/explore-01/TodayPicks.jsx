import React, { useState, Fragment } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import CardModal from "../CardModal";
import img1 from '../../../assets/images/box-item/card-item-3.jpg'
import imga1 from '../../../assets/images/avatar/avt-1.jpg'

const TodayPicks = (props) => {
  const { data, url = 'item-details' } = props;

console.log(data, 'data')

  const [visible, setVisible] = useState(8);
  const showMoreItems = () => {
    setVisible((prevValue) => prevValue + 4);
  };
console.log(img1, 'img1')
  const [modalShow, setModalShow] = useState(false);
  return (
    <Fragment>
      <section className="tf-section sc-explore-1">
        <div className="themesflat-container">
          <div className="row">
            <div className="col-md-12">
            </div>
            {data.slice(0, visible).map((item, index) => (
              <div
                key={index}
                className="fl-item col-xl-3 col-lg-4 col-md-6 col-sm-6"
              >
                <div
                  className={`sc-card-product ${item.sold ? 'comingsoon' : '' } `}
                >
                  <div className="card-media">
                    <Link to={`/${url}/${item.id}`}>
                      <img src={img1} alt="axies" />
                    </Link>
                    {item.sold && <div className="sold" style={{ backgroundColor: item.canceled > 0 ? '#ffbd0c' : '#ca0b00', color: item.canceled ? '#343444' : 'white' }}>{ item.canceled ? 'CANCELED' : 'SOLD'}</div>}
                  </div>
                  <div className="card-title">
                    <h5 className="style2">
                      <Link to={`/${url}/${item.id}`}>"{item.title}"</Link>
                    </h5>
                  </div>
                  <div className="meta-info">
                    <div className="author">
                      <div className="avatar">
                        <img src={imga1} alt="axies" />
                      </div>
                      <div className="info" style={{width: '140px', overflow:'hidden', textOverflow:'ellipsis'}}>
                        <span>Owned By</span>
                        <h6 style={{overflow:'hidden', textOverflow:'ellipsis'}}>
                          {item.seller}
                          <Link to="/authors-02">{item.seller}</Link>{" "}
                        </h6>
                      </div>
                    </div>
                    <div className="price">
                      <span>Current Price</span>
                      <h5> {item.price}</h5>
                    </div>
                  </div>
                  <div className="card-bottom">
                
                  </div>
                </div>
              </div>
            ))}
            {visible < data.length && (
              <div className="col-md-12 wrap-inner load-more text-center">
                <Link
                  to="#"
                  id="load-more"
                  className="sc-button loadmore fl-button pri-3"
                  onClick={showMoreItems}
                >
                  <span>Load More</span>
                </Link>
              </div>
            )}
          </div>
        </div>
      </section>
      <CardModal show={modalShow} onHide={() => setModalShow(false)} />
    </Fragment>
  );
};

TodayPicks.propTypes = {
  data: PropTypes.array.isRequired,
};

export default TodayPicks;
