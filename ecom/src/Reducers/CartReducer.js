const initialState = {
  cartProduct: []
}
const addToCartReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_TO_CART':
      return {
        ...state,
        cartProduct: [...state.cartProduct, action.payload]
      }
    case 'REMOVE_FROM_CART':
      debugger
      return {
        ...state,
        cartProduct: state.cartProduct.slice(action.payload, 1)
      }
    default:
      return state;
  }
}
export default addToCartReducer;