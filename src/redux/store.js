import { configureStore } from '@reduxjs/toolkit'

import pizzaReducer from './slices/pizzaSlice'
import { pizzaApi } from '../service/pizzaApi'

export const store = configureStore({
    reducer: {
        pizza: pizzaReducer,
        [pizzaApi.reducerPath]: pizzaApi.reducer,
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(pizzaApi.middleware),
})
