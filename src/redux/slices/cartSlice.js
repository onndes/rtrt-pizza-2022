import { createSlice } from '@reduxjs/toolkit'
import { Provider } from 'react-redux'

const initialState = {
    pizzas: [],
    countPizzas: 0,
    totalAmount: 0,
}

export const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addPizzaToCart: (state, action) => {
            if (state.pizzas.length === 0) {
                state.pizzas = [
                    { pizza: action.payload, options: { count: 1 } },
                ]
            } else {
                let isAdd = false
                state.pizzas.map((i) => {
                    const repeatCheck =
                        i.pizza.id === action.payload.id &&
                        i.pizza.selectedSize === action.payload.selectedSize &&
                        i.pizza.selectedType === action.payload.selectedType

                    if (repeatCheck) {
                        i.options.count++
                        isAdd = true
                        return i
                    }

                    return i
                })
                if (!isAdd) {
                    state.pizzas.push({
                        pizza: action.payload,
                        options: { count: 1 },
                    })
                }
            }
            state.countPizzas += 1
            state.totalAmount += action.payload.price
        },
        clearCart: (state) => {
            state.pizzas = []
            state.countPizzas = 0
            state.totalAmount = 0
        },
    },
})

export const { addPizzaToCart, clearCart } = cartSlice.actions

export default cartSlice.reducer
