import React from 'react'

import CartBottom from '../components/CartBottom'
import CartItems from '../components/CartItems'
import CartTop from '../components/CartTop'
import { useAppSelector } from '../hooks/useAppSelector'
import CartEmpty from './CartEmpty'

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
