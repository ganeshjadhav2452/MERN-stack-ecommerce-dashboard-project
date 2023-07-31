import { createSlice } from "@reduxjs/toolkit";

const ProductSlice = createSlice({
    name:'product',
    initialState:{
        isChanged:false,
    },
    reducers:{
        toggleIsChange(state){
            state.isChanged = !state.isChanged
        }

    }
})

export const {toggleIsChange} = ProductSlice.actions;

export default ProductSlice.reducer