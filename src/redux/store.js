import { configureStore } from '@reduxjs/toolkit'

import pizzaReducer from './slices/pizzaSlice'
import filterReducer from './slices/filterSlice'
import { pizzaApi } from '../service/pizzaApi'

export const store = configureStore({
    reducer: {
        pizza: pizzaReducer,
        filter: filterReducer,
        [pizzaApi.reducerPath]: pizzaApi.reducer,
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(pizzaApi.middleware),
})
