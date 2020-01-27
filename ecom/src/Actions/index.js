const FETCH_PENDING = 'FETCH_PENDING';
const FETCH_SUCCESS = 'FETCH_SUCCESS';
const FETCH_ERROR = 'FETCH_ERROR';
const ADD_TO_CART = 'ADD_TO_CART';
const REMOVE_FROM_CART = 'REMOVE_FROM_CART';

export const pendingState = () => {
  return {
    type: FETCH_PENDING
  }
}
export const successState = (data) => {
  return {
    type: FETCH_SUCCESS,
    payload: data
  }
}
export const errorState = (error) => {
  return {
    type: FETCH_ERROR,
    error: error
  }
}

export const addToCart = (product) => {
  return {
    type: ADD_TO_CART,
    payload: product
  }
}
export const removeFromCart = (index) => {
  return {
    type: REMOVE_FROM_CART,
    payload: index
  }
}

export const fetchProductData = () => {
  return async (dispatch) => {
    try {
      dispatch(pendingState())
      const items = await (await fetch('items.json')).json()
      dispatch(successState(items))
    } catch (error) {
      dispatch(errorState(error))
    }
  }
}