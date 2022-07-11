/* eslint-disable max-len */
import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    activeCategory: 0,
    orderSort: false,
    sort: 0,
}

export const filterSlice = createSlice({
    name: 'filter',
    initialState,
    reducers: {
        setActiveCategory: (state, action) => {
            state.activeCategory = action.payload
        },
        setSort: (state, action) => {
            state.sort = action.payload
        },
        setOrderSort: (state, action) => {
            state.orderSort = action.payload
        },
    },
})

export const { setActiveCategory, setSort, setOrderSort } = filterSlice.actions

export default filterSlice.reducer
