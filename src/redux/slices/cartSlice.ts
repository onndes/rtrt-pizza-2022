import { createSlice, PayloadAction } from '@reduxjs/toolkit'

import { CartItemType, PizzaCartType } from '../../@types/types'
import { RootState } from '../store'

interface CartSliceState {
    cartItems: CartItemType[]
    countPizzas: number
    totalAmount: number
}

const initialState: CartSliceState = {
    cartItems: [],
    countPizzas: 0,
    totalAmount: 0,
}

export const cartSlice = createSlice({
    name: 'cartItems',
    initialState,
    reducers: {
        addPizzaToCart: (state, action: PayloadAction<PizzaCartType>) => {
            if (state.cartItems.length === 0) {
                state.cartItems = [
                    { pizza: action.payload, options: { count: 1 } },
                ]
            } else {
                let isAdd = false

                state.cartItems.map((i) => {
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
                    state.cartItems.push({
                        pizza: action.payload,
                        options: { count: 1 },
                    })
                }
            }
            state.countPizzas += 1
            state.totalAmount += action.payload.price
        },
        clearCart: (state) => {
            state.cartItems = []
            state.countPizzas = 0
            state.totalAmount = 0
        },
        addSamePizza: (state, action: PayloadAction<number>) => {
            state.cartItems[action.payload].options.count += 1
            state.countPizzas += 1
            state.totalAmount += state.cartItems[action.payload].pizza.price
        },
        removeSamePizza: (state, action: PayloadAction<number>) => {
            state.countPizzas -= 1
            state.totalAmount -= state.cartItems[action.payload].pizza.price
            if (state.cartItems[action.payload].options.count > 1) {
                state.cartItems[action.payload].options.count -= 1
            } else {
                state.cartItems.splice(action.payload, 1)
            }
        },
        removePizza: (state, action: PayloadAction<number>) => {
            state.totalAmount -=
                state.cartItems[action.payload].pizza.price *
                state.cartItems[action.payload].options.count
            state.countPizzas -= state.cartItems[action.payload].options.count
            state.cartItems.splice(action.payload, 1)
        },
    },
})

export const selectCartItems = (state: RootState) => state.cart.cartItems

export const {
    addPizzaToCart,
    clearCart,
    addSamePizza,
    removeSamePizza,
    removePizza,
} = cartSlice.actions

export default cartSlice.reducer
