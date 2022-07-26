/* eslint-disable max-len */
import axios from 'axios'
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'

export const fetchPizzas = createAsyncThunk(
    'pizza/fetchPizzas',
    async ({ sortName, orderSort, search, activeCategory }) => {
        const baseUrl = 'https://62bdb91fc5ad14c110c5676f.mockapi.io/'
        let link = `${baseUrl}items?sortBy=${sortName}&order=${orderSort}&search=${search}`

        if (activeCategory !== 0) {
            link += `&category=${activeCategory}`
        }
        const response = await axios.get(link)

        return response.data
    }
)

const initialState = {
    pizzas: [],
    isLoading: false,
    error: null,
}

export const pizzaSlice = createSlice({
    name: 'pizza',
    initialState,
    reducers: {
        setPizzas: (state, action) => {
            state.pizzas = action.payload
        },
    },
    extraReducers: {
        [fetchPizzas.pending]: (state) => {
            state.isLoading = true
            state.pizzas = []
        },
        [fetchPizzas.fulfilled]: (state, action) => {
            state.pizzas = action.payload
            state.isLoading = false
        },
        [fetchPizzas.rejected]: (state, action) => {
            state.isLoading = false
            state.error = action.error
            state.pizzas = []
        },
    },
})

export const { setPizzas, setActiveCategory, setSort, setOrderSort } =
    pizzaSlice.actions

export default pizzaSlice.reducer
