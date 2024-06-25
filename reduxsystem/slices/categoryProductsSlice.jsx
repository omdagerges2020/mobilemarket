import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

// Data
const data = {
    categoryProducts: [],
    loadingCategoryProducts: true,
    errorCategoryProducts: null,
}

// Getting Dta Function
export const getCategoryProducts = createAsyncThunk("getCategoryProducts", async(id, thunkApi)=>{
    const {rejectWithValue} = thunkApi;
    try{
        const res = await axios({
            method: "get",
            url: `https://dummyjson.com/products/category/${id}`
        })
        return res.data
    }catch(er){
        return rejectWithValue(er)
    }
})

// Create Sloice 
const categoryProductsSlice = createSlice({
    name: "categoryproducts",
    initialState: data,
    reducers: {},
    extraReducers: (builder)=>{
        builder.addCase(getCategoryProducts.pending, (state, action)=>{
            state.loadingCategoryProducts = true;
        })
        builder.addCase(getCategoryProducts.fulfilled, (state, action)=>{
            state.loadingCategoryProducts = false;
            state.categoryProducts = action.payload.products;
        })
        builder.addCase(getCategoryProducts.rejected, (state, action)=>{
            state.loadingCategoryProducts = false;
            state.errorCategoryProducts = action.payload;
        })
    }
})

export const categoryItems = categoryProductsSlice.reducer;
