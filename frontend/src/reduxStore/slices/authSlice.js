import {createSlice} from '@reduxjs/toolkit'


const token = localStorage.getItem('user')
const authSlice = createSlice({

    name:'auth',
    initialState:{
        isLoggedIn:token?true:false
    },
    reducers:{
         logoutHandler(state){
            localStorage.removeItem('user')
            
        },
         loginHandler(state,action){
         
            state.isLoggedIn = true  
          
        }
    }
})


export const {logoutHandler, loginHandler} = authSlice.actions;

export default authSlice.reducer;