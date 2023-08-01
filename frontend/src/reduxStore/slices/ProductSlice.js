import { createSlice } from "@reduxjs/toolkit";

const ProductSlice = createSlice({
    name:'product',
    initialState:{
        isChanged:false,
        currentProduct:{}
    },
    reducers:{
        toggleIsChange(state){
            state.isChanged = !state.isChanged
        },
        updateProductInSlice(state,action){
            state.currentProduct = action.payload
        }

    }
})

export const {toggleIsChange, updateProductInSlice} = ProductSlice.actions;

export default ProductSlice.reducer