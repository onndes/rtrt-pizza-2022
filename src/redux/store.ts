import { useDispatch } from 'react-redux'
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

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

export const useAppDispatch = () => useDispatch<AppDispatch>()
