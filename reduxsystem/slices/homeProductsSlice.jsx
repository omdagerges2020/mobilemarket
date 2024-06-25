import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import axios from "axios";


// data
const data = {
    products: [],
    loadingHomeProducts: true,
    errorHomeProducts: null
}

// Getting products Function
export const getHomeProducts = createAsyncThunk("getproducts", async(id, thunkApi)=>{
    const {rejectWithValue} = thunkApi
    try {
        const res = await axios ({
            method: "get",
            url: "https://dummyjson.com/products"
        })
        return res.data;
       
    } catch(er){
        return rejectWithValue(er)
    }
})

// Create Slice
const homeProductsSlice = createSlice({
    name: "homeProducts",
    initialState: data,
    reducers: {},
    extraReducers: (builder)=>{
        builder.addCase(getHomeProducts.pending, (state, action)=>{
            state.loadingHomeProducts = true;
        })
        builder.addCase(getHomeProducts.fulfilled, (state, action)=>{
            state.loadingHomeProducts = false;
            state.products = action.payload.products;
        })
        builder.addCase(getHomeProducts.rejected, (state, action)=>{
            state.loadingHomeProducts = false;
            state.errorHomeProducts = action.payload;
        })

    }
})

export const homeProducts = homeProductsSlice.reducer;