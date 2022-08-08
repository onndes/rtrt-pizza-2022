import React from 'react'

import { CartBottom, CartItems, CartTop } from '../components'
import CartEmpty from './CartEmpty'
import { useAppSelector } from '../hooks/useAppSelector'

const Cart: React.FC = () => {
    const { countPizzas, totalAmount, cartItems } = useAppSelector(
        ({ cart }) => cart
    )

    return (
        <>
            {cartItems.length > 0 ? (
                <div className="container container--cart">
                    <div className="cart">
                        <CartTop />
                        <div className="content__itemsCart">
                            <CartItems pizzas={cartItems} />
                        </div>
                        <CartBottom
                            countPizzas={countPizzas}
                            totalAmount={totalAmount}
                        />
                    </div>
                </div>
            ) : (
                <CartEmpty />
            )}{' '}
        </>
    )
}

export default Cart
