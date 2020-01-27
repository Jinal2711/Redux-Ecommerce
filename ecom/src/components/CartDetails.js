import React from 'react';
import { connect } from 'react-redux';
import {
  BrowserRouter as Router,
  Link
} from "react-router-dom";
const CartDetails = (props) => {
  console.log(JSON.stringify(props.cartProduct)); //k mtlb
  let priceTotal = props.cartProduct.map(p => p.price).reduce((acc, p) => acc + p, 0).toFixed(2);
  return (
    <div>
      <div className="container mt-3">
        {
          props.cartProduct.map(p => {
            return (
              <div className="row mt-3 mb-3">
                <div className="col-4">
                  <img src="https://picsum.photos/350/200" className="detailImg"></img>
                </div>
                <div className="col-8">
                  <div className="">
                    <Link to={`/detail/${p.slug}`}><h5 className="card-title">{p.name}</h5></Link>
                    <p className="card-text">{p.description}</p>
                    <div className="d-flex justify-content-between align-items-center">
                      <h6 className="text-muted">₹{p.price}</h6>
                    </div>
                  </div>
                </div>
              </div>
            )
          })
        }
        <div className="mb-3 d-flex justify-content-center align-items-baseline">
          <button type="button" className="btnTotal mr-3">₹{priceTotal}</button>
          <button type="button" className="btn btn-primary btn-lg detailsBtn ml-3"><i className="fas fa-shopping-cart pr-3" style={{ 'color': 'white', 'fontSize': '25px' }}></i>PROCCEED TO CHECKOUT</button>
        </div>
      </div>
    </div>
  )
}

const mapStateToProps = state => ({
  cartProduct: state.addToCartReducer.cartProduct,
})
export default connect(mapStateToProps)(CartDetails);