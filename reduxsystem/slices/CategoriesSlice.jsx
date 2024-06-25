import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

// Data
const data = {
    categories: [],
    loadingCategories: true,
    errorCategories: null,
}

// Get Categories Data Function
export const getCategories = createAsyncThunk("getcategories", async(id, thunkApi)=>{
    const {rejectWithValue} = thunkApi;
    try{
        const res = await axios({
            method: "get",
            url: "https://dummyjson.com/products/categories"
        })
        return res.data
    }catch(er){
        return rejectWithValue(er)
    }
})

// Create Slice
const categoriesSlice = createSlice({
    name: "categories",
    initialState: data,
    reducers: {},
    extraReducers: (builder)=>{
        builder.addCase(getCategories.pending, (state, action)=>{
            state.loadingCategories = true;
        })
        builder.addCase(getCategories.fulfilled, (state, action)=>{
            state.loadingCategories = false;
            state.categories = action.payload;
        })
        builder.addCase(getCategories.rejected, (state, action)=>{
            state.loadingCategories = false;
            state.errorCategories = action.payload;
        })
    }
})

export const allCategories = categoriesSlice.reducer;