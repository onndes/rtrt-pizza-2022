export interface PizzaType {
    id: string
    imageUrl: string
    title: string
    types: number[]
    sizes: number[]
    price: number
    category: number
    rating: number
}

export interface PizzaCartType extends PizzaType {
    selectedType: number
    selectedSize: number
}

export type CartItemType = {
    pizza: PizzaCartType
    options: { count: number }
}
