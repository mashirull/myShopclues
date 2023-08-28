import { createSlice } from "@reduxjs/toolkit";


const initialState = {
    user : JSON.parse(localStorage.getItem('user'))===null ? {} : JSON.parse(localStorage.getItem('user')),
    isLoggedIn :  localStorage.getItem('token')
}

const authSlice = createSlice({
    name : "auth"  ,
    initialState,
    reducers : {
        login : (state ,action) => {
            state.user = action.payload
            localStorage.setItem('token', action.payload.token)
            localStorage.setItem('user' , JSON.stringify(state.user))
            // console.log(state.isLoggedIn)
            state.isLoggedIn = true
        },
        logout : (state , action) => {
            localStorage.removeItem('token')
            localStorage.removeItem('user')
            state.isLoggedIn = false
            state.user = {}
        }
    }
})

export const {login , logout} = authSlice.actions

export default authSlice.reducer