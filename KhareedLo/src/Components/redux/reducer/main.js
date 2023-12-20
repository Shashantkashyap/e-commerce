import {getProductsReducer} from "./ProductsReducer"
import {combineReducers} from "redux";

const rootreducers = combineReducers({
    getProductsData : getProductsReducer
})

export default rootreducers;