import { createSlice } from '@reduxjs/toolkit'

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
        addSamePizza: (state, action) => {
            state.pizzas[action.payload].options.count += 1
            state.countPizzas += 1
            state.totalAmount += state.pizzas[action.payload].pizza.price
        },
        removeSamePizza: (state, action) => {
            state.countPizzas -= 1
            state.totalAmount -= state.pizzas[action.payload].pizza.price
            if (state.pizzas[action.payload].options.count > 1) {
                state.pizzas[action.payload].options.count -= 1
            } else {
                state.pizzas.splice(action.payload, 1)
            }
        },
        removePizza: (state, action) => {
            state.totalAmount -=
                state.pizzas[action.payload].pizza.price *
                state.pizzas[action.payload].options.count
            state.countPizzas -= state.pizzas[action.payload].options.count
            state.pizzas.splice(action.payload, 1)
        },
    },
})

export const {
    addPizzaToCart,
    clearCart,
    addSamePizza,
    removeSamePizza,
    removePizza,
} = cartSlice.actions

export default cartSlice.reducer
