import { configureStore } from "@reduxjs/toolkit";
import  cartReducer from "./slices/cartSlice";
import {userApi} from './services/userApi'
import {setupListeners} from '@reduxjs/toolkit/query'

export const store = configureStore({
    reducer : {
        cart: cartReducer,
        [userApi.reducerPath] : userApi.reducer
    },

    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(userApi.middleware)
})

setupListeners(store.dispatch)

