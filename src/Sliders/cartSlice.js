import { createSlice, current } from "@reduxjs/toolkit";


const getFromLocalstorage = () => {
    const cartData = JSON.parse(localStorage.getItem('cartData'))
    if(!Array.isArray(cartData)){
        return []
    }
    else{
        return cartData
    }
}

const initialState = {
    cartProductsItems : getFromLocalstorage()
}

const cartSlice =  createSlice({
    name : "cart",
    initialState ,
    reducers : {
        addCartProduct : (state , action) => {
            let cartItems = action.payload
        
            let existingProduct = state.cartProductsItems.findIndex((elem) => elem.id === cartItems.id)

            if(existingProduct !== -1){
                state.cartProductsItems[existingProduct].productQty += 1
            }
            else{
                state.cartProductsItems = [...state.cartProductsItems , cartItems]
                localStorage.setItem('cartData' , JSON.stringify(state.cartProductsItems))

            }

        
        },

        incrementItems :(state , action) => {
            let {index , productQty , stock} = action.payload
           
            if(productQty < stock){
                state.cartProductsItems[index].productQty += 1
                localStorage.setItem('cartData' , JSON.stringify(state.cartProductsItems))
            }
            else{
                state.cartProductsItems[index].productQty = stock
                localStorage.setItem('cartData' , JSON.stringify(state.cartProductsItems))
            }

        },

        decrementItems : (state , action) => {
            let {index , productQty} = action.payload

            if(productQty > 1){
                state.cartProductsItems[index].productQty -= 1
                localStorage.setItem('cartData' , JSON.stringify(state.cartProductsItems))
            }
            else{
                state.cartProductsItems[index].productQty = 1
                localStorage.setItem('cartData' , JSON.stringify(state.cartProductsItems))
            }
        },

        removeFromCart : (state , action) => {
            let id =  action.payload
            const allCartProduct = [...state.cartProductsItems]

            const updatedProduct = allCartProduct.filter((elem) => elem.id !== id)

            state.cartProductsItems = updatedProduct
            localStorage.setItem('cartData' , JSON.stringify(state.cartProductsItems))
        }
    }
})

export const {addCartProduct , removeFromCart , incrementItems ,  decrementItems} = cartSlice.actions
export default cartSlice.reducer