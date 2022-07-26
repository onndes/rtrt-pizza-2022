import { configureStore } from '@reduxjs/toolkit'

import pizza from './slices/pizzaSlice'
import filter from './slices/filterSlice'
import cart from './slices/cartSlice'

export const store = configureStore({
    reducer: {
        pizza,
        filter,
        cart,
    },
})
