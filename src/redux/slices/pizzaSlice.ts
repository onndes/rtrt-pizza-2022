/* eslint-disable max-len */
import axios, { AxiosError } from 'axios'
import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit'
import { PizzaType } from '../../@types/types'

type FetchPizzasParams = {
    sortName: string
    orderSort: string
    search: string
    activeCategory: number
}

export const fetchPizzas = createAsyncThunk<PizzaType[], FetchPizzasParams>(
    'pizza/fetchPizzas',
    async (params) => {
        const { sortName, orderSort, search, activeCategory } = params

        const baseUrl = 'https://62bdb91fc5ad14c110c5676f.mockapi.io/'
        let link = `${baseUrl}items?sortBy=${sortName}&order=${orderSort}&search=${search}`

        if (activeCategory !== 0) {
            link += `&category=${activeCategory}`
        }

        const response = await axios.get<PizzaType[]>(link)

        return response.data
    }
)

interface PizzaSliceType {
    pizzas: PizzaType[]
    isLoading: boolean
    error: null | AxiosError
}

const initialState: PizzaSliceType = {
    pizzas: [],
    isLoading: false,
    error: null,
}

export const pizzaSlice = createSlice({
    name: 'pizza',
    initialState,
    reducers: {
        setPizzas: (state, action: PayloadAction<PizzaType[]>) => {
            state.pizzas = action.payload
        },
    },
    extraReducers: (builder) => {
        builder.addCase(fetchPizzas.pending, (state) => {
            state.isLoading = true
            state.pizzas = []
        })
        builder.addCase(fetchPizzas.fulfilled, (state, action) => {
            state.pizzas = action.payload
            state.isLoading = false
        })
        builder.addCase(fetchPizzas.rejected, (state, action) => {
            const err = action.error as AxiosError

            state.isLoading = false
            state.error = err
            state.pizzas = []
        })
    },
})

export const { setPizzas } = pizzaSlice.actions

export default pizzaSlice.reducer
