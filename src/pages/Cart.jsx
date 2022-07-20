/* eslint-disable max-len */
import React from 'react'
import { useSelector } from 'react-redux'

import CartBottom from '../components/CartBottom'
import CartItems from '../components/CartItems'
import CartTop from '../components/CartTop'
import CartEmpty from './CartEmpty'

export default function Cart() {
    const { countPizzas, totalAmount, pizzas } = useSelector(({ cart }) => cart)

    return (
        <>
            {pizzas.length > 0 ? (
                <div className="container container--cart">
                    <div className="cart">
                        <CartTop />
                        <div className="content__itemsCart">
                            <CartItems pizzas={pizzas} />
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
