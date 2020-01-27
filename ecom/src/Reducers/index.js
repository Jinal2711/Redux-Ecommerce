import { combineReducers } from "redux";
import productReducer from "./ProductReducer";
import addToCartReducer from './CartReducer';

export default combineReducers({
  productReducer,
  addToCartReducer
})