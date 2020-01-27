const initialState = {
  isLoading: true,
  products: [],
  error: false
}
const productReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'FETCH_PENDING':
      return {
        ...state,
        isLoading: true
      }
    case 'FETCH_SUCCESS':
      return {
        ...state,
        isLoading: false,
        products: action.payload
      }
    case 'FETCH_ERROR':
      return {
        ...state,
        isLoading: false,
        error: action.erro
      }
    default:
      return state
  }
}
export default productReducer;