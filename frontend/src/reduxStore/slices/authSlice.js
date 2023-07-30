import {createSlice} from '@reduxjs/toolkit'



const authSlice = createSlice({

    name:'auth',
    initialState:{
        isLoggedIn:false,
    },
    reducers:{
         logoutHandler(state){
            localStorage.removeItem('user')
            state.isLoggedIn = false  
        }
    }
})


export const {logoutHandler} = authSlice.actions;

export default authSlice.reducer;