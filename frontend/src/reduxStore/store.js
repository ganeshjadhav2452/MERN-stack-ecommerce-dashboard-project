import { configureStore } from "@reduxjs/toolkit";
import authReducer from './slices/authSlice'
import ProductSliceReducer from './slices/ProductSlice'
const store = configureStore({
    reducer:{
        auth:authReducer,
        product:ProductSliceReducer
        }
})

export default store