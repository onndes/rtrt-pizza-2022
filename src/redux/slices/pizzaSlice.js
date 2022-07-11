/* eslint-disable max-len */
import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    pizzas: [],
    filter: { activeCategory: 0, orderSort: false, sort: 0 },
}

export const pizzaSlice = createSlice({
    name: 'pizza',
    initialState,
    reducers: {
        setPizzas: (state, action) => {
            state.pizzas = action.payload
        },
        setActiveCategory: (state, action) => {
            state.filter.activeCategory = action.payload
        },
        setSort: (state, action) => {
            state.filter.sort = action.payload
        },
        setOrderSort: (state, action) => {
            state.filter.orderSort = action.payload
        },
    },
})

export const { setPizzas, setActiveCategory, setSort, setOrderSort } =
    pizzaSlice.actions

export default pizzaSlice.reducer
