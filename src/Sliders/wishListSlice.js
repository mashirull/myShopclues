import { createSlice} from "@reduxjs/toolkit";

const localStorageData = JSON.parse(localStorage.getItem('wishlist'))

const initialState = {
    wishListData : !Array.isArray(localStorageData) ? [] : localStorageData
}



const wishListSlice = createSlice({
    name : 'wishList',
    initialState,
    reducers : {
        addToWishList : (state , action) => {
            let existingWishList = state.wishListData.findIndex((curElem)=> curElem.id === action.payload.id)

            if(existingWishList === -1){
                state.wishListData = [...state.wishListData , action.payload]
                localStorage.setItem('wishlist' ,  JSON.stringify(state.wishListData))
            }
        },

        removeFromWishList : (state , action) => {
            let id = action.payload

            const updatedWishLisedProduct = state.wishListData.filter((curElem) => curElem.id !== id)

            state.wishListData = updatedWishLisedProduct

            localStorage.setItem('wishlist' ,  JSON.stringify(state.wishListData))
        }
    }
})


export const {addToWishList , removeFromWishList} = wishListSlice.actions;
export default wishListSlice.reducer;