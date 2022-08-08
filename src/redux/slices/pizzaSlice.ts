import axios, { AxiosError } from 'axios'
import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit'

import { identity, pickBy } from 'lodash'
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

        const baseUrl = 'https://62bdb91fc5ad14c110c5676f.mockapi.io/items'

        const { data } = await axios.get<PizzaType[]>(baseUrl, {
            params: pickBy(
                {
                    sortBy: sortName,
                    order: orderSort,
                    search,
                    category: activeCategory,
                },
                identity
            ),
        })

        return data
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
