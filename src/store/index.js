import {createStore, combineReducers, applyMiddleware} from "redux"
import { userReducer } from "./userReducer"
import{ composeWithDevTools} from "redux-devtools-extension"
import { usersReducer } from "./usersReducer"
import { productsReducer } from "./productsReducer"
import { authReducer } from "./authReducer"
import { categoriesReducer } from "./categoriesReduce"
import thunk from 'redux-thunk';


const rootReducer = combineReducers({
    user: userReducer,
    users: usersReducer,
    products: productsReducer,
    isAuth: authReducer,
    categories: categoriesReducer
})

export const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)))


