import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import axios from "axios";



// data
const data = {
    singlePrdouct: null,
    loadingSingleProduct: true,
    errorSingleProduct: null,
    bagProducts: [],
}

// Getting products Function
export const getSingleProduct = createAsyncThunk("getsingleproduct", async(id, thunkApi)=>{
    const {rejectWithValue} = thunkApi
    try {
        const res = await axios ({
            method: "get",
            url: `https://dummyjson.com/products/${id}`
        })
        return res.data;
       
    } catch(er){
        return rejectWithValue(er)
    }
})

// Create Slice
const SingleProductSlice = createSlice({
    name: "SingleProduct",
    initialState: data,
    reducers: {
        // AddToBag
         addToBag: (state,action)=>{
            const checkArr = state.bagProducts.some((prod)=>{
                return prod.id == action.payload.id;
            })
            if(!checkArr){
                state.bagProducts.push({...action.payload, itemsCount: 1});
            }else {
                const newArr = state.bagProducts.map((prod)=>{
                    if(prod.id == action.payload.id){
                        prod.itemsCount++
                    }
                    return prod;
                })
                state.bagProducts = newArr;
            }
            
        },
        // increment
        increment: (state,action)=>{
            const newArr = state.bagProducts.map((prod)=>{
                if(prod.id == action.payload.id){
                    prod.itemsCount++
                }
                return prod;
            })
            state.bagProducts = newArr;
        },
        // decrement
        decrement: (state,action)=>{
            const newArr = state.bagProducts.map((prod)=>{
                if(prod.id == action.payload.id && action.payload.itemsCount > 1){
                    prod.itemsCount--
                }
                return prod;
            })
            state.bagProducts = newArr;
        },
        // delete product
        deleteItem: (state,action)=>{
            const deletedItems = state.bagProducts.filter((obj)=>{
                return obj.id !== action.payload.id
            })
            state.bagProducts = deletedItems;
        }
    },
    extraReducers: (builder)=>{
        builder.addCase(getSingleProduct.pending, (state, action)=>{
            state.loadingSingleProduct = true;
        })
        builder.addCase(getSingleProduct.fulfilled, (state, action)=>{
            state.loadingSingleProduct = false;
            state.singlePrdouct = action.payload;
        })
        builder.addCase(getSingleProduct.rejected, (state, action)=>{
            state.loadingSingleProduct = false;
            state.errorSingleProduct = action.payload;
        })

    }
})

export const SingleProd = SingleProductSlice.reducer;
export const {addToBag, increment, decrement, deleteItem} = SingleProductSlice.actions;