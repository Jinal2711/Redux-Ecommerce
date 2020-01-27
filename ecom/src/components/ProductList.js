
import Product from './Products';
import React, { useEffect } from 'react';
import { fetchProductData } from '../Actions';
import { connect } from 'react-redux';
function ProductList(props) {
  useEffect(() => {
    props.fetchProductData1();
  }, [])
  const { isLoading, products, error } = props;
  return (
    <>
      <section className="jumbotron text-center">
        <div className="container">
          <h1>Album example</h1>
          <p className="lead text-muted">Something short and leading about the collection below—its contents, the creator, etc. Make it short and sweet, but not too short so folks don’t simply skip over it entirely.</p>
          <p>
            <a href="#" className="btn btn-primary my-2">Main call to action</a>
            <a href="#" className="btn btn-secondary my-2">Secondary action</a>
          </p>
        </div>
      </section>
      <div className="album py-5 bg-light">
        <div className="container">
          <div className="row">
            {products.map(p => <Product name={p.name} description={p.description} price={p.price} slug={p.slug} />)}
          </div>
        </div>
      </div>
    </>
  )
}

const mapStateToProps = state => ({
  isLoading: state.productReducer.isLoading,
  products: state.productReducer.products,
  error: state.productReducer.error,
})
const mapDispatchToProps = dispatch => ({
  fetchProductData1: () => dispatch(fetchProductData()),
})

export default connect(mapStateToProps, mapDispatchToProps)(ProductList);
// nhi meko yha pe nhi marna