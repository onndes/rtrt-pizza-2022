/* eslint-disable max-len */
import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { OrderSortEnum } from '../../@types/enum'

type FilterParams = {
    activeCategory: number
    sort: number
    orderSort: OrderSortEnum
}

interface FilterSliceState {
    activeCategory: number
    sort: number
    orderSort: OrderSortEnum
    search: string
}

const initialState: FilterSliceState = {
    activeCategory: 0,
    sort: 0,
    orderSort: OrderSortEnum.DESC,
    search: '',
}

export const filterSlice = createSlice({
    name: 'filter',
    initialState,
    reducers: {
        setActiveCategory: (state, action: PayloadAction<number>) => {
            state.activeCategory = action.payload
        },
        setSort: (state, action: PayloadAction<number>) => {
            state.sort = action.payload
        },
        setOrderSort: (state, action: PayloadAction<OrderSortEnum>) => {
            state.orderSort = action.payload
        },
        setSearch: (state, action: PayloadAction<string>) => {
            state.search = action.payload
        },
        setFilterParams: (state, action: PayloadAction<FilterParams>) => {
            state.activeCategory = action.payload.activeCategory
            state.sort = action.payload.sort
            state.orderSort = action.payload.orderSort
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
