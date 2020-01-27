import React from 'react';
import { connect } from 'react-redux';

function Details(props) {
  let product = props.products.find(p => p.slug === props.match.params.slug);
  return (
    <div>
      <div className="container pt-3">
        <div className="row">
          <div className="col-6">
            <div className="cartDetailImg">
              <svg className="bd-placeholder-img card-img-top" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid slice" focusable="false" role="img" aria-label="Placeholder: Thumbnail"><title>Placeholder</title><rect width="100%" height="100%" fill="#55595c" /><text x="50%" y="50%" fill="#eceeef" dy=".3em">Image</text></svg>
            </div>
            <div className="d-flex justify-content-between align-items-center">
              <button type="button" className="btn btn-primary btn-lg detailsBtn"><i className="fas fa-shopping-cart pr-3" style={{ 'color': 'white', 'fontSize': '25px' }}></i>ADD TO CART</button>
              <button type="button" className="btn btn-primary btn-lg detailsBtn"><i className="fas fa-shopping-cart pr-3" style={{ 'color': 'white', 'fontSize': '25px' }}></i>BUY NOW</button>
            </div>
          </div>
          <div className="col-6">
            <div className="detailsCard">
              <div className="card-body">
                <h5 className="card-title">{product.name}</h5>
                {/* <p className="card-text">{product.description}</p> */}
                <div className="d-flex justify-content-start align-items-center">
                  <h2 className="price">₹{product.price}</h2><p className="actualPrice">₹10.00</p><p className="offer">25% off</p>
                </div>
                <h5>Available offers</h5>
                <div style={{ 'fontSize': '13px', 'lineHeight': '13px' }}>
                  <p><i className="fa fa-tag offer" aria-hidden="true"></i> Bank Offer5% Unlimited Cashback on Flipkart Axis Bank Credit CardT&C</p>
                  <p><i className="fa fa-tag offer" aria-hidden="true"></i> Bank OfferExtra 5% off* with Axis Bank Buzz Credit CardT&C</p>
                  <p><i className="fa fa-calendar-check-o offer" aria-hidden="true"></i> No cost EMI ₹1,000/month. Standard EMI also availableView Plans</p>
                  <p><i className="fa fa-calendar-check-o offer " aria-hidden="true"></i> Exchange Offer. Not available at your pincodeBuy with Exchange</p>
                </div>
                <div className="d-flex justify-content-between">
                  <div className="desc">Description:</div>
                  <div className="pl-3"><p className="card-text">{product.description}</p></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div >
  )
}

const mapStateToProps = state => ({
  products: state.productReducer.products,
})
export default connect(mapStateToProps)(Details);
// export default connetct()(Details) // esa chutiya maregi na teko me



