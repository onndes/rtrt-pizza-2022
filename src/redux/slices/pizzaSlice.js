/* eslint-disable max-len */
import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    pizzas: []
}

export const pizzaSlice = createSlice({
    name: 'pizza',
    initialState,
    reducers: {
        setPizzas: (state, action) => {
            state.pizzas = action.payload
        },
    },
})

export const { setPizzas, setActiveCategory, setSort, setOrderSort } =
    pizzaSlice.actions

export default pizzaSlice.reducer
