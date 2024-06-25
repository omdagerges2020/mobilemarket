import { configureStore } from "@reduxjs/toolkit";
import {homeProducts} from "../slices/homeProductsSlice";
import { allCategories } from "../slices/CategoriesSlice";
import { categoryItems } from "../slices/categoryProductsSlice";
import { SingleProd } from "../slices/SingleProductSlice";


const store = configureStore({
    reducer: {homeProducts, allCategories, categoryItems, SingleProd}
})

export default store;