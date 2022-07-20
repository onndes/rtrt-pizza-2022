import { configureStore } from '@reduxjs/toolkit'

import pizzaReducer from './slices/pizzaSlice'
import filterReducer from './slices/filterSlice'
import cartReducer from './slices/cartSlice'
import { pizzaApi } from '../service/pizzaApi'

export const store = configureStore({
    reducer: {
        pizza: pizzaReducer,
        filter: filterReducer,
        cart: cartReducer,
        [pizzaApi.reducerPath]: pizzaApi.reducer,
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(pizzaApi.middleware),
})
