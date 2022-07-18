/* eslint-disable max-len */
import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    activeCategory: 0,
    sort: 0,
    orderSort: 'desc',
    search: '',
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
        setSearch: (state, action) => {
            state.search = action.payload
        },
        setFilterParams: (state, action) => {
            const pl = action.payload
            state.activeCategory = Number(pl.category)
            state.sort = Number(pl.sort)
            state.orderSort = pl.order
        },
    },
})

export const {
    setActiveCategory,
    setSort,
    setOrderSort,
    setSearch,
    setFilterParams,
} = filterSlice.actions

export default filterSlice.reducer
