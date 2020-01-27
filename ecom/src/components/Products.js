import React from 'react';
import {
  BrowserRouter as Router,
  Link
} from "react-router-dom";
import { connect } from 'react-redux';
import { addToCart, removeFromCart } from '../Actions';

function Product({ name, description, price, slug, addToCart, cartProduct }) {
  const isExistInCart = cartProduct.some(p => p.slug === slug)
  const addToCartClick = () => {
    const product = {
      name,
      description,
      price,
      slug
    }
    console.log(product);
    addToCart(product)
    //this.refs.btn.setAttribute("disabled", "disabled");
  }
  return (<div className="col-md-4">
    <div className="card mb-4 shadow-sm">
      <svg className="bd-placeholder-img card-img-top" width="100%" height={225} xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid slice" focusable="false" role="img" aria-label="Placeholder: Thumbnail"><title>Placeholder</title><rect width="100%" height="100%" fill="#55595c" /><text x="50%" y="50%" fill="#eceeef" dy=".3em">Image</text></svg>
      <div className="card-body">
        <Link to={`/detail/${slug}`}><h5 className="card-title">{name}</h5></Link>
        <p className="card-text">{description}</p>
        <div className="d-flex justify-content-between align-items-center">
          <h6 className="text-muted">₹ {price}</h6>
          <div className="btn-group">{
            isExistInCart ? <button type="button" className="btn btn-outline-secondary" onClick={() => removeFromCart(slug)}>Remove from cart</button>
              : <button type="button" className="btn btn-outline-secondary" onClick={() => addToCartClick()}>Add to Cart</button>
          }
          </div>
        </div>
      </div>
    </div>
  </div>)
}
const mapStateToProps = state => ({
  cartProduct: state.addToCartReducer.cartProduct
})
const mapDispatchToProps = dispatch => ({
  addToCart: (product) => dispatch(addToCart(product)),
  removeFromCart: (index) => dispatch(removeFromCart(index))
})
export default connect(mapStateToProps, mapDispatchToProps)(Product);
