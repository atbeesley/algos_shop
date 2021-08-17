import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'
import { productListReducer, productDetailsReducer } from './reducers/productReducers'
import { basketReducer } from './reducers/basketReducers'
import { userLoginReducer } from './reducers/userReducers'

const reducer = combineReducers({
    productList: productListReducer,
    productDetails: productDetailsReducer,
    basket: basketReducer,
    userLogin: userLoginReducer
})
const basketItemsFromStorage = localStorage.getItem('basketItems') ? 
    JSON.parse(localStorage.getItem('basketItems')) : []

const initialState = {
    basket: { basketItems: basketItemsFromStorage }
}

const middleware = [thunk]
const store = createStore(
    reducer, 
    initialState, 
    composeWithDevTools(applyMiddleware(...middleware)))

export default store
