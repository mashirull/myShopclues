import { configureStore } from "@reduxjs/toolkit";
import productReducer from '../Sliders/productSlice';
import cartReducer from '../Sliders/cartSlice';
import authReducer from '../Sliders/authSlice';
import wishListReducer from '../Sliders/wishListSlice';


const store = configureStore({
    reducer : {
        product : productReducer,
        cart : cartReducer,
        auth : authReducer,
        wishList : wishListReducer
    }
})

export default store ;